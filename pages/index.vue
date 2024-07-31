<template>
    <div class="site-wrapper">
        <header class="site-header">
            <h1 class="site-title">Matt Newman</h1>
            <div class="site-subtitle">Engineer</div>
        </header>
        <main class="content-wrapper">
            <div class="content content--about">
                <ContentDoc path="/_about" />
            </div>
            <div class="content content--skills">
                <ContentDoc path="/_skills" />
            </div>
            <div class="content content--jobs">
                <Jobs />
            </div>
        </main>
        <footer class="site-footer">FOOTER</footer>
    </div>
</template>
  