import React from "react";
import Sidebar from "react-sidebar";
import Home from "./Home/Home";
import SideBarContents from "./SideBarContents/SideBarContents";
import "./App.css";
import {NativeRouter} from "react-router-native";

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const sideBarStyles = {
      sidebar: {
        "padding-right": "05%"
      }
    };

    return (
      <NativeRouter>
        <div>
          <Sidebar
            sidebar={
              <b className="SideBarContents">
                <SideBarContents />
              </b>
            }
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            styles={sideBarStyles}
          >
            <b>
              <Home />
            </b>
          </Sidebar>
        </div>
      </NativeRouter>
    );
  }
}

export default App;