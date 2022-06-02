const Background = (type) => {
    const list = [
      ["normal", "rgba(168,168,120,0.2)"],
      ["water", "rgba(104,144,240,0.2)"],
      ["fire", "rgba(240,128,48,0.2)"],
      ["grass", "rgba(120,200,80,0.2)"],
      ["electric", "rgba(255,208,21,0.2)"],
      ["ice", "rgba(152,216,216,0.2)"],
      ["fighting", "rgba(192,48,40,0.2)"],
      ["poison", "rgba(160,64,160,0.2)"],
      ["ground", "rgba(224,192,104,0.2)"],
      ["flying", "rgba(168,144,240,0.2)"],
      ["psychic", "rgba(248,88,136,0.2)"],
      ["bug", "rgba(168,184,32,0.2)"],
      ["rock", "rgba(184,160,56,0.2)"],
      ["ghost", "rgba(113,91,191,0.2)"],
      ["dark", "rgba(112,88,72,0.2)"],
      ["dragon", "rgba(112,56,248,0.2)"],
      ["steel", "rgba(192,192,204,0.2)"],
      ["fairy", "rgba(240,182,188,0.2)"]
    ];

    const typePrincipal = type[0];
  
    const result = list.filter((element) => element[0] === typePrincipal);

    return result[0][1];
  };
  
  export default Background;
  