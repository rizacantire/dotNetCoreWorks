import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  TableHead,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  Link,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useSelector, useDispatch } from "react-redux";
import { getMatchsAsync, matchList } from "../../redux/reduce/matchSlice";
import {
  commentatorList,
  getCommentatorAsync,
} from "../../redux/reduce/commentatorSlice";
import {
  getCommentatorMatchAsync,
  commentatorMatchList,
  addCommentatorMatchAsync,
  deleteCommentatorMatchAsync
} from "../../redux/reduce/commentatorMatchSlice";
export default function PaginationTable() {
  const [value, setValue] = React.useState("");
  const [currentMatch, setCurrentMatch] = React.useState("");

  const handleChange = (event) => setValue(event.target.value);
  const dispatch = useDispatch();
  const getData = useSelector(matchList);
  const getCommentators = useSelector(commentatorList);
  const getCommentatorMatchs = useSelector(commentatorMatchList);
  const items = [...getData].sort((a, b) => b.dateUnix - a.dateUnix);
  // ↓ which means we're not manipulating state, but just our `items` array alone
  console.log(getData);
  useEffect( () => {
   dispatch( getMatchsAsync());
   dispatch( getCommentatorAsync());
   dispatch( getCommentatorMatchAsync());
  }, [dispatch,getData]);

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  //  .sort((a, b) => (a.calories < b.calories ? -1 : 1));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function checkCommentator(id) {
    return getCommentatorMatchs.find((r) => r.matchId === id) ? true : false;
  }

  function getCurrentCommentator(id) {
    let res = getCommentatorMatchs.find((r) => r.matchId === id);
    try {
      let returnItem = res.commentator.firstName + " " + res.commentator.lastName;
      return returnItem;
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleAddCommentator =async (event)=> {
    let addCommentatorMatch = {commentatorId: value,matchId:event }
    //window.location.reload(false);
    dispatch(await addCommentatorMatchAsync(addCommentatorMatch))
  };
  const handleDeleteCommentator =async (event)=> {
    // let deleteCommentatorMatch = {commentatorId: value,matchId:event }
    dispatch(await deleteCommentatorMatchAsync(event.id))
    console.log(event.id);
  };

  
  return (
    <div >
      {" "}
      <TableContainer  component={Paper}>
        <Table style={{margin:"auto"}}
          size={"small"}
          sx={{ maxWidth: 1000 }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Sezon</TableCell>
              <TableCell>Hafta</TableCell>
              <TableCell>Tarih</TableCell>
              <TableCell>Ev Sahibi</TableCell>
              <TableCell>Konuk Takım</TableCell>
              <TableCell>Skor</TableCell>
              <TableCell>Anlatan</TableCell>
              <TableCell>Düzenle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? items.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : items
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ width: 20 }}>{row.season}</TableCell>
                <TableCell style={{ width: 20 }} align="left">
                  {row.gameWeek}
                </TableCell>
                <TableCell style={{ width: 20 }} align="left">
                  {new Date(row.dateUnix * 1000).toLocaleString()}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.homeName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.awayName}
                </TableCell>
                <TableCell style={{ width: 40 }} align="left">
                  {row.homegoalcount} - {row.awaygoalcount}
                </TableCell>
                <TableCell align="left">
                  {checkCommentator(row.id) ? (
                    getCurrentCommentator(row.id)
                  ) : (
                    <Select
                      defaultValue=""
                      size={"small"}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        {" "}
                        <em>None</em>
                      </MenuItem>
                      {getCommentators.map((s) => (
                        <MenuItem key={s.id} value={s.id}>
                          {s.firstName} {s.lastName}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </TableCell>
                <TableCell  align="left">
                  {checkCommentator(row.id) ? (
                   <Button onClick={()=>handleDeleteCommentator(getCommentatorMatchs.find((r) => r.matchId === row.id))} size={"small"} variant="contained" color="error" >
                   Sil
                 </Button> 
                  ) : (
                    <Button onClick={()=>handleAddCommentator(row.id)} size={"small"} variant="contained" color="success" >
                      Ekle
                    </Button> 
                     
                  )}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
                count={getData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}