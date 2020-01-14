import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import {
  MdCardTravel,
  MdPermIdentity,
  MdBusiness,
  MdFavoriteBorder,
  MdContactPhone
} from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import Main from "./components/main";
import { Link, NavLink, Router } from "react-router-dom";

const SIZE = "25px";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px"
                }}
                to="/"
              >
                <i className="fa fa-briefcase" />
                {/* <MdCardTravel
                  size={SIZE}
                  style={{
                    color: "red",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                /> */}
                Mi Portafolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/curriculum">Currículum</Link>
              <Link to="/acercademi">Acerca de mi</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/contacto">Contacto</Link>
            </Navigation>
          </Header>

          <Drawer
            title={
              <>
                {/* <i className="fa fa-briefcase" /> */}
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px"
                  }}
                >
                  <i className="fa fa-briefcase" />
                  Portafolio
                </a>
              </>
            }
          >
            <Navigation>
              {/* <i className="fa fa-graduation-cap" aria-hidden="true" /> */}

              <a
                href="/curriculum"
                style={{
                  fontSize: "20px"
                }}
              >
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                Currículum
              </a>
              {/* <Link to="/curriculum">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                Currículum{" "}
              </Link> */}
              {/*  <i className="fa fa-user" aria-hidden="true" /> */}
              <a
                href="/acercademi"
                style={{
                  fontSize: "20px"
                }}
              >
                <i className="fa fa-user" aria-hidden="true" />
                Acerca de mi
              </a>
              {/*  <NavLink to="/acercademi" exact activeStyle={{ color: "red" }}>
                Acerca de miii
              </NavLink> */}
              {/* <Link to="/acercademi">
                {" "}
                <i className="fa fa-user" aria-hidden="true" />
                Acerca de mi
              </Link> */}
              {/*  <i className="fa fa-building" aria-hidden="true" /> */}
              <a
                href="/proyectos"
                style={{
                  fontSize: "20px"
                }}
              >
                <i className="fa fa-building" aria-hidden="true" />
                Proyectos
              </a>
              {/* <Link to="/proyectos">
                {" "}
                <i className="fa fa-building" aria-hidden="true" />
                Projectos
              </Link> */}
              {/*  <i className="fa fa-id-card" aria-hidden="true" /> */}
              <a
                href="/contacto"
                style={{
                  fontSize: "20px"
                }}
              >
                <i className="fa fa-id-card" aria-hidden="true" />
                Contacto
              </a>
              {/* <Link to="/contacto">
                <i className="fa fa-id-card" aria-hidden="true" />
                Contacto
              </Link> */}
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />

            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
