module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Urbanist"],
      },
      fontWeight: {
        300: "300",
        500: "500",
        700: "700",
      },
      colors: {
        primary: "#5142FC",
        done: "#47A432",
        warning: "#FFBD0C",
        critical: "#DF4949",

        "gd-1": "#E250E5",
        "gd-2": "#4B50E6",

        tid: "#FAFAFC",
        "tid-2": "#C7C9D9",
        "tid-3": "#555770",
        bid: "#1C1C28",
        "bid-2": "#343444",

        til: "#1F1F2C",
        "til-2": "#7A798A",
        "til-3": "#8A8AA0",
        bil: "#FFFFFF",
        "bil-2": "#F8F8F8",
      },
      fontSize: {
        sub: "14px",
        1: "20px",
        2: "24px",
        3: "30px",
        4: "36px",
        5: "40px",
        6: "56px",
        7: "76px",
      },
      minWidth: {
        75: "2000px",
      },
      boxShadow: {
        mdl: "6px 6px 16px 0 #230158, -4px -4px 12px 0 #2EF7FF",
      },
    },
  },
  plugins: [],
};
