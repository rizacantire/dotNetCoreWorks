import '@progress/kendo-theme-default/dist/all.css';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";
function App() {
  return (
    <div className="App">
      <AppBar>
        <AppBarSection>
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <h1 className="title">KendoReact</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <ul>
            <li>
              <span>What's New</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contacts</span>
            </li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </button>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} />
          </Avatar>
        </AppBarSection>
      </AppBar>
      <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
    </div>
  );
}

export default App;
