import { lazy } from "react";

export const Layout = lazy(() => import('../layout/layout'));
export const Home = lazy(() => import('../pages/home/home'));
export const Products = lazy(() => import('../pages/products/products'));
export const About = lazy(() => import('../pages/about/about'));
export const Checkout = lazy(() => import('../pages/checkout/checkout'));
export const Contact = lazy(() => import('../pages/contact/contact'));
export const GetById = lazy(() => import('../pages/getById/getById'));
export const Korzina = lazy(() => import('../pages/korzina/korzina'));
export const MyAccount = lazy(() => import('../pages/myaccount/account'));
export const Signup = lazy(() => import('../pages/signup/signup'));
export const Wishlist = lazy(() => import('../pages/wishlist/wishlist'));
export const Login = lazy(() => import('../pages/logiIn/logIn'));
export const GetCategori = lazy(() => import('../pages/getbyIdCategori/getCategori'));







