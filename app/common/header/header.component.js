export const HeaderComponent = {
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Dashboard</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/">Info <span class="sr-only">(current)</span></a></li>
                <li><a href="/boards">Boards</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
      </div>
    </nav>
  `
};