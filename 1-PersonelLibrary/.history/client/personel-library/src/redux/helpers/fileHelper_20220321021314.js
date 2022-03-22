export default function FileHeader(){
    return {"Content-Type": "multipart/form-data", "-F": "file=@yazar.xlsx;type=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
  }