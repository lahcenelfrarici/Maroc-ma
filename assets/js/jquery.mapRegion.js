jQuery(function ($) {
  // Maps
  //
  var userLang = document.getElementsByTagName("html")[0].getAttribute("lang");
  const mapDataFR = [
    {
      id: "94",
      name: "Dakhla-Oued Ed-Dahab",
      color: "#000",
      path: "M316,580L316,579L316,580L294,582C288,578,283,577,275,576L264,578L259,581L248,580L235,575L231,579C228,579,221,580,217,581L213,573L208,572L208,572C208,572,207,573,206,573L203,576L198,579L191,586L191,588C188,590,180,598,177,599C171,602,168,606,166,612L167,614C169,612,172,608,173,606L176,604L177,606C176,608,173,613,172,615C170,617,167,623,165,626L163,631L158,636L160,637L161,640L158,644L155,644C154,647,153,657,150,659L148,667L146,670C143,670,139,671,137,672C136,673,134,677,133,678C132,681,131,685,130,688C129,694,127,702,126,708C126,711,124,716,124,719L126,719L130,710C130,710,166,710,168,710L169,711C196,711,252,712,279,712L278,659L281,641L298,630L310,628L314,625L318,625L317,581L316,580z",
    },
    {
      id: "98",
      name: "Laâyoune-Sakia El Hamra",
      path: "M439,485L438,483C437,482,431,482,430,480L428,476C420,471,421,471,416,463L409,465L400,459C396,457,389,454,385,452L374,453C369,453,357,452,352,451L331,443C328,438,323,430,320,425C319,425,308,429,307,430L308,431L304,433L303,432L296,432L293,435L281,435L279,437L279,441L272,447L267,462L264,465C262,470,261,477,260,482C259,484,252,489,253,491L250,491C248,493,242,497,240,500L235,499L232,502L225,507L223,510L223,516C222,519,213,537,214,540L212,546L211,555L212,557L212,561L209,565L209,571C208,570,213,572,213,572C214,571,218,578,218,579C221,578,228,577,231,577C231,577,234,574,235,574C235,574,236,574,236,574L248,579L259,579L263,576C263,576,275,575,275,574C282,575,289,576,295,580L316,578L317,519C317,519,317,518,317,517C318,517,439,514,441,514C440,508,439,492,439,485z",
    },
    {
      id: "97",
      name: "Guelmim-Oued Noun",
      path: "M352,450C362,452,375,452,385,451C389,452,396,456,400,458C401,458,409,463,409,463C420,460,417,461,422,470C423,471,430,475,430,475L431,479C432,480,438,481,439,481C438,475,437,431,437,426C436,427,430,422,429,421C429,416,427,407,426,403L422,401L422,398L420,394L423,390L421,386L423,380L421,374L418,371L414,375C414,375,411,374,410,374L407,378C405,378,402,377,401,377L396,377L396,374L391,373L388,367C381,375,373,384,366,392L359,396L349,403L345,404C339,412,332,421,322,424L332,442L352,450z",
    },
    {
      id: "102",
      name: "Souss-Massa",
      path: "M533,363L531,356L530,348L532,345L530,343L527,343L526,334L523,329C523,326,521,319,521,316L515,314C514,316,508,320,506,321L500,318L495,324L493,330C493,331,492,332,492,333L492,335L491,336C491,336,485,335,485,335L482,332C484,328,487,322,488,319L484,316L479,317L476,311C475,309,473,306,472,305L467,306L467,306C467,307,466,308,466,308C466,308,461,312,461,313C460,312,459,311,459,310L455,312L447,312L447,314L440,313C440,314,437,315,436,315C436,315,437,312,437,312L434,309L432,309L429,312L427,312L424,316L416,316C414,316,411,317,409,318L406,315C405,315,399,315,399,315L396,311C396,312,395,318,395,319L393,322C393,324,401,330,402,331L402,340L400,347L387,365L387,366C390,364,390,370,391,372C394,372,397,372,397,375C397,375,400,375,400,375C402,376,404,376,405,376C409,373,408,372,413,373C414,372,417,369,418,370L421,373C422,373,424,379,425,379C425,380,423,385,423,386C425,390,425,390,422,394C423,396,424,398,423,400C424,401,427,401,427,402C429,407,430,416,431,420L436,425L437,425L438,413C449,408,471,396,481,389C497,383,521,374,533,364C534,364,533,363,533,363z",
    },
    {
      id: "95",
      name: "Drâa-Tafilalet",
      path: "M638,266L638,263C633,262,628,261,623,262L623,262C622,261,623,259,623,258L619,256L616,256C616,255,609,242,608,241L602,241L601,241C600,238,597,235,596,233C594,232,592,231,591,230L586,231C584,228,582,224,580,221C578,221,575,221,573,221L571,226L566,229C566,231,567,232,566,233L555,248C554,249,555,256,553,257L549,259L546,263L546,267C546,267,545,273,545,273C543,275,539,277,537,278C536,278,534,281,534,281C531,283,526,285,523,285C523,285,516,290,516,290L511,290C510,292,510,296,508,296C508,296,501,296,501,296C501,296,498,294,497,294L495,294C491,299,493,300,486,299C484,300,481,303,478,304C478,304,474,304,474,304L474,305L478,310C478,309,480,315,480,315C485,313,485,314,489,317C491,319,485,329,484,331L486,334L490,334L491,334C490,333,491,331,492,329C492,329,493,323,494,323C500,317,497,314,506,319L512,315C513,315,514,312,515,312C515,312,522,315,522,315C524,315,523,319,524,320L525,328L528,333C529,333,528,341,528,341C531,341,532,341,534,343C535,345,533,347,532,348L533,355L535,362L568,343L568,347L572,347L587,339L601,328L617,324L629,309L628,306L626,307L620,303L619,297L624,293L625,291L622,289L626,282L630,280L636,281L638,278L638,278C637,278,638,274,638,274C638,274,638,273,638,272C638,271,638,267,638,266z",
    },
    {
      id: "92",
      name: "Béni Mellal-Khénifra",
      path: "M498,254C498,257,497,261,498,264C501,266,502,268,501,271C504,273,502,276,501,277M501,277C501,279,499,279,497,279C496,279,494,279,493,278L492,279L491,280C492,281,492,282,493,282C499,282,499,283,496,288C496,288,496,292,496,292L498,292L501,294L508,295L510,289L516,289L522,284C525,284,531,282,533,280L536,277C538,276,541,274,543,273L545,267L545,267L544,263C545,262,547,259,548,258L552,256C552,254,553,250,553,248C555,246,563,235,565,232C565,231,564,228,563,227L559,224L557,218L557,212C556,211,550,207,549,207C549,207,549,205,549,205C547,204,545,204,544,203C544,203,539,204,538,204L533,198L529,200L528,209C525,209,521,208,518,208C519,211,520,216,520,219C519,220,517,221,516,221C516,222,516,225,517,226C516,227,515,228,515,229C515,230,514,235,513,236C513,237,513,238,513,239C513,239,513,241,513,241L505,240L505,242L500,242C501,247,499,248,497,252C498,252,498,253,498,254",
    },
    {
      id: "99",
      name: "Marrakech-Safi",
      path: "M397,310C398,310,399,313,400,313C404,314,406,313,410,316C413,315,420,314,423,314C425,312,426,310,429,310C430,309,431,307,432,307C433,307,435,308,435,308C436,309,439,311,439,312C440,311,444,312,446,312C446,309,453,311,455,311C457,309,459,307,461,310L465,307C465,306,466,305,467,304C467,304,472,303,472,303L472,303L478,302C480,301,484,299,485,297L491,297C491,296,494,293,495,292L495,288L496,284L492,284C491,283,491,282,490,281L490,278L494,275C494,275,495,277,495,277L500,277C500,277,501,273,501,273L500,272C500,271,500,268,500,267L497,265C496,261,496,257,496,253C495,252,493,250,492,249L488,248C488,248,488,247,488,247L487,244C487,242,485,238,484,237L485,231L483,226C482,227,479,231,478,232C477,232,475,233,474,233L472,236L470,235C468,236,463,237,461,238L457,235L457,230L458,225L455,225L456,223L453,223L451,222C451,221,451,219,451,218L449,217L450,214C450,214,448,213,447,213C446,214,444,214,442,215L439,218L438,224L436,226L435,230L432,231C431,232,429,234,428,235L427,240C424,242,422,247,419,249L417,253L417,259L413,269L412,267L410,271L407,273L402,279C402,280,400,284,400,286C399,287,397,291,396,292L397,295L397,300L395,303L395,305L396,306L397,310z",
    },
    {
      id: "103",
      name: "Tanger-Tétouan-Al Hoceima",
      path: "M533,141C551,143,540,140,550,150C556,149,556,147,558,153C564,153,564,151,566,157C567,156,571,155,573,155C575,150,574,149,580,148C581,148,583,146,584,146C584,146,590,148,591,148C598,146,607,144,614,143L617,140C617,138,617,132,618,131L586,133C582,131,575,127,572,125L569,120L564,119L564,114L561,113L561,107L559,103L554,105L554,108L549,107L546,109L539,108L536,119C535,122,530,135,530,138C530,138,533,141,533,141z",
    },
    {
      id: "100",
      name: "Oriental",
      path: "M712,252L718,246L715,244C715,244,715,244,715,244L705,237C705,237,705,237,705,237L704,232C703,230,704,225,704,224L699,217C699,217,699,217,699,217C698,213,698,205,699,202C699,201,695,196,695,196L696,178L692,167C692,166,694,164,694,164C693,162,690,159,689,158C688,157,692,154,692,153C690,151,678,142,675,140C675,140,675,138,674,138L668,136C668,136,665,139,665,139C662,139,656,139,653,139C648,135,649,136,649,131C647,128,648,128,649,125L648,125C648,125,646,129,646,129C646,129,641,133,641,133C641,133,637,134,637,134L627,135C627,135,623,131,623,131C622,131,620,131,619,131C619,131,619,133,619,133L619,138C619,141,619,144,619,146C619,146,620,147,621,148C625,148,624,149,625,153C626,153,624,168,624,168C624,168,620,174,619,174L620,178C620,178,620,178,620,178L619,183C619,184,615,186,615,186L616,193C616,193,616,193,616,193L615,197C615,198,617,198,618,199L620,199L624,195L625,190C626,189,628,187,628,186C629,185,631,187,632,188C634,189,636,191,638,193C639,193,642,194,643,194C643,195,645,195,645,196C644,201,644,200,640,204L639,205C644,206,644,206,647,210L652,218C652,219,650,220,650,221C650,221,646,221,646,221L638,225C638,225,634,224,634,224C633,225,632,223,631,223C624,223,622,225,617,229C617,229,618,231,617,232L610,241C610,241,611,242,611,242L617,254C617,254,620,254,620,255L624,257C624,257,624,260,624,260C629,260,634,261,639,262C640,262,639,266,639,266C639,267,640,270,640,271C640,272,639,273,639,274L639,277C639,277,642,278,643,278L652,274L652,272C652,272,649,268,649,268L648,265C648,264,650,262,650,262C650,261,661,262,661,262C662,261,665,259,665,259L675,259C675,259,684,258,685,258C685,258,702,259,702,259L712,262L714,257L712,253C711,253,712,253,712,252z",
    },
    {
      id: "96",
      name: "Fès-Meknès",
      path: "M622,167L624,153L623,149C620,149,620,149,618,146C617,146,617,143,617,142L615,144C611,145,603,146,599,147L591,149L584,148C583,148,581,150,580,150L576,151L576,151C576,152,574,155,574,156C573,157,569,157,568,158C567,158,566,159,565,160L565,160L565,168L562,171C560,171,557,172,555,172C555,173,551,175,550,176C550,177,551,180,551,181C550,182,550,185,549,186C550,189,552,192,553,195L548,201C547,201,546,202,545,202C546,202,548,203,549,203L550,206C551,206,557,210,557,210C559,211,558,217,558,218L560,223C563,225,565,226,565,228L570,226C570,224,571,220,573,220C574,220,578,220,580,220C581,219,584,225,584,226L587,230C591,228,592,230,596,232C596,231,602,239,602,239L608,240C608,240,609,240,609,240L616,231C616,231,615,228,616,228L622,223C624,222,629,221,632,221C632,221,634,223,634,223L638,223C640,222,646,219,649,219L650,218L646,211L643,208C642,207,637,207,638,206L638,203C638,203,642,200,642,199L643,196L637,194C637,194,629,188,629,188L627,191L625,196C625,196,625,196,625,196C625,196,621,201,621,200C620,200,617,201,617,200C617,200,612,198,613,197L614,192L613,186C613,185,617,183,617,182L618,178L618,173C617,173,622,168,622,167z",
    },
    {
      id: "93",
      name: "Casablanca-Settat",
      path: "M452,213C452,214,451,216,451,216C452,218,452,220,452,221L453,222C455,222,458,221,457,224C461,224,458,228,458,230L458,234L461,236L466,235C467,234,470,232,472,234C473,232,475,231,477,231C478,229,482,223,484,226C487,231,486,231,486,236C487,238,488,242,489,244C489,245,489,246,489,247C491,247,494,249,496,251L498,246C500,241,496,240,504,240C504,237,510,239,512,239C512,239,512,236,512,236C512,235,512,234,512,234L513,228C513,228,515,226,515,225C514,220,514,220,519,218L517,208C517,206,519,206,520,206C520,206,520,206,521,206L519,203L519,201C518,199,515,196,514,194L509,191L507,187C506,187,503,186,502,186C495,190,486,196,480,202L475,202L469,206L463,206C461,207,452,211,450,212C451,213,451,213,452,213z",
    },
    {
      id: "101",
      name: "Rabat-Salé-Kénitra",
      path: "M508,186L510,190C511,191,515,193,515,193C515,194,517,196,517,196C519,198,522,201,521,203C521,204,523,206,522,207L526,207C527,206,527,199,528,199C529,199,533,197,533,197C534,196,538,202,539,202L543,202C543,201,546,200,547,200L551,194C551,194,547,187,548,186L549,181C549,180,548,175,549,174C550,174,555,171,555,171C557,171,560,170,561,170L563,167C563,165,562,159,564,158C564,158,563,155,563,154L557,155L555,151L549,152L546,149L543,144C543,144,532,143,532,143L532,143C531,142,529,140,529,139C528,140,519,162,518,163C514,167,506,180,503,185C505,185,508,185,508,186z",
    },
  ];
  const mapDataAR = [
    {
      id: "94",
      name: "الداخلة - وادي الذهب",
      color: "#000",
      path: "M316,580L316,579L316,580L294,582C288,578,283,577,275,576L264,578L259,581L248,580L235,575L231,579C228,579,221,580,217,581L213,573L208,572L208,572C208,572,207,573,206,573L203,576L198,579L191,586L191,588C188,590,180,598,177,599C171,602,168,606,166,612L167,614C169,612,172,608,173,606L176,604L177,606C176,608,173,613,172,615C170,617,167,623,165,626L163,631L158,636L160,637L161,640L158,644L155,644C154,647,153,657,150,659L148,667L146,670C143,670,139,671,137,672C136,673,134,677,133,678C132,681,131,685,130,688C129,694,127,702,126,708C126,711,124,716,124,719L126,719L130,710C130,710,166,710,168,710L169,711C196,711,252,712,279,712L278,659L281,641L298,630L310,628L314,625L318,625L317,581L316,580z",
    },
    {
      id: "98",
      name: "العيون - الساقية الحمراء",
      path: "M439,485L438,483C437,482,431,482,430,480L428,476C420,471,421,471,416,463L409,465L400,459C396,457,389,454,385,452L374,453C369,453,357,452,352,451L331,443C328,438,323,430,320,425C319,425,308,429,307,430L308,431L304,433L303,432L296,432L293,435L281,435L279,437L279,441L272,447L267,462L264,465C262,470,261,477,260,482C259,484,252,489,253,491L250,491C248,493,242,497,240,500L235,499L232,502L225,507L223,510L223,516C222,519,213,537,214,540L212,546L211,555L212,557L212,561L209,565L209,571C208,570,213,572,213,572C214,571,218,578,218,579C221,578,228,577,231,577C231,577,234,574,235,574C235,574,236,574,236,574L248,579L259,579L263,576C263,576,275,575,275,574C282,575,289,576,295,580L316,578L317,519C317,519,317,518,317,517C318,517,439,514,441,514C440,508,439,492,439,485z",
    },
    {
      id: "97",
      name: "كلميم - واد نون",
      path: "M352,450C362,452,375,452,385,451C389,452,396,456,400,458C401,458,409,463,409,463C420,460,417,461,422,470C423,471,430,475,430,475L431,479C432,480,438,481,439,481C438,475,437,431,437,426C436,427,430,422,429,421C429,416,427,407,426,403L422,401L422,398L420,394L423,390L421,386L423,380L421,374L418,371L414,375C414,375,411,374,410,374L407,378C405,378,402,377,401,377L396,377L396,374L391,373L388,367C381,375,373,384,366,392L359,396L349,403L345,404C339,412,332,421,322,424L332,442L352,450z",
    },
    {
      id: "102",
      name: "سوس - ماسة",
      path: "M533,363L531,356L530,348L532,345L530,343L527,343L526,334L523,329C523,326,521,319,521,316L515,314C514,316,508,320,506,321L500,318L495,324L493,330C493,331,492,332,492,333L492,335L491,336C491,336,485,335,485,335L482,332C484,328,487,322,488,319L484,316L479,317L476,311C475,309,473,306,472,305L467,306L467,306C467,307,466,308,466,308C466,308,461,312,461,313C460,312,459,311,459,310L455,312L447,312L447,314L440,313C440,314,437,315,436,315C436,315,437,312,437,312L434,309L432,309L429,312L427,312L424,316L416,316C414,316,411,317,409,318L406,315C405,315,399,315,399,315L396,311C396,312,395,318,395,319L393,322C393,324,401,330,402,331L402,340L400,347L387,365L387,366C390,364,390,370,391,372C394,372,397,372,397,375C397,375,400,375,400,375C402,376,404,376,405,376C409,373,408,372,413,373C414,372,417,369,418,370L421,373C422,373,424,379,425,379C425,380,423,385,423,386C425,390,425,390,422,394C423,396,424,398,423,400C424,401,427,401,427,402C429,407,430,416,431,420L436,425L437,425L438,413C449,408,471,396,481,389C497,383,521,374,533,364C534,364,533,363,533,363z",
    },
    {
      id: "95",
      name: "درعة - تافيلالت",
      path: "M638,266L638,263C633,262,628,261,623,262L623,262C622,261,623,259,623,258L619,256L616,256C616,255,609,242,608,241L602,241L601,241C600,238,597,235,596,233C594,232,592,231,591,230L586,231C584,228,582,224,580,221C578,221,575,221,573,221L571,226L566,229C566,231,567,232,566,233L555,248C554,249,555,256,553,257L549,259L546,263L546,267C546,267,545,273,545,273C543,275,539,277,537,278C536,278,534,281,534,281C531,283,526,285,523,285C523,285,516,290,516,290L511,290C510,292,510,296,508,296C508,296,501,296,501,296C501,296,498,294,497,294L495,294C491,299,493,300,486,299C484,300,481,303,478,304C478,304,474,304,474,304L474,305L478,310C478,309,480,315,480,315C485,313,485,314,489,317C491,319,485,329,484,331L486,334L490,334L491,334C490,333,491,331,492,329C492,329,493,323,494,323C500,317,497,314,506,319L512,315C513,315,514,312,515,312C515,312,522,315,522,315C524,315,523,319,524,320L525,328L528,333C529,333,528,341,528,341C531,341,532,341,534,343C535,345,533,347,532,348L533,355L535,362L568,343L568,347L572,347L587,339L601,328L617,324L629,309L628,306L626,307L620,303L619,297L624,293L625,291L622,289L626,282L630,280L636,281L638,278L638,278C637,278,638,274,638,274C638,274,638,273,638,272C638,271,638,267,638,266z",
    },
    {
      id: "92",
      name: "بني ملال - خنيفرة",
      path: "M498,254C498,257,497,261,498,264C501,266,502,268,501,271C504,273,502,276,501,277M501,277C501,279,499,279,497,279C496,279,494,279,493,278L492,279L491,280C492,281,492,282,493,282C499,282,499,283,496,288C496,288,496,292,496,292L498,292L501,294L508,295L510,289L516,289L522,284C525,284,531,282,533,280L536,277C538,276,541,274,543,273L545,267L545,267L544,263C545,262,547,259,548,258L552,256C552,254,553,250,553,248C555,246,563,235,565,232C565,231,564,228,563,227L559,224L557,218L557,212C556,211,550,207,549,207C549,207,549,205,549,205C547,204,545,204,544,203C544,203,539,204,538,204L533,198L529,200L528,209C525,209,521,208,518,208C519,211,520,216,520,219C519,220,517,221,516,221C516,222,516,225,517,226C516,227,515,228,515,229C515,230,514,235,513,236C513,237,513,238,513,239C513,239,513,241,513,241L505,240L505,242L500,242C501,247,499,248,497,252C498,252,498,253,498,254",
    },
    {
      id: "99",
      name: "مراكش-أسفي",
      path: "M397,310C398,310,399,313,400,313C404,314,406,313,410,316C413,315,420,314,423,314C425,312,426,310,429,310C430,309,431,307,432,307C433,307,435,308,435,308C436,309,439,311,439,312C440,311,444,312,446,312C446,309,453,311,455,311C457,309,459,307,461,310L465,307C465,306,466,305,467,304C467,304,472,303,472,303L472,303L478,302C480,301,484,299,485,297L491,297C491,296,494,293,495,292L495,288L496,284L492,284C491,283,491,282,490,281L490,278L494,275C494,275,495,277,495,277L500,277C500,277,501,273,501,273L500,272C500,271,500,268,500,267L497,265C496,261,496,257,496,253C495,252,493,250,492,249L488,248C488,248,488,247,488,247L487,244C487,242,485,238,484,237L485,231L483,226C482,227,479,231,478,232C477,232,475,233,474,233L472,236L470,235C468,236,463,237,461,238L457,235L457,230L458,225L455,225L456,223L453,223L451,222C451,221,451,219,451,218L449,217L450,214C450,214,448,213,447,213C446,214,444,214,442,215L439,218L438,224L436,226L435,230L432,231C431,232,429,234,428,235L427,240C424,242,422,247,419,249L417,253L417,259L413,269L412,267L410,271L407,273L402,279C402,280,400,284,400,286C399,287,397,291,396,292L397,295L397,300L395,303L395,305L396,306L397,310z",
    },
    {
      id: "103",
      name: "طنجة - تطوان - الحسيمة",
      path: "M533,141C551,143,540,140,550,150C556,149,556,147,558,153C564,153,564,151,566,157C567,156,571,155,573,155C575,150,574,149,580,148C581,148,583,146,584,146C584,146,590,148,591,148C598,146,607,144,614,143L617,140C617,138,617,132,618,131L586,133C582,131,575,127,572,125L569,120L564,119L564,114L561,113L561,107L559,103L554,105L554,108L549,107L546,109L539,108L536,119C535,122,530,135,530,138C530,138,533,141,533,141z",
    },
    {
      id: "100",
      name: "الشرق",
      path: "M712,252L718,246L715,244C715,244,715,244,715,244L705,237C705,237,705,237,705,237L704,232C703,230,704,225,704,224L699,217C699,217,699,217,699,217C698,213,698,205,699,202C699,201,695,196,695,196L696,178L692,167C692,166,694,164,694,164C693,162,690,159,689,158C688,157,692,154,692,153C690,151,678,142,675,140C675,140,675,138,674,138L668,136C668,136,665,139,665,139C662,139,656,139,653,139C648,135,649,136,649,131C647,128,648,128,649,125L648,125C648,125,646,129,646,129C646,129,641,133,641,133C641,133,637,134,637,134L627,135C627,135,623,131,623,131C622,131,620,131,619,131C619,131,619,133,619,133L619,138C619,141,619,144,619,146C619,146,620,147,621,148C625,148,624,149,625,153C626,153,624,168,624,168C624,168,620,174,619,174L620,178C620,178,620,178,620,178L619,183C619,184,615,186,615,186L616,193C616,193,616,193,616,193L615,197C615,198,617,198,618,199L620,199L624,195L625,190C626,189,628,187,628,186C629,185,631,187,632,188C634,189,636,191,638,193C639,193,642,194,643,194C643,195,645,195,645,196C644,201,644,200,640,204L639,205C644,206,644,206,647,210L652,218C652,219,650,220,650,221C650,221,646,221,646,221L638,225C638,225,634,224,634,224C633,225,632,223,631,223C624,223,622,225,617,229C617,229,618,231,617,232L610,241C610,241,611,242,611,242L617,254C617,254,620,254,620,255L624,257C624,257,624,260,624,260C629,260,634,261,639,262C640,262,639,266,639,266C639,267,640,270,640,271C640,272,639,273,639,274L639,277C639,277,642,278,643,278L652,274L652,272C652,272,649,268,649,268L648,265C648,264,650,262,650,262C650,261,661,262,661,262C662,261,665,259,665,259L675,259C675,259,684,258,685,258C685,258,702,259,702,259L712,262L714,257L712,253C711,253,712,253,712,252z",
    },
    {
      id: "96",
      name: "فاس - مكناس",
      path: "M622,167L624,153L623,149C620,149,620,149,618,146C617,146,617,143,617,142L615,144C611,145,603,146,599,147L591,149L584,148C583,148,581,150,580,150L576,151L576,151C576,152,574,155,574,156C573,157,569,157,568,158C567,158,566,159,565,160L565,160L565,168L562,171C560,171,557,172,555,172C555,173,551,175,550,176C550,177,551,180,551,181C550,182,550,185,549,186C550,189,552,192,553,195L548,201C547,201,546,202,545,202C546,202,548,203,549,203L550,206C551,206,557,210,557,210C559,211,558,217,558,218L560,223C563,225,565,226,565,228L570,226C570,224,571,220,573,220C574,220,578,220,580,220C581,219,584,225,584,226L587,230C591,228,592,230,596,232C596,231,602,239,602,239L608,240C608,240,609,240,609,240L616,231C616,231,615,228,616,228L622,223C624,222,629,221,632,221C632,221,634,223,634,223L638,223C640,222,646,219,649,219L650,218L646,211L643,208C642,207,637,207,638,206L638,203C638,203,642,200,642,199L643,196L637,194C637,194,629,188,629,188L627,191L625,196C625,196,625,196,625,196C625,196,621,201,621,200C620,200,617,201,617,200C617,200,612,198,613,197L614,192L613,186C613,185,617,183,617,182L618,178L618,173C617,173,622,168,622,167z",
    },
    {
      id: "93",
      name: "الدار البيضاء - سطات",
      path: "M452,213C452,214,451,216,451,216C452,218,452,220,452,221L453,222C455,222,458,221,457,224C461,224,458,228,458,230L458,234L461,236L466,235C467,234,470,232,472,234C473,232,475,231,477,231C478,229,482,223,484,226C487,231,486,231,486,236C487,238,488,242,489,244C489,245,489,246,489,247C491,247,494,249,496,251L498,246C500,241,496,240,504,240C504,237,510,239,512,239C512,239,512,236,512,236C512,235,512,234,512,234L513,228C513,228,515,226,515,225C514,220,514,220,519,218L517,208C517,206,519,206,520,206C520,206,520,206,521,206L519,203L519,201C518,199,515,196,514,194L509,191L507,187C506,187,503,186,502,186C495,190,486,196,480,202L475,202L469,206L463,206C461,207,452,211,450,212C451,213,451,213,452,213z",
    },
    {
      id: "101",
      name: "الرباط - سلا - القنيطرة",
      path: "M508,186L510,190C511,191,515,193,515,193C515,194,517,196,517,196C519,198,522,201,521,203C521,204,523,206,522,207L526,207C527,206,527,199,528,199C529,199,533,197,533,197C534,196,538,202,539,202L543,202C543,201,546,200,547,200L551,194C551,194,547,187,548,186L549,181C549,180,548,175,549,174C550,174,555,171,555,171C557,171,560,170,561,170L563,167C563,165,562,159,564,158C564,158,563,155,563,154L557,155L555,151L549,152L546,149L543,144C543,144,532,143,532,143L532,143C531,142,529,140,529,139C528,140,519,162,518,163C514,167,506,180,503,185C505,185,508,185,508,186z",
    },
  ];
  const carte = [
    {
      type: "map",
      joinBy: "id",
      dataLabels: {
        enabled: false,
        backgroundColor: "rgba(0,0,0,0.8)",
        borderRadius: 15,
        padding: 8,
        color: "#ff000000",
        format: "{point.name}",
      },
      mapData: userLang == "ar" ? mapDataAR : mapDataFR,
      data: [
        {
          id: "94",
          y: 1,
        },
        {
          id: "98",
          y: 2,
        },
        {
          id: "97",
          y: 3,
        },
        {
          id: "102",
          y: 4,
        },
        {
          id: "95",
          y: 5,
        },
        {
          id: "92",
          y: 6,
        },
        {
          id: "99",
          y: 7,
        },
        {
          id: "103",
          y: 8,
        },
        {
          id: "100",
          y: 9,
        },
        {
          id: "96",
          y: 10,
        },
        {
          id: "93",
          y: 11,
        },
        {
          id: "101",
          y: 12,
        },
      ],
    },
  ];
  let chart = Highcharts.mapChart("carteContainer", {
    tooltip: {
      useHTML: true,
      borderWidth: 0,
      style: {
        padding: 0
      },
      format: "{point.name}",
    },
    chart: {
      height: 504,
      backgroundColor: "#ff000000"
    },
    navigator: {
      enabled: false,
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    series: carte,
    plotOptions: {
      series: {
        allowPointSelect: true,
        color: "#BB0A21",
        name: "Maroc",
        showInLegend: false,
        states: {
          hover: {
            color: "#0C9B2E",
            borderColor: "#0C9B2E",
          },
          select: {
            color: "#0C9B2E",
            borderColor: "#0C9B2E",
          },
        },
        point: {
          events: {
            select: function () {
              this.clicked = true;
            },
            click: function () {
              // Hide all carte items
              $(".carte-item").hide();
              // Show the selected item by id
              $("#" + this.id).fadeIn(300);
  
              // Remove active class from all carte items
              $(".carte-item").removeClass("carte-item-active");
              // Add active class to the clicked item
              $("#" + this.id).addClass("carte-item-active");
  
              // Get the 'data-img' attribute of the clicked item and update background image
              let backgroundImage = $("#" + this.id).data("img");
              $(".maps").css("background-image", "url(" + backgroundImage + ")");
            },
          },
        },
      },
    },
  });
  
  // Trigger the click event programmatically for the first item
  chart.series[0].data[0].firePointEvent("click", {
    ctrlKey: true,
  });
  
  // Loop through data points to fire click event for a specific point (example: id = 101)
  chart.series[0].data.forEach(function (point) {
    if (point.id === "101") {
      point.firePointEvent("click"); // Trigger the click event programmatically
    }
  });
  
  
});
