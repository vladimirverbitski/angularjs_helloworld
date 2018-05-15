export const AppComponent = {
    template: `
        <header>
            <nav>
                <div class="title">Hello world</div> | <div><a href="/blog">Blog</a></div>
            </nav>
        </header>
        
        <ui-view></ui-view>
        
        <footer>Copyright MyApp 2018.</footer>
    `
};