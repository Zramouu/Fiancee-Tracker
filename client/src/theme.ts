export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#f0f0f3",
      600: "#8A507C",
      700: "#6b6d74",
      800: "#48494e",
      900: "#f0f0f3",
    },
    primary: {
    100: "black", 
    200: "#01A6F0",  // blue
    300: "#9E9E9E",  //gris 
    // 400: "#46BFBD",  // orange red 
    400:"#FF7100",
    500: "#96DD28",  // pistachio green 
    600: "#e38deb",  // violet
    700: "#01A6F0",  //blue 
    // 800: "#FFCE56",  // yellow    
    800:"#ffd280",
    900: "#46BFBD",  // bleu turquoise
    },
    secondary: {
      // yellow
      100: "#46BFBD",  //bleu turquoise 
      200: "#46BFBD",  //bleu turquoise                  
      300: "#46BFBD",  //bleu turquoise 
      400: "#8A507C",  //mauve kind of 
      500: "#FF7100",  //rose rouge                   
      600: "#00000",   //noir
      700: "#8A507C",  //mauve kind of 
      800: "#F7464A", //orange red                      
      // 900: "#F7464A",  //rose rouge
      900:"#FF7100",
    },
    tertiary: {
      // purple
      100:"#83b66c",  //vert money
      // 200:"#FFCE56",  //yellow 
      200:"#ffd280",
      300: "#FF6384",  //rose
      400: "#36A2EB",  //bleu
      500: "#83b66c",  //bleu turquoise               
    },
    background: {
      light: "#FBFBFB", 
      main: "#FBFBFB",   
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.secondary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[800],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },

      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.primary[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.primary[200],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.primary[100],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.primary[300],
      },
    },
  };





//A8DC00 vert         //008EF1 bleu

//#0C9FA5 turquois vert 