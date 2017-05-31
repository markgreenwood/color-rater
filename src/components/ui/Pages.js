/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router';
import { MainMenu, AboutMenu } from './Menus';
import '../../../stylesheets/Menus.scss';

export const Home = () =>
  <section className="home">
    <h1>[Home Page]</h1>
    <div>
      <Link to="about">[About]</Link>
      <Link to="events">[Events]</Link>
      <Link to="products">[Products]</Link>
      <Link to="contact">[Contact Us]</Link>
    </div>
  </section>;

export const About = ({children}) =>
  <section className="about">
    <AboutMenu />
    {children}
  </section>;

export const Events = () =>
  <section className="events">
    <h1>[Events Calendar]</h1>
  </section>;

export const Products = () =>
  <section className="products">
    <h1>[Products Catalog]</h1>
  </section>;

export const Contact = () =>
  <section className="contact">
    <h1>[Contact Us]</h1>
  </section>;

export const Company = () =>
  <section className="company">
    <h2>Our Company</h2>
  </section>;

export const History = () =>
  <section className="history">
    <h2>Our History</h2>
  </section>;

export const Services = () =>
  <section className="services">
    <h2>Our Services</h2>
  </section>;

export const Location = () =>
  <section className="location">
    <h2>Our Location</h2>
  </section>;

export const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>;

export const Page = ({children}) => (
  <div className="page">
    <MainMenu/>
    {children}
  </div>
);
