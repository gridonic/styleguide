module.exports = {
    components: [
        {
            name: 'Primary Button',
            section: 'Buttons',
            examples: [
                '<button type="button" class="button button-primary">Default Button</button>',
                '<a href="" class="button button-primary">Link Button</a>',
            ],
        },
        {
            name: 'Search Box',
            examples: [
                '<div class="search-box"> <label class="search" for="search-term"> <span class="screenreader-only">Suchbegriff</span> <div class="form-group"> <input class="input form-control" id="search-term" name="search-term" type="text" placeholder="Wo suchst du deine Kita?"> <a href="" class="button button-primary">Suchen</a> </div> </label> <div class="filter"> <div class="wrapper"> <a class="body-text -xs" href="#">ICON Erweiterte Suche</a> </div> </div> </div>',
            ],
        },
    ],
};
