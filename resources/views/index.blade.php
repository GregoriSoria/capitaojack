<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <title>{{ setting('site.title') }}</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.png">

    <meta property="fb:app_id" content="448917015563679">
    <meta property="og:url" content="http://capitaojack.com.br">
    <meta property="og:title" content="{{ setting('site.title') }}">
    <meta property="og:site_name" content="{{ $ogSiteName }}">
    <meta property="og:description" content="{{ setting('site.description') }}">
    <meta property="og:image" content="{{ App::make('url')->to('/') . '/public/storage/' . setting('site.logo') }}">
    <meta property="og:image:type" content="{{ setting('site.logo_type') }}">
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
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id={{ setting('admin.google_analytics_tracking_id') }}"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', "{{ setting('site.google_analytics_tracking_id') }}");
</script>
</html>