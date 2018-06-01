<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <title>Capitão Jack</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.png">

    <meta property="fb:app_id" content="448917015563679">
    <meta property="og:url" content="http://capitaojack.com.br">
    <meta property="og:title" content="{{ $ogTitle}}">
    <meta property="og:site_name" content="{{ $ogSiteName }}">
    <meta property="og:description" content="{{ $ogDescription }}">
    <meta property="og:image" content="{{ $ogImage }}">
    <meta property="og:image:type" content="{{ $ogImageType }}">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="600">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:type" content="website">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<app-root>
    <h1 style="color:white">{{ $seoH1 }}</h1>
    <h2 style="color:white">{{ $seoH2 }}</h2>
    <p style="color:white">{{ $seoP }}</p>
</app-root>
<script type="text/javascript" src="runtime.js"></script><script type="text/javascript" src="polyfills.js"></script><script type="text/javascript" src="main.js"></script></body>
</html>