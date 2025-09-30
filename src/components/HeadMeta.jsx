// src/components/HeadMeta.jsx
import { HeadProvider, Title, Meta, Link } from 'react-head';

const HeadMeta = () => (
  <HeadProvider>
    {/* Title */}
    <Title>Alicia Gutiérrez´s Portfolio / Design & Illustration</Title>

    {/* Meta Tags */}
    <Meta charSet="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta property="og:title" content="Alicia Gutiérrez´s Portfolio" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://alicia-gutierrez.com/" />
    <Meta property="og:image" content="src/assets/img/opengraph/laguna-opengraph.png" />
    <Meta property="og:description" content="This is the Alicia Gutiérrez´s personal portfolio" />
    <Meta property="og:site_name" content="Alicia Gutiérrez" />
    <Meta property="og:locale" content="en" />

    

    {/* Stylesheet */}
    <Link rel="stylesheet" href="css/style.css" />

    {/* Favicons */}
    <Link rel="icon" href="src/assets/th/favicon/laguna-favicon.ico" sizes="any" />
    <Link rel="icon" href="src/assets/th/favicon/laguna-icon.svg" type="image/svg+xml" />
    <Link rel="apple-touch-icon" href="src/assets/th/favicon/laguna-apple-touch-icon.png" />
    <Link rel="manifest" href="src/assets/th/favicon/manifest.webmanifest" />

    {/* Fonts */}
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap" rel="stylesheet" />
  </HeadProvider>
);

export default HeadMeta;