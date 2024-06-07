'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      // Crear usuario
      await queryInterface.bulkInsert('users', [
        {
          user_name: 'admin',
          name: 'Administrador',
          pass: 'admin', // Asegúrate de usar una contraseña segura y hashéala
        },
        {
            user_name: 'eric',
            name: 'Eric Espinoza',
            pass: '1234', // Asegúrate de usar una contraseña segura y hashéala
        }
      ], {});

      // Crear vendedores
      // await queryInterface.bulkInsert('sellers', [
  
      // ], {});

      // Crear categorías
      await queryInterface.bulkInsert('categories', [
        {name:'SIN CATEGORÍA', description:'SIN CATEGORÍA'},
        {name:'ABARROTES', description:'ABARROTES'},
        {name:'ASEO', description:'ASEO'},
        {name:'BEBIDAS', description:'BEBIDAS'},
        {name:'CERVEZAS', description:'CERVEZAS'},
        {name:'VINOS', description:'VINOS'},
        {name:'LICORES', description:'LICORES'},
        {name:'MASCOTAS', description:'MASCOTAS'},
       
      ])


      // Crear subcategorias
      await queryInterface.bulkInsert('subcategories', 
      [
        {
            "name": "SIN FAMILIA",
            "category_id": 1001
        },
        {
            "name": "AZUCAR",
            "category_id": 1002
        },
        {
            "name": "PAN DE PASCUA",
            "category_id": 1002
        },
        {
            "name": "HUEVOS",
            "category_id": 1002
        },
        {
            "name": "ARROZ",
            "category_id": 1002
        },
        {
            "name": "LEGUMBRES Y CEREALES",
            "category_id": 1002
        },
        {
            "name": "HARINA MOLINO FUENTES",
            "category_id": 1002
        },
        {
            "name": "ACEITE",
            "category_id": 1002
        },
        {
            "name": "BONANZA",
            "category_id": 1002
        },
        {
            "name": "LEVADURA",
            "category_id": 1002
        },
        {
            "name": "SAL",
            "category_id": 1002
        },
        {
            "name": "HIMALAYA SAL",
            "category_id": 1002
        },
        {
            "name": "QUESO",
            "category_id": 1002
        },
        {
            "name": "PESCADO EN CONSERVA",
            "category_id": 1002
        },
        {
            "name": "MARISCO EN CONSERVA",
            "category_id": 1002
        },
        {
            "name": "FRUTAS EN CONSERVAS",
            "category_id": 1002
        },
        {
            "name": "MONTE CASTELO",
            "category_id": 1002
        },
        {
            "name": "YERBA",
            "category_id": 1002
        },
        {
            "name": "LEVER MAICENA",
            "category_id": 1002
        },
        {
            "name": "LEVER MAYONESA",
            "category_id": 1002
        },
        {
            "name": "LEVER SALSA",
            "category_id": 1002
        },
        {
            "name": "LEVER TE",
            "category_id": 1002
        },
        {
            "name": "LEVER DETERGENTE",
            "category_id": 1003
        },
        {
            "name": "LEVER ASEO",
            "category_id": 1003
        },
        {
            "name": "LEVER JABON",
            "category_id": 1003
        },
        {
            "name": "LEVER DESODORANTE",
            "category_id": 1002
        },
        {
            "name": "CLORO",
            "category_id": 1003
        },
        {
            "name": "CLORO ARCADLA",
            "category_id": 1003
        },
        {
            "name": "AMPOLLETAS",
            "category_id": 1002
        },
        {
            "name": "ENCENDEDORES",
            "category_id": 1002
        },
        {
            "name": "PAPELILLOS JIMMY INDIA",
            "category_id": 1002
        },
        {
            "name": "HIGIENICO PILUCHO",
            "category_id": 1002
        },
        {
            "name": "PAPELERIA",
            "category_id": 1002
        },
        {
            "name": "ENCENDEDORES JIMMY INDIA",
            "category_id": 1002
        },
        {
            "name": "DESODORANTE AMBIENTAL",
            "category_id": 1002
        },
        {
            "name": "INSECTICIDAS",
            "category_id": 1002
        },
        {
            "name": "VELAS",
            "category_id": 1002
        },
        {
            "name": "CERAS",
            "category_id": 1002
        },
        {
            "name": "BETUNES",
            "category_id": 1002
        },
        {
            "name": "CARBON",
            "category_id": 1002
        },
        {
            "name": "PAÑAL",
            "category_id": 1002
        },
        {
            "name": "DENTRIFICOS",
            "category_id": 1002
        },
        {
            "name": "PANASONIC",
            "category_id": 1002
        },
        {
            "name": "SHICK - EVEREADY",
            "category_id": 1002
        },
        {
            "name": "DURACEL",
            "category_id": 1002
        },
        {
            "name": "RAYOVAC",
            "category_id": 1002
        },
        {
            "name": "ECUSA LATAS",
            "category_id": 1004
        },
        {
            "name": "ECUSA MINI",
            "category_id": 1004
        },
        {
            "name": "ECUSA DESECHABLE",
            "category_id": 1004
        },
        {
            "name": "ECUSA NECTAR 1.5",
            "category_id": 1004
        },
        {
            "name": "ECUSA NECTAR CHICOS",
            "category_id": 1004
        },
        {
            "name": "ECUSA MINERALES",
            "category_id": 1004
        },
        {
            "name": "ECUSA GATORADE",
            "category_id": 1004
        },
        {
            "name": "ECUSA RED BULL",
            "category_id": 1004
        },
        {
            "name": "BEB.CCU DESECH 1500CC",
            "category_id": 1004
        },
        {
            "name": "BEB. RET. 12 X 1 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. RET. 12 X 1 1/2",
            "category_id": 1004
        },
        {
            "name": "BEB. RET. 8 X 2 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. RET. 6X2.5",
            "category_id": 1004
        },
        {
            "name": "BEB. RET. 6X3 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. DESECH 6X1 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. DESECH 6X1.5 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. DESECH 6X3 LT",
            "category_id": 1004
        },
        {
            "name": "BEB. LATA",
            "category_id": 1004
        },
        {
            "name": "BEB. LATA MINI",
            "category_id": 1004
        },
        {
            "name": "COCA  KAPO",
            "category_id": 1004
        },
        {
            "name": "MONSTER",
            "category_id": 1004
        },
        {
            "name": "BEB. MINERAL",
            "category_id": 1004
        },
        {
            "name": "NECTAR ANDINA TETRA 200CC",
            "category_id": 1004
        },
        {
            "name": "NECTAR ANDINA X1500CC",
            "category_id": 1004
        },
        {
            "name": "SCORE",
            "category_id": 1004
        },
        {
            "name": "AQUARIUS",
            "category_id": 1004
        },
        {
            "name": "PIRI 3LT",
            "category_id": 1004
        },
        {
            "name": "PIRI 2 LT",
            "category_id": 1004
        },
        {
            "name": "BEACH 2.25 LTS",
            "category_id": 1004
        },
        {
            "name": "AGUA PUYEHUE",
            "category_id": 1004
        },
        {
            "name": "CCU LATAS",
            "category_id": 1005
        },
        {
            "name": "CCU CRISTAL",
            "category_id": 1005
        },
        {
            "name": "CCU PREMIUN",
            "category_id": 1005
        },
        {
            "name": "CCU CERVEZAS VARIOS",
            "category_id": 1005
        },
        {
            "name": "CERVECERIA CHILE",
            "category_id": 1005
        },
        {
            "name": "SAN PEDRO GATO",
            "category_id": 1006
        },
        {
            "name": "SAN PEDRO SANTA HELENA",
            "category_id": 1006
        },
        {
            "name": "SAN PEDRO SAN PEDRO",
            "category_id": 1006
        },
        {
            "name": "SAN PEDRO PREMIUN",
            "category_id": 1006
        },
        {
            "name": "SAN PEDRO MANQUEHUE",
            "category_id": 1006
        },
        {
            "name": "PEUMO TOCORNAL",
            "category_id": 1006
        },
        {
            "name": "PEUMO CLOS DE PIRQUE",
            "category_id": 1006
        },
        {
            "name": "LICORES PEUMO",
            "category_id": 1007
        },
        {
            "name": "PEUMO FRESSCO",
            "category_id": 1006
        },
        {
            "name": "PEUMO PREMIUN",
            "category_id": 1006
        },
        {
            "name": "SANTA RITA 120",
            "category_id": 1006
        },
        {
            "name": "SANTA RITA BODEGA",
            "category_id": 1006
        },
        {
            "name": "SANTA RITA PREMIUN",
            "category_id": 1006
        },
        {
            "name": "STA RITA PREMIUN VARIETAL",
            "category_id": 1006
        },
        {
            "name": "COVICA",
            "category_id": 1006
        },
        {
            "name": "VIÑA UNDURRAGA",
            "category_id": 1006
        },
        {
            "name": "ENCOMENDEROS",
            "category_id": 1006
        },
        {
            "name": "SANTA CAROLINA",
            "category_id": 1006
        },
        {
            "name": "VINOS VARIOS",
            "category_id": 1006
        },
        {
            "name": "VIÑA FRANCISCO DE AGUIRRE",
            "category_id": 1006
        },
        {
            "name": "VIÑA MIGUEL TORRES",
            "category_id": 1006
        },
        {
            "name": "MIGUEL TORRES LICORES",
            "category_id": 1006
        },
        {
            "name": "VIÑA CASA SILVA",
            "category_id": 1006
        },
        {
            "name": "VIÑA SANTA EMA",
            "category_id": 1006
        },
        {
            "name": "VINOS LA VINOTECA",
            "category_id": 1006
        },
        {
            "name": "CLUB DE PIEDRA SPA",
            "category_id": 1006
        },
        {
            "name": "CONTROL PISCOS",
            "category_id": 1007
        },
        {
            "name": "CONTROL LICORES",
            "category_id": 1007
        },
        {
            "name": "CONTROL RUTA",
            "category_id": 1007
        },
        {
            "name": "CONTROL BAUZA",
            "category_id": 1007
        },
        {
            "name": "CONTROL RON",
            "category_id": 1007
        },
        {
            "name": "CAPEL",
            "category_id": 1007
        },
        {
            "name": "CAPEL ARTESANOS",
            "category_id": 1007
        },
        {
            "name": "CAPEL PREMIUN",
            "category_id": 1007
        },
        {
            "name": "CAPEL LICORES",
            "category_id": 1007
        },
        {
            "name": "CAPEL CERVEZAS",
            "category_id": 1007
        },
        {
            "name": "CERV VOLCANES",
            "category_id": 1007
        },
        {
            "name": "MITJANS VARIOS",
            "category_id": 1007
        },
        {
            "name": "MITJANS LICORES",
            "category_id": 1007
        },
        {
            "name": "MITJANS RON",
            "category_id": 1007
        },
        {
            "name": "MITJANS ESPUMANTES",
            "category_id": 1007
        },
        {
            "name": "DIAGEO",
            "category_id": 1007
        },
        {
            "name": "DESA VINOS",
            "category_id": 1007
        },
        {
            "name": "DESA ERRAZURIZ",
            "category_id": 1007
        },
        {
            "name": "BACARDI VODKA",
            "category_id": 1007
        },
        {
            "name": "BACARDI RON",
            "category_id": 1007
        },
        {
            "name": "BACARDI VINOS",
            "category_id": 1007
        },
        {
            "name": "BACARDI DUVAL",
            "category_id": 1007
        },
        {
            "name": "BACARDI WHISKY",
            "category_id": 1007
        },
        {
            "name": "BARCELO",
            "category_id": 1007
        },
        {
            "name": "BACARDI PREMIUM",
            "category_id": 1007
        },
        {
            "name": "BACARDI COCTEL",
            "category_id": 1007
        },
        {
            "name": "SANTA RITA LICORES",
            "category_id": 1007
        },
        {
            "name": "LICORES VARIOS",
            "category_id": 1007
        },
        {
            "name": "TRANCURASPA",
            "category_id": 1007
        },
        {
            "name": "COM. ESCOCIA",
            "category_id": 1007
        },
        {
            "name": "ENERGETICA ",
            "category_id": 1004
        },
        {
            "name": "PREMIUN BRANDS",
            "category_id": 1007
        },
        {
            "name": "ENERGETICA  MR. BIG",
            "category_id": 1004
        },
        {
            "name": "ESPUMANTE CELEBRITE",
            "category_id": 1007
        },
        {
            "name": "PISQUERA PORTUGAL",
            "category_id": 1007
        },
        {
            "name": "PISCO",
            "category_id": 1007
        },
        {
            "name": "UNIVERSO",
            "category_id": 1007
        },
        {
            "name": "EL CHBAUM LICORES",
            "category_id": 1007
        },
        {
            "name": "EL CHBAUM CERVEZAS",
            "category_id": 1005
        },
        {
            "name": "EL CHBAUM BEBIDAS",
            "category_id": 1004
        },
        {
            "name": "ESCOCIA MINIATURA",
            "category_id": 1007
        },
        {
            "name": "OPERA PRIMA",
            "category_id": 1007
        },
        {
            "name": "VIÑA DE AGUIRRE LICORES",
            "category_id": 1007
        },
        {
            "name": "VIÑA DE AGUIRRE VINOS",
            "category_id": 1006
        },
        {
            "name": "VIÑA DE AGUIRRE BEBIDAS",
            "category_id": 1004
        },
        {
            "name": "VIÑA DE AGUIRRE CERVEZAS",
            "category_id": 1005
        },
        {
            "name": "ZAPATA",
            "category_id": 1007
        },
        {
            "name": "DAILY TRADICIONAL",
            "category_id": 1002
        },
        {
            "name": "DAILY STEVIA LIQUIDA",
            "category_id": 1002
        },
        {
            "name": "DAILY  STEVIA TABLETAS",
            "category_id": 1002
        },
        {
            "name": "DAILY SUCRALOSA LIQUIDA",
            "category_id": 1002
        },
        {
            "name": "DAILY SUCRALOSA TABLETAS",
            "category_id": 1002
        },
        {
            "name": "DAILY POSTRES",
            "category_id": 1002
        },
        {
            "name": "DAILY JUGO EN POLVO",
            "category_id": 1002
        },
        {
            "name": "DAILY AGUAS SABORIZADAS",
            "category_id": 1002
        },
        {
            "name": "MARUCHAN",
            "category_id": 1002
        },
        {
            "name": "LACTEOS VAQUITA",
            "category_id": 1002
        },
        {
            "name": "SALSA  TOM. EL VERGEL",
            "category_id": 1002
        },
        {
            "name": "EL VERGEL FRUTALISTA",
            "category_id": 1002
        },
        {
            "name": "JALEAS EL VERGEL",
            "category_id": 1002
        },
        {
            "name": "EL VERGEL COMPOTAS",
            "category_id": 1002
        },
        {
            "name": "SURLAT YOGURT",
            "category_id": 1002
        },
        {
            "name": "SURLAT QUESOS",
            "category_id": 1002
        },
        {
            "name": "SURLAT LECHES 1 LT",
            "category_id": 1002
        },
        {
            "name": "SURLAT MINIBRIK",
            "category_id": 1002
        },
        {
            "name": "SURLAT MANTEQUILLAS",
            "category_id": 1002
        },
        {
            "name": "COLUN LECHES 1LT",
            "category_id": 1002
        },
        {
            "name": "COLUN LECHES 200 CC",
            "category_id": 1002
        },
        {
            "name": "COLUN NECTAR 200 CC",
            "category_id": 1002
        },
        {
            "name": "COLUN NECTAR 1 LT",
            "category_id": 1002
        },
        {
            "name": "COLUN YOGURT",
            "category_id": 1002
        },
        {
            "name": "LA VAQUITA",
            "category_id": 1002
        },
        {
            "name": "COLUN MANJAR",
            "category_id": 1002
        },
        {
            "name": "COLUN QUESOS",
            "category_id": 1002
        },
        {
            "name": "VELARDE HNOS",
            "category_id": 1002
        },
        {
            "name": "CAROZZI PASTINAS",
            "category_id": 1002
        },
        {
            "name": "CAROZZI PASTAS",
            "category_id": 1002
        },
        {
            "name": "CAROZZI SALSAS - ARROZ- SEMOLA",
            "category_id": 1002
        },
        {
            "name": "CAROZZI POSTRES",
            "category_id": 1002
        },
        {
            "name": "CAROZZI REF. CARICIA",
            "category_id": 1002
        },
        {
            "name": "CAROZZI JUGOS SPRIM POLVO",
            "category_id": 1002
        },
        {
            "name": "CAROZZI NECTAR VIVO",
            "category_id": 1002
        },
        {
            "name": "CAROZZI JUGOS VIVO",
            "category_id": 1002
        },
        {
            "name": "PASTAS VIVO",
            "category_id": 1002
        },
        {
            "name": "CAROZZI JUGOS SPRIM LIQUIDO",
            "category_id": 1002
        },
        {
            "name": "CAROZZI ACONCAGUA",
            "category_id": 1002
        },
        {
            "name": "CAROZZI PARMA",
            "category_id": 1002
        },
        {
            "name": "LUCCHETTI PASTINAS",
            "category_id": 1002
        },
        {
            "name": "LUCCHETTI PASTAS",
            "category_id": 1002
        },
        {
            "name": "SOPAS NATUREZZA",
            "category_id": 1002
        },
        {
            "name": "LUCCHETTI ROMANO",
            "category_id": 1002
        },
        {
            "name": "LUCCHETTI VARIOS",
            "category_id": 1002
        },
        {
            "name": "CORPORA CAFE Y SUCEDANEOS",
            "category_id": 1002
        },
        {
            "name": "CORPORA ZUKO",
            "category_id": 1002
        },
        {
            "name": "CHACAO ABARROTES",
            "category_id": 1002
        },
        {
            "name": "CORPORA YUPI",
            "category_id": 1002
        },
        {
            "name": "CORPORA LIVEAN",
            "category_id": 1002
        },
        {
            "name": "CORPORA YUZ",
            "category_id": 1002
        },
        {
            "name": "CORPORA VARIOS",
            "category_id": 1002
        },
        {
            "name": "TURBO PLUS",
            "category_id": 1002
        },
        {
            "name": "TURBO ZERO",
            "category_id": 1002
        },
        {
            "name": "TURBO GELATINA",
            "category_id": 1002
        },
        {
            "name": "SABORIZANTE TURBO",
            "category_id": 1002
        },
        {
            "name": "NOVA ACEITE",
            "category_id": 1002
        },
        {
            "name": "TUCAPEL",
            "category_id": 1002
        },
        {
            "name": "NESTLE CAFE",
            "category_id": 1002
        },
        {
            "name": "NESTLE CREMAS Y CONDENSADA",
            "category_id": 1002
        },
        {
            "name": "NESTLE LECHES",
            "category_id": 1002
        },
        {
            "name": "NESTLE CEREALES",
            "category_id": 1002
        },
        {
            "name": "NESTLE POLVOS DE HORNEAR",
            "category_id": 1002
        },
        {
            "name": "NESTLE SOPAS Y CALDOS",
            "category_id": 1002
        },
        {
            "name": "TRAVERSO CONCENTRADOS",
            "category_id": 1002
        },
        {
            "name": "TRAVERSO LIMON",
            "category_id": 1002
        },
        {
            "name": "TRAVERSO VINAGRE",
            "category_id": 1002
        },
        {
            "name": "TRAVERSO SALSA",
            "category_id": 1002
        },
        {
            "name": "ICB",
            "category_id": 1002
        },
        {
            "name": "AJI EN SALSA",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS LOS ANGELES",
            "category_id": 1002
        },
        {
            "name": "DEMARIA FRUTAS",
            "category_id": 1002
        },
        {
            "name": "DEMARIA VERDURAS",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA BETUN",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA CERA LIQUIDA",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA CERAS",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA CHANCACA",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA ASEO",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA DESINFECTANTES",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA DES.AMBIENTAL",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA DES. BAÑO",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA LAVALOZA",
            "category_id": 1002
        },
        {
            "name": "VIRGINIA VARIOS CONTRA PEDIDO",
            "category_id": 1002
        },
        {
            "name": "QUIMICA AMERICANA CERAS",
            "category_id": 1002
        },
        {
            "name": "FACUPLAS",
            "category_id": 1002
        },
        {
            "name": "IPP SPA",
            "category_id": 1003
        },
        {
            "name": "CHACAO ASEO",
            "category_id": 1003
        },
        {
            "name": "FOSFOROS COPIHUE",
            "category_id": 1002
        },
        {
            "name": "VIRUTEX BOLSAS",
            "category_id": 1003
        },
        {
            "name": "VIRUTEX - VIRUTILLAS",
            "category_id": 1003
        },
        {
            "name": "VIRUTEX VIRUTILLAS",
            "category_id": 1003
        },
        {
            "name": "VIRUTEX ASEO",
            "category_id": 1003
        },
        {
            "name": "TANAX AEROSOL",
            "category_id": 1002
        },
        {
            "name": "TANAX POLVO",
            "category_id": 1002
        },
        {
            "name": "TANAX DESINFECTANTE",
            "category_id": 1003
        },
        {
            "name": "TANAX GATILLO",
            "category_id": 1003
        },
        {
            "name": "PAÑAL CHICOLASTIC",
            "category_id": 1002
        },
        {
            "name": "FPC TISSUE",
            "category_id": 1002
        },
        {
            "name": "CAFFARENA PRET APORTE",
            "category_id": 1002
        },
        {
            "name": "CAFFARENA MUSS",
            "category_id": 1002
        },
        {
            "name": "CAFFARENA TRANSPARENTE",
            "category_id": 1002
        },
        {
            "name": "CAFARENA ELASTICADA",
            "category_id": 1002
        },
        {
            "name": "CAFFARENA MED. PANTALON",
            "category_id": 1002
        },
        {
            "name": "MEDIA PANTALON CAFARENA 0153",
            "category_id": 1002
        },
        {
            "name": "CAMBIARLO",
            "category_id": 1002
        },
        {
            "name": "BEIERSDORF CREMAS",
            "category_id": 1002
        },
        {
            "name": "SHAMPO KADUS",
            "category_id": 1002
        },
        {
            "name": "BALSAMO KADUS",
            "category_id": 1002
        },
        {
            "name": "JABON  KADUS",
            "category_id": 1002
        },
        {
            "name": "BALLERINA SACHET",
            "category_id": 1002
        },
        {
            "name": "BALLERINA SHAMPOO FRASCO",
            "category_id": 1002
        },
        {
            "name": "BALLERINA SHAMPOO DOYPACK",
            "category_id": 1002
        },
        {
            "name": "BALLERINA ACONDICIONADOR FRASCO",
            "category_id": 1002
        },
        {
            "name": "BALLERINA ACONDICIONADOR DOYPACK",
            "category_id": 1002
        },
        {
            "name": "BALLERINA JABON",
            "category_id": 1002
        },
        {
            "name": "BALLERINA SUAVELINA",
            "category_id": 1002
        },
        {
            "name": "CMPC PAPEL HIGIENICO",
            "category_id": 1002
        },
        {
            "name": "CMPC SERVILLETAS",
            "category_id": 1002
        },
        {
            "name": "CMPC TOALLA PAPEL",
            "category_id": 1002
        },
        {
            "name": "CMPC PAÑALES",
            "category_id": 1002
        },
        {
            "name": "CMPC PAÑALES ADULTOS",
            "category_id": 1002
        },
        {
            "name": "CMPC TOALLAS HUMEDAS",
            "category_id": 1002
        },
        {
            "name": "CMPC TOALLAS FEMENINAS",
            "category_id": 1002
        },
        {
            "name": "KIMBERLY PAÑALES BEBE",
            "category_id": 1002
        },
        {
            "name": "KIMBERLY HIGIENICO",
            "category_id": 1002
        },
        {
            "name": "KIMBERLY PAÑALES  ADULTO",
            "category_id": 1002
        },
        {
            "name": "KIMBERLY TOALLAS  FEMENINAS",
            "category_id": 1002
        },
        {
            "name": "EDGEWELL",
            "category_id": 1002
        },
        {
            "name": "PROCTER MAQUINAS DE AFEITAR",
            "category_id": 1002
        },
        {
            "name": "PROCTER PAÑALES",
            "category_id": 1002
        },
        {
            "name": "PROCTER TOALLAS FEMENINAS",
            "category_id": 1002
        },
        {
            "name": "PROTECTOR SHAMPOO",
            "category_id": 1002
        },
        {
            "name": "PROCTER DETERGENTES",
            "category_id": 1002
        },
        {
            "name": "PROCTER  ASEO PERSONAL",
            "category_id": 1002
        },
        {
            "name": "PROCTER  LAVALOZA",
            "category_id": 1002
        },
        {
            "name": " BIO FRESCURA DETERGTE LIQUIDO",
            "category_id": 1003
        },
        {
            "name": "BIO FRESCURA DETERGENTE POLVO",
            "category_id": 1003
        },
        {
            "name": "BIO FRESCURA DETERGENTE ASEO HOGAR",
            "category_id": 1003
        },
        {
            "name": "DETERGENTE BIO FRESCURA",
            "category_id": 1003
        },
        {
            "name": "BIC",
            "category_id": 1002
        },
        {
            "name": "TE LIPTON",
            "category_id": 1002
        },
        {
            "name": "TECNO TOALLA PAÑALES",
            "category_id": 1002
        },
        {
            "name": "PAÑALES CHIKOOL",
            "category_id": 1002
        },
        {
            "name": "TOALLAS PRODESA",
            "category_id": 1002
        },
        {
            "name": "HIGIENICO TECNOPAPEL",
            "category_id": 1002
        },
        {
            "name": "TOALLA TECNOPAPEL",
            "category_id": 1002
        },
        {
            "name": "AEROSOL TECNOPAPEL",
            "category_id": 1002
        },
        {
            "name": "INST Y ASEO PERSONAL TECNOPAPEL",
            "category_id": 1002
        },
        {
            "name": "ASEO PERSONAL FRESH UP",
            "category_id": 1002
        },
        {
            "name": "ATUN INNOVA",
            "category_id": 1002
        },
        {
            "name": "DURAZNO INNOVA",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS INNOVA",
            "category_id": 1002
        },
        {
            "name": "CEREALES INNOVA",
            "category_id": 1002
        },
        {
            "name": "TE Y CAFE INNOVA",
            "category_id": 1002
        },
        {
            "name": "ORIZON SAN JOSE",
            "category_id": 1002
        },
        {
            "name": "SAN LAZARO",
            "category_id": 1002
        },
        {
            "name": "SOPAS INSTANTENA  ANGELMO",
            "category_id": 1002
        },
        {
            "name": "COSERVAS ANGELMO",
            "category_id": 1002
        },
        {
            "name": "ANGELMO CONSERVA",
            "category_id": 1002
        },
        {
            "name": "MOLINO CAUPOLICAN",
            "category_id": 1008
        },
        {
            "name": "ALIMENTOS CISTERNAS",
            "category_id": 1008
        },
        {
            "name": "TRESKO",
            "category_id": 1008
        },
        {
            "name": "ALIMENTOS FREE GO",
            "category_id": 1008
        },
        {
            "name": "MASTER FOOD",
            "category_id": 1008
        },
        {
            "name": "ARROCERA TUCAPEL",
            "category_id": 1002
        },
        {
            "name": "CHAMPION",
            "category_id": 1008
        },
        {
            "name": "ALIMENTO CANNES",
            "category_id": 1008
        },
        {
            "name": "PROMOCION CANNES",
            "category_id": 1008
        },
        {
            "name": "PROMOCIONES MASCOTAS",
            "category_id": 1008
        },
        {
            "name": "ALIMENTOS EL GLOBO",
            "category_id": 1008
        },
        {
            "name": "EXTRUDER",
            "category_id": 1008
        },
        {
            "name": "ALIMENTOS VARIOS",
            "category_id": 1008
        },
        {
            "name": "DOS EN UNO CHICLES",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO BIGTIME",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO BIGTIME SEVEN",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO CARAMELOS DUROS",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO CARAMELO BLANDOS",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO CHUBI",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO CHOCOLATE",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO BAÑADOS",
            "category_id": 1002
        },
        {
            "name": "HUEVOS DOS EN UNO",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO HALLOWEEN",
            "category_id": 1002
        },
        {
            "name": "DOS EN UNO GALLETAS",
            "category_id": 1002
        },
        {
            "name": "DURAZNOS DOS EN UNO",
            "category_id": 1002
        },
        {
            "name": "GALLETA S DOS EN UNO RELLENAS",
            "category_id": 1002
        },
        {
            "name": "CONFITES NESTLE",
            "category_id": 1002
        },
        {
            "name": "CHOCOLATES NESTLE",
            "category_id": 1002
        },
        {
            "name": "COMERCIAL PORVENIR SPA",
            "category_id": 1002
        },
        {
            "name": "COSTA CARAMELOS DUROS",
            "category_id": 1002
        },
        {
            "name": "COSTA CARAMELOS BLANDOS",
            "category_id": 1002
        },
        {
            "name": "COSTA BAÑADOS",
            "category_id": 1002
        },
        {
            "name": "COSTA CHOCOLATES",
            "category_id": 1002
        },
        {
            "name": "COSTA CEREALES",
            "category_id": 1002
        },
        {
            "name": "COSTA GALLETAS",
            "category_id": 1002
        },
        {
            "name": "COBERTURA CHOCOLATE COSTA",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ A  PEDIDO",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ A PEDIDO",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ CHICLES",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ CHOCOLATES",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ CARAMELOS DUROS",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ  CARAMELOS BLANDOS",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ EXHIBIDORES",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ GALLETAS",
            "category_id": 1002
        },
        {
            "name": "MONDELEZ MAYONESA",
            "category_id": 1002
        },
        {
            "name": "ROYAL SOBRE 20GR",
            "category_id": 1002
        },
        {
            "name": "CALAF",
            "category_id": 1002
        },
        {
            "name": "GALLETAS SANTIAGO",
            "category_id": 1002
        },
        {
            "name": "BARRAS DE CEREAL ALIM EL GLOBO",
            "category_id": 1002
        },
        {
            "name": "CHOCOLATE MASTER MARTINI",
            "category_id": 1002
        },
        {
            "name": "CREMAS MASTER MARTINI",
            "category_id": 1002
        },
        {
            "name": "MANTECA MASTER MARTINI",
            "category_id": 1002
        },
        {
            "name": "TAMY ABARROTES",
            "category_id": 1002
        },
        {
            "name": "TAMY BEBIDAS",
            "category_id": 1004
        },
        {
            "name": "PAPAS FRITAS TIKA",
            "category_id": 1002
        },
        {
            "name": "RICA FOOD",
            "category_id": 1002
        },
        {
            "name": "PAPAS CRIPS",
            "category_id": 1002
        },
        {
            "name": "MAXI COCTEL",
            "category_id": 1002
        },
        {
            "name": "PALOMITAS TAMY",
            "category_id": 1002
        },
        {
            "name": "GOLOSINA  TAMY BEBETO",
            "category_id": 1002
        },
        {
            "name": "CONFITES UNIVERSAL",
            "category_id": 1002
        },
        {
            "name": "QUEQUES CASEROS",
            "category_id": 1002
        },
        {
            "name": "CECINA FP",
            "category_id": 1002
        },
        {
            "name": "MARGARINA REGIMEL",
            "category_id": 1002
        },
        {
            "name": "MARGARINA SUREÑA",
            "category_id": 1002
        },
        {
            "name": "MARGARINA CALO",
            "category_id": 1002
        },
        {
            "name": "MARGARINA PAMPERITA",
            "category_id": 1002
        },
        {
            "name": "MANTECAS VARIAS",
            "category_id": 1002
        },
        {
            "name": "ACEITE BELMONT",
            "category_id": 1002
        },
        {
            "name": "ACEITE LA REINA",
            "category_id": 1002
        },
        {
            "name": "ACEITE CHEF",
            "category_id": 1002
        },
        {
            "name": "ACIETE BIDON CHEF",
            "category_id": 1002
        },
        {
            "name": "ACEITE CRISTAL",
            "category_id": 1002
        },
        {
            "name": "LECHE EN POLVO CALO",
            "category_id": 1002
        },
        {
            "name": "LECHE POLVO LONCO LECHE",
            "category_id": 1002
        },
        {
            "name": "LECHES LIQ.LONCO TETRA",
            "category_id": 1002
        },
        {
            "name": "LECHES LIQ. 200CC",
            "category_id": 1002
        },
        {
            "name": "LONCOLECHE PROTEIN MILK",
            "category_id": 1002
        },
        {
            "name": "LECHES CALO",
            "category_id": 1002
        },
        {
            "name": "LONCOLECHE BREAK",
            "category_id": 1002
        },
        {
            "name": "CREMAS BATIR",
            "category_id": 1002
        },
        {
            "name": "YOGU YOGU LARGA VIDA",
            "category_id": 1002
        },
        {
            "name": "YOGHURT CALAN SURTIDO",
            "category_id": 1002
        },
        {
            "name": "PROT SHOT",
            "category_id": 1002
        },
        {
            "name": "SHAKE SHAKE",
            "category_id": 1002
        },
        {
            "name": "QUESOS",
            "category_id": 1002
        },
        {
            "name": "MANTEQUILLAS",
            "category_id": 1002
        },
        {
            "name": "MANJAR",
            "category_id": 1002
        },
        {
            "name": "NECTAR WATTS LT",
            "category_id": 1004
        },
        {
            "name": "JUGOS WATTS 200 CC",
            "category_id": 1004
        },
        {
            "name": "MERM. LOS LAGOS",
            "category_id": 1002
        },
        {
            "name": "MERMELADAS STD.WATTS (SACHET)",
            "category_id": 1002
        },
        {
            "name": "MERMELADAS LIGHT WATTS (SACHET)",
            "category_id": 1002
        },
        {
            "name": "DULCES WATTS",
            "category_id": 1002
        },
        {
            "name": "SALSAS DE TOMATES DAMPEZZO",
            "category_id": 1002
        },
        {
            "name": "MERMELADAS REGIMEL FRASCO S/AZUCAR",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS TETRA HORT",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS TETRA FRUTA",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS TARRO HORT",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS TARRO FRUTA",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS IMP FRUTAS",
            "category_id": 1002
        },
        {
            "name": "MARGARINAS",
            "category_id": 1002
        },
        {
            "name": "MANTECAS VEGETALES",
            "category_id": 1002
        },
        {
            "name": "MANTECAS ANIMALES",
            "category_id": 1002
        },
        {
            "name": "GRASAS",
            "category_id": 1002
        },
        {
            "name": "MERMELADAS WATTS",
            "category_id": 1002
        },
        {
            "name": "MERMELADAS GOLD",
            "category_id": 1002
        },
        {
            "name": "CONSEVAS INDUSTRIALES WASIL TARRO",
            "category_id": 1002
        },
        {
            "name": "CONSERVAS INDUSTRIALES WASIL IMPORT",
            "category_id": 1002
        },
        {
            "name": "CREMAS CALO",
            "category_id": 1002
        },
        {
            "name": "MANJARES",
            "category_id": 1002
        },
        {
            "name": "PREPARADOS PARA HELADO",
            "category_id": 1002
        }
    ]
      )

      

      // Crear productos
      await queryInterface.bulkInsert('products', 
      [
        {
            "code": 10002001,
            "name": "AZUCAR IANSA 20X1 KL",
            "subcategory_id": 1002
        },
        {
            "code": 10002003,
            "name": "AZUCAR LA PATRONA 10X1 KL",
            "subcategory_id": 1002
        },
        {
            "code": 10002005,
            "name": "AZUCAR IANSA X5 KL",
            "subcategory_id": 1002
        },
        {
            "code": 10002007,
            "name": "AZUCAR IANSA 10X1 KL (136)",
            "subcategory_id": 1002
        },
        {
            "code": 10002008,
            "name": "AZUCAR IANSA 20 X 750GR",
            "subcategory_id": 1002
        },
        {
            "code": 10002010,
            "name": "AZUCAR FLOR IANSA  20X500 GRS.(233)",
            "subcategory_id": 1002
        },
        {
            "code": 10002011,
            "name": "AZUCAR FLOR IANSA 12X1KG (234)",
            "subcategory_id": 1002
        },
        {
            "code": 10002012,
            "name": "AZUCAR FLOR DAMA BLANCA 16X500 GRS.",
            "subcategory_id": 1002
        },
        {
            "code": 10002017,
            "name": "AZUCAR RUBIA DAMA BLANCA 16X500GR.",
            "subcategory_id": 1002
        },
        {
            "code": 10002019,
            "name": "AZUCAR IANSA LIGHT SUCRA 20X500 KG (169)",
            "subcategory_id": 1002
        },
        {
            "code": 10002021,
            "name": "AZUCAR IANSA LIGHTSTEVIA 20X500 KG (221)",
            "subcategory_id": 1002
        },
        {
            "code": 10002024,
            "name": "CHANCACA IANSA 18X225GR (184)",
            "subcategory_id": 1002
        },
        {
            "code": 10002030,
            "name": "IANSA CERO K SUCRALOSA 4X4X180ML (014)",
            "subcategory_id": 1002
        },
        {
            "code": 10002032,
            "name": "IANSACERO K SACARINA SUCR 4X4X250ML (060",
            "subcategory_id": 1002
        },
        {
            "code": 10002035,
            "name": "IANSA CERO K SUCRALOSA 4X4X250ML (015)",
            "subcategory_id": 1002
        },
        {
            "code": 10002037,
            "name": "IANSA CERO K STEVIA SUC 4X4X250ML (012)",
            "subcategory_id": 1002
        },
        {
            "code": 10002045,
            "name": "AZUCAR RUBIA IANSA 18X500GR (344)",
            "subcategory_id": 1002
        },
        {
            "code": 10002200,
            "name": "ARROZ IANSA G1 10X1 KG (067)",
            "subcategory_id": 1002
        },
        {
            "code": 10002205,
            "name": "ARROZ IANSA G2 10X1 KG (068)",
            "subcategory_id": 1002
        },
        {
            "code": 10002250,
            "name": "AZUCAR IANSA + ARROZ IANSA G1 10X1K",
            "subcategory_id": 1002
        },
        {
            "code": 10002300,
            "name": "2 MANGA DE AZUCAR 10X1KG +1 POUCH REGALO",
            "subcategory_id": 1002
        },
        {
            "code": 10002310,
            "name": "4 BOLSAS DE AZUCAR 5 KG +1 POUCH REGALO",
            "subcategory_id": 1002
        },
        {
            "code": 10002550,
            "name": "PACK AZUBAVAGSDF",
            "subcategory_id": 1002
        },
        {
            "code": 10003005,
            "name": "QUEQUE NAVIDEÑO LUCERNA 12X800GR",
            "subcategory_id": 1003
        },
        {
            "code": 10003010,
            "name": "PAN DE PASCUA VERLUYS 12 X 900G",
            "subcategory_id": 1003
        },
        {
            "code": 10003015,
            "name": "SPAGUETTI 5 MALLOA 12X500G",
            "subcategory_id": 1003
        },
        {
            "code": 10003020,
            "name": "CABELLOS DE ANGEL MALLOA 12X500G",
            "subcategory_id": 1003
        },
        {
            "code": 10003025,
            "name": "RIGATI MALLOA 12X500G",
            "subcategory_id": 1003
        },
        {
            "code": 10003030,
            "name": "ESPIRALES MALLOA 12X500G",
            "subcategory_id": 1003
        },
        {
            "code": 10003035,
            "name": "PACK CORBATAS MALLOA 12X500G",
            "subcategory_id": 1003
        },
        {
            "code": 10004005,
            "name": "HUEVOS AV.TORRES PRIMERA BLANCO X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10004010,
            "name": " HUEVOS AV.TORRES EXTRA BLANCO X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10004015,
            "name": "HUEVOS AV.TORRES SUPER BLANCO X 100 UDS",
            "subcategory_id": 1004
        },
        {
            "code": 10004020,
            "name": "HUEVOS AV.TORRES SEGUNDA BLANCO X 180UNI",
            "subcategory_id": 1004
        },
        {
            "code": 10004050,
            "name": "HUEVOS AGROCHEQUEN PRIMERA COLOR X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10004055,
            "name": "HUEVOS AGROCHEQUEN PRIMERA BLANCO X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10004063,
            "name": "CAMPANARIO MANGO LIGHT 9G 12X700 CC",
            "subcategory_id": 1004
        },
        {
            "code": 10004065,
            "name": "HUEVOS AGROCHEQUEN EXTRA BLANCO X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10004070,
            "name": "HUEVOS AGROCHEQUEN COLOR EXTRA X180UN",
            "subcategory_id": 1004
        },
        {
            "code": 10006001,
            "name": "ARROZ IMPORTADO  10X 1KL",
            "subcategory_id": 1005
        },
        {
            "code": 10006064,
            "name": "ARROZ ARUBA VERDE G·2  10X1 KL",
            "subcategory_id": 1005
        },
        {
            "code": 10006067,
            "name": "ARROZ ARUBA G 2 AZUL. 10X1",
            "subcategory_id": 1005
        },
        {
            "code": 10008001,
            "name": "ARVEJA  PARTIDA ARUBA 10X KILO",
            "subcategory_id": 1006
        },
        {
            "code": 10008004,
            "name": "LENTEJAS LO MEJOR  DEL CAMPO 10X1KL (6MM",
            "subcategory_id": 1006
        },
        {
            "code": 10010005,
            "name": "HARINA CUNACO HNA PERLA X25KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010027,
            "name": "HARINA YANINE TODO USO 2 X 5KG PAPEL",
            "subcategory_id": 1007
        },
        {
            "code": 10010030,
            "name": "HARINA YANINE TODO USO S/FINA X25KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010050,
            "name": "HARINA CISNE IMPERIAL C/POLVOS 10 X 1 KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010100,
            "name": "HARINA YANINE REPOSTERIA S/POLVO 12X1KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010110,
            "name": "HARINA YANINE REPOSTERIA C/POLVO 12X1KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010120,
            "name": "HARINA YANINE INTEGRAL FINA 12X1KG",
            "subcategory_id": 1007
        },
        {
            "code": 10010150,
            "name": "HARINA MOLINO COLLICO X 25 KLS",
            "subcategory_id": 1007
        },
        {
            "code": 10011001,
            "name": "ACEITE VEGETAL SMARTPRICE 12X900 CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011003,
            "name": "ACEITE SUAVIT VEJETAL DE SOJA 20X900CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011005,
            "name": "ACEITE OLEO DE SOJA COAMO 20X900CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011009,
            "name": "ACEITE VEGETAL BONANZA 12X900",
            "subcategory_id": 1008
        },
        {
            "code": 10011010,
            "name": "ACEITE MERKAT 12X900CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011015,
            "name": "ACEITE TRAVERSO 12X900 CC (VOL)",
            "subcategory_id": 1008
        },
        {
            "code": 10011020,
            "name": "ACEITE TRAVERSO 12X900 CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011035,
            "name": "ACEITE PARRAL VEGETAL 12X900CC",
            "subcategory_id": 1008
        },
        {
            "code": 10011040,
            "name": "ACEITE NATURA 100% MARAVILLA 15X900CC",
            "subcategory_id": 1008
        },
        {
            "code": 10012005,
            "name": "DURAZNO TROCITO BONANZA 24X590GR",
            "subcategory_id": 1009
        },
        {
            "code": 10012010,
            "name": "DURAZNO MITADES BONANZA 24X590GR",
            "subcategory_id": 1009
        },
        {
            "code": 10014006,
            "name": "LEVADURA SECA LEFERSA  10X10 GRS.(24)",
            "subcategory_id": 1010
        },
        {
            "code": 10014021,
            "name": "LEVADURA SECA COLLICO 10X10(24)",
            "subcategory_id": 1010
        },
        {
            "code": 10014022,
            "name": "LEVADURA FRESCA FLOW PACK 20X38 GRS.",
            "subcategory_id": 1010
        },
        {
            "code": 10014030,
            "name": "LEVADURA FRESCA PANADERA LIBRA(20)",
            "subcategory_id": 1010
        },
        {
            "code": 10014050,
            "name": "LEVADURA SECA INSTANTANEA  20X500 GRS.",
            "subcategory_id": 1010
        },
        {
            "code": 10015002,
            "name": "SAL LOBOS FINA 10X1 KL",
            "subcategory_id": 1011
        },
        {
            "code": 10015003,
            "name": "SAL LOBOS GRUESA 10X1 KL",
            "subcategory_id": 1011
        },
        {
            "code": 10015004,
            "name": "SAL  FINA OCEANO 10X1 KL",
            "subcategory_id": 1011
        },
        {
            "code": 10015005,
            "name": "SAL LOBOS SALERO 15X250 GRS.",
            "subcategory_id": 1011
        },
        {
            "code": 10015008,
            "name": "SAL LOBOS SALERO 10X125 GRS.",
            "subcategory_id": 1011
        },
        {
            "code": 10015021,
            "name": "SAL BIO SAL 6X400 GR",
            "subcategory_id": 1011
        },
        {
            "code": 10015025,
            "name": "SAL BIO SAL SALERO 15 X250 GRS.",
            "subcategory_id": 1011
        },
        {
            "code": 10015032,
            "name": "SAL VENUS 10X1 KL",
            "subcategory_id": 1011
        },
        {
            "code": 10015041,
            "name": "SAL DE MAR 12X800 GRS.",
            "subcategory_id": 1011
        },
        {
            "code": 10015060,
            "name": "SAL PARRILLERA 15X750",
            "subcategory_id": 1011
        },
        {
            "code": 10016005,
            "name": "SAL GRUESA ROSADA HIMALAYA 24X550GRS",
            "subcategory_id": 1012
        },
        {
            "code": 10016010,
            "name": "SAL GRUESA ROSADA HIMALAYA 12 X 1100 GRS",
            "subcategory_id": 1012
        },
        {
            "code": 10016015,
            "name": "SAL FINA ROSADA HIMALAYA  24X550GRS",
            "subcategory_id": 1012
        },
        {
            "code": 10016020,
            "name": "SAL FINA  ROSADA HIMALAYA  12X1100GR",
            "subcategory_id": 1012
        },
        {
            "code": 10016025,
            "name": "SAL GRUESA ROSADA HIMALAYA BOT. 48X100GR",
            "subcategory_id": 1012
        },
        {
            "code": 10017001,
            "name": "QUESO PARCELA DE VALDIVIA X11KL APROX.",
            "subcategory_id": 1013
        },
        {
            "code": 10017003,
            "name": "QUESO CHANCO LAMINADO 10 X 1 KL",
            "subcategory_id": 1013
        },
        {
            "code": 10017010,
            "name": "QUESO CHANCO T8 KG",
            "subcategory_id": 1013
        },
        {
            "code": 10017011,
            "name": "QUESO GAUDA X8 KLS",
            "subcategory_id": 1013
        },
        {
            "code": 10017015,
            "name": "QUESO MANTE. LAM. LA VAQUITA X 250 GR(4)",
            "subcategory_id": 1013
        },
        {
            "code": 10017016,
            "name": "QUESO GAUDA LAM. LA VAQUITA X 250GR(4)",
            "subcategory_id": 1013
        },
        {
            "code": 10017021,
            "name": "QUESO GAUDA BARRA LA VAQUITA X4KL",
            "subcategory_id": 1013
        },
        {
            "code": 10017022,
            "name": "QUESO MANTECOSO BARRA LA VAQUITAX KL",
            "subcategory_id": 1013
        },
        {
            "code": 10017040,
            "name": "QUESO MANTEC PRADERAS DE OSOSRNO X 10KLS",
            "subcategory_id": 1013
        },
        {
            "code": 10017045,
            "name": "QUESO CHANCO LAMINADO RAFULCO 250G",
            "subcategory_id": 1013
        },
        {
            "code": 10017055,
            "name": "QUESO GAUDA P/LAMINAR  X5 KL APROX",
            "subcategory_id": 1013
        },
        {
            "code": 10017058,
            "name": "QUESO GAUDA LAMINADO HUILCO 48 X 250GR",
            "subcategory_id": 1013
        },
        {
            "code": 10017060,
            "name": "QUESO MANTECOSO LAMIN. HUILCO 48 X 250GR",
            "subcategory_id": 1013
        },
        {
            "code": 10017063,
            "name": "QUESO HUILCO PIEZA X 7 KL APROX",
            "subcategory_id": 1013
        },
        {
            "code": 10017065,
            "name": "QUESO MANTECOSO PIEZA HUILCO X 9KL APROX",
            "subcategory_id": 1013
        },
        {
            "code": 10017070,
            "name": "QUESO CHANQUITO X 4KL",
            "subcategory_id": 1013
        },
        {
            "code": 10017080,
            "name": "MANTEQUILLA HUILCO 20X200GRS",
            "subcategory_id": 1013
        },
        {
            "code": 10025001,
            "name": "JUREL QUIRIQUINA NAC  24X425 GR",
            "subcategory_id": 1014
        },
        {
            "code": 10025002,
            "name": "JUREL QUIRINA TOMATE  24X425GRS",
            "subcategory_id": 1014
        },
        {
            "code": 10025011,
            "name": "JUREL COLORADO 24X425 GR (IMP)",
            "subcategory_id": 1014
        },
        {
            "code": 10027006,
            "name": "CHORITOS ACEITE QUIRIQUINA 24X425 GRS",
            "subcategory_id": 1015
        },
        {
            "code": 10027007,
            "name": "CHORITOS NATURAL QUIRIQUINA 24X425 GR",
            "subcategory_id": 1015
        },
        {
            "code": 10027012,
            "name": "SURTIDO MARISCOS LOS FIORDOS  24X425",
            "subcategory_id": 1015
        },
        {
            "code": 10027020,
            "name": "PAILA MARINA QUIRIQUINA 24 X 425 GRS",
            "subcategory_id": 1015
        },
        {
            "code": 10027025,
            "name": "CHOLGAS AL NATURAL QUIRIQUINA 24X425GR",
            "subcategory_id": 1015
        },
        {
            "code": 10027030,
            "name": "JIBIA QUIRIQUINA 24X425 GR",
            "subcategory_id": 1015
        },
        {
            "code": 10029003,
            "name": "DURAZNOS EN MITADES  ACONCAGUA 24X580 GR",
            "subcategory_id": 1016
        },
        {
            "code": 10029004,
            "name": "DURAZNOS CUBITOS ACONCAGUA 24X560",
            "subcategory_id": 1016
        },
        {
            "code": 10029011,
            "name": "DURAZNOS MITADES ACONCAGUA 24X820 GRS.",
            "subcategory_id": 1016
        },
        {
            "code": 10029021,
            "name": "DURAZNOS CUBITO ACONCAGUA 24X820 GRS.",
            "subcategory_id": 1016
        },
        {
            "code": 10029080,
            "name": "PIÑAS CUBITOS LO MEJOR DEL C.  24X800 GR",
            "subcategory_id": 1016
        },
        {
            "code": 10029081,
            "name": "PALMITOS ENTEROS 24X400 GRS. BONAFOOD",
            "subcategory_id": 1016
        },
        {
            "code": 10029082,
            "name": "PALMITOS MITADES 12X800 GRS. BONAFOOD",
            "subcategory_id": 1016
        },
        {
            "code": 10029083,
            "name": "PALMITOS ENTEROS 12X800GRS. BONAFOOD",
            "subcategory_id": 1016
        },
        {
            "code": 10029088,
            "name": "ESPARRAGOS ESMERALDA 24X 425 GRS.",
            "subcategory_id": 1016
        },
        {
            "code": 10035005,
            "name": "ESCOBILLON CARIBE X 12",
            "subcategory_id": 1017
        },
        {
            "code": 10035010,
            "name": "BALDE ESCURRIDOR 14 LTS.",
            "subcategory_id": 1017
        },
        {
            "code": 10035015,
            "name": "ESCOBILLA L/SANITARIO C/POTE X 12",
            "subcategory_id": 1017
        },
        {
            "code": 10036001,
            "name": "YERBA BRASILEÑA MEMO 10X250 GRS.",
            "subcategory_id": 1018
        },
        {
            "code": 10036002,
            "name": "YERBA BRASILEÑA MEMO X5 KILOS (5)",
            "subcategory_id": 1018
        },
        {
            "code": 10036005,
            "name": "YERBA MATE ARUBA  X 5 KILOS",
            "subcategory_id": 1018
        },
        {
            "code": 10036006,
            "name": "YERBA MATE ARUBA 20X500GRS.",
            "subcategory_id": 1018
        },
        {
            "code": 10036015,
            "name": "YERBA MATE AMANDA SERRANAS  10X 500 GRS",
            "subcategory_id": 1018
        },
        {
            "code": 10036017,
            "name": "YERBA MATE ORO MATE C/PALO1X5 KILOS",
            "subcategory_id": 1018
        },
        {
            "code": 10036018,
            "name": "YERBA MATE ORO MATE 40X250GRS.",
            "subcategory_id": 1018
        },
        {
            "code": 10036025,
            "name": "YERBA MATE  TARAGUI 10X250 GRS.",
            "subcategory_id": 1018
        },
        {
            "code": 10036030,
            "name": "YERBA MATE ISABELLE X5 KILOS",
            "subcategory_id": 1018
        },
        {
            "code": 10036032,
            "name": "YERBA MATE ISABELLE 40X 250 GR",
            "subcategory_id": 1018
        },
        {
            "code": 10036035,
            "name": "YERBA MATE DON ARREGUIN PEPERINA 8X500GR",
            "subcategory_id": 1018
        },
        {
            "code": 10036040,
            "name": "YERBA MATE DON ARREGUIN COMPUESTA 8X500G",
            "subcategory_id": 1018
        },
        {
            "code": 10036045,
            "name": "YERBA MATE DON ARREGUIN CEDRON 8X500GRS",
            "subcategory_id": 1018
        },
        {
            "code": 10036050,
            "name": "YERBA MATE DON ARREGUIN MENTA 8X500GRS",
            "subcategory_id": 1018
        },
        {
            "code": 10036055,
            "name": "YERBA MATE SURTIDA DON ARREGUIN 8X500GRS",
            "subcategory_id": 1018
        },
        {
            "code": 10040001,
            "name": "FINA DE MAIZ CAMPINO 10X250 GR",
            "subcategory_id": 1019
        },
        {
            "code": 10040002,
            "name": "FINA DE MAIZ CAMPINO 10X100 GRS.",
            "subcategory_id": 1019
        },
        {
            "code": 10040003,
            "name": "FINA DE MAIZ CAMPINO 15X400 GR",
            "subcategory_id": 1019
        },
        {
            "code": 10040025,
            "name": "KETCHUP  DON JUAN 18X100 GRS.",
            "subcategory_id": 1019
        },
        {
            "code": 10040032,
            "name": "MAYONESA KRAFT 18X96 GRS.(6)",
            "subcategory_id": 1019
        },
        {
            "code": 10040040,
            "name": "MAYONESA KRAFT POTE 12X394 GRS.",
            "subcategory_id": 1019
        },
        {
            "code": 10040060,
            "name": "MAYONESA KRAFT POTE 12X749GRS.",
            "subcategory_id": 1019
        },
        {
            "code": 10042001,
            "name": "HELLMANS 24X93 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042008,
            "name": "HELLMANS 12X186 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042021,
            "name": "HELLMANS 12X940 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042031,
            "name": "MAYONESA JB 24X80 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042034,
            "name": "MAYONESA JB 12X800 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042041,
            "name": "NOT MAYO DOYPACK 12 X 300 GRS",
            "subcategory_id": 1020
        },
        {
            "code": 10042061,
            "name": "KETCHUP JB 18X100 CC",
            "subcategory_id": 1020
        },
        {
            "code": 10042101,
            "name": "MOSTAZA JB 18X100 GR",
            "subcategory_id": 1020
        },
        {
            "code": 10044001,
            "name": "SALSA ACONCAGUA ITALIANA 36X160 GR",
            "subcategory_id": 1021
        },
        {
            "code": 10044004,
            "name": "SALSA DE TOM. ACONCAGUA ITAL. 36X200 GR",
            "subcategory_id": 1021
        },
        {
            "code": 10044035,
            "name": "PASTA DENTAL FRESH UP KIDS 6 X 12 X 75ML",
            "subcategory_id": 1021
        },
        {
            "code": 10050001,
            "name": "TE CLUB ROJO 50X20 BOL",
            "subcategory_id": 1022
        },
        {
            "code": 10050002,
            "name": "LIPTON TE NEGRO DURAZ 400X6",
            "subcategory_id": 1022
        },
        {
            "code": 10050005,
            "name": "LIPTON TE NEGRO FRAMBUEZA 400X6",
            "subcategory_id": 1022
        },
        {
            "code": 10050020,
            "name": "TE LIPTON CEYLAN YELLOW 8X20 BOLS.",
            "subcategory_id": 1022
        },
        {
            "code": 10050021,
            "name": "TE CLUB ORIGINAL (EX VERDE) 10X20 BOL",
            "subcategory_id": 1022
        },
        {
            "code": 10050022,
            "name": "TE MILDRED 10 X100",
            "subcategory_id": 1022
        },
        {
            "code": 10050056,
            "name": "TE LIPTON AMARILLO 10X20 BOLSITAS",
            "subcategory_id": 1022
        },
        {
            "code": 10050058,
            "name": "TE LIPTON YELLOW LABEL X 100 BOLS.",
            "subcategory_id": 1022
        },
        {
            "code": 10052021,
            "name": "OMO TRADICIONAL 36X200",
            "subcategory_id": 1023
        },
        {
            "code": 10052023,
            "name": "OMO MATIC 36X200",
            "subcategory_id": 1023
        },
        {
            "code": 10052031,
            "name": "OMO TRADICIONAL 24X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052033,
            "name": "OMO MATIC 24X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052034,
            "name": "OMO 30X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052036,
            "name": "OMO SOFT 24X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052040,
            "name": "OMO  MATIC 20X 800",
            "subcategory_id": 1023
        },
        {
            "code": 10052081,
            "name": "RINSO ROSADO 36X200 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052091,
            "name": "RINSO AZUL 36X200 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052101,
            "name": "RINSO AZUL 24X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052121,
            "name": "DRIVE 36X200 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10052141,
            "name": "DRIVE 1X400 GR",
            "subcategory_id": 1023
        },
        {
            "code": 10054001,
            "name": "QUIX SACHET 20X80 GR",
            "subcategory_id": 1024
        },
        {
            "code": 10054003,
            "name": "QUIX 18X200 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054006,
            "name": "QUIX 24X300 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054009,
            "name": "QUIX 15X 500 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054012,
            "name": "QUIX 12X750 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054041,
            "name": "CIF CREMA SACHET 20X80 GR",
            "subcategory_id": 1024
        },
        {
            "code": 10054043,
            "name": "CIF CREMA 12X375 GR",
            "subcategory_id": 1024
        },
        {
            "code": 10054046,
            "name": "CIF CREMA 12X750 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054061,
            "name": "SOFT SOBRE 20X80 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054063,
            "name": "SOFT 12X500 ML",
            "subcategory_id": 1024
        },
        {
            "code": 10054066,
            "name": "SOFT 12X1 LT",
            "subcategory_id": 1024
        },
        {
            "code": 10054069,
            "name": "SOFT RECARGA 12X1 LT",
            "subcategory_id": 1024
        },
        {
            "code": 10054093,
            "name": "VANISH BLANCO 12X30GRS.",
            "subcategory_id": 1024
        },
        {
            "code": 10054095,
            "name": "VANISH LIQUIDO 12X100 ML.",
            "subcategory_id": 1024
        },
        {
            "code": 10054096,
            "name": "VANISH COLOR 12X30GRS",
            "subcategory_id": 1024
        },
        {
            "code": 10054110,
            "name": "SUAV. FUZOL R. COLOR D/P 12X1 LT.",
            "subcategory_id": 1024
        },
        {
            "code": 10054112,
            "name": "SUAV. FUZOL P/SENSIBLE D/P 12X1 LT.",
            "subcategory_id": 1024
        },
        {
            "code": 10054114,
            "name": "SUAV. FUZOL CLASICO D/P 12X1 LT",
            "subcategory_id": 1024
        },
        {
            "code": 10054115,
            "name": "SUAV. FUZOL AROMA  PRIMAVERA D/P 12X1LT.",
            "subcategory_id": 1024
        },
        {
            "code": 10056001,
            "name": "JABON  C2  12X85 GR",
            "subcategory_id": 1025
        },
        {
            "code": 10056021,
            "name": "JABON  DE TOCADOR  LE SANCY  12X90 GR",
            "subcategory_id": 1025
        },
        {
            "code": 10058001,
            "name": "DESODORANTE AXE MARINE X12",
            "subcategory_id": 1026
        },
        {
            "code": 10058002,
            "name": "DESODORANTE AXE PEACE X12",
            "subcategory_id": 1026
        },
        {
            "code": 10058003,
            "name": "DESODORANTE AXE MUSK X12",
            "subcategory_id": 1026
        },
        {
            "code": 10058004,
            "name": "DESODORANTE AXE APOLO X 12",
            "subcategory_id": 1026
        },
        {
            "code": 10058007,
            "name": "DESOD. SPRAY  AXE BLACK X 12 150ML",
            "subcategory_id": 1026
        },
        {
            "code": 10058008,
            "name": "DESOD. AXE FREE STYLE 12X150 ML",
            "subcategory_id": 1026
        },
        {
            "code": 10058009,
            "name": "DESODORANTE AXE FUSION  X12",
            "subcategory_id": 1026
        },
        {
            "code": 10058015,
            "name": "DESODORANTE AXE DARK TEMPT X 12",
            "subcategory_id": 1026
        },
        {
            "code": 10065003,
            "name": "CLOROX ROPA BLANCA 12X370 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065021,
            "name": "CLOROX ROPA COLORES 12X370",
            "subcategory_id": 1027
        },
        {
            "code": 10065023,
            "name": "CLORINDA 40X250 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065026,
            "name": "CLORINDA GEL 15X250 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065029,
            "name": "CLORINDA 28X500 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065032,
            "name": "CLORINDA 15X1 LT",
            "subcategory_id": 1027
        },
        {
            "code": 10065033,
            "name": "CLORINDA 6 X 1.9 LT",
            "subcategory_id": 1027
        },
        {
            "code": 10065038,
            "name": "CLORO DEFORT IND. 2.5% 5 LTS",
            "subcategory_id": 1027
        },
        {
            "code": 10065040,
            "name": "CLORO GEL DEFORT INDUSTRIAL 5 LTS",
            "subcategory_id": 1027
        },
        {
            "code": 10065042,
            "name": "SANITIZANTE INDUSTRIAL TODO CLEAN  5 LTS",
            "subcategory_id": 1027
        },
        {
            "code": 10065051,
            "name": "ESCOBILLON DOÑA CLORINDA X12 UNI",
            "subcategory_id": 1027
        },
        {
            "code": 10065071,
            "name": "POETT  PRIMAVERA 20X250 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065073,
            "name": "POETT  LAVANDA  20X250 CC",
            "subcategory_id": 1027
        },
        {
            "code": 10065074,
            "name": "POETT LIMP.LIQ.SUAVIDAD ALGODON 12X900",
            "subcategory_id": 1027
        },
        {
            "code": 10065075,
            "name": "POETT  ESPIRITU JOVEN  20X250C.C.",
            "subcategory_id": 1027
        },
        {
            "code": 10065081,
            "name": "POETT  PRIMAVERA 12X900 ML",
            "subcategory_id": 1027
        },
        {
            "code": 10065083,
            "name": "POETT LAVANDA 12X900 ML",
            "subcategory_id": 1027
        },
        {
            "code": 10065086,
            "name": "POETT LAVANDA 15X485 ML",
            "subcategory_id": 1027
        },
        {
            "code": 10065089,
            "name": "POETT PRIMAVERA 15X485 ML",
            "subcategory_id": 1027
        },
        {
            "code": 10065092,
            "name": "POETT ESPIRITU JOVEN 12X900 ML",
            "subcategory_id": 1027
        },
        {
            "code": 10065093,
            "name": "POETT SUAVIDA ALGODON X900",
            "subcategory_id": 1027
        },
        {
            "code": 10066001,
            "name": "CLORO ARCADIA ROPA BLANCA 12X900 CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066005,
            "name": "CLORO ARCADIA ROPA COLOR 12X900 CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066010,
            "name": "CLORO GEL ARCADIA 12X900 CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066015,
            "name": "CLORO ARCADIA 2.5% 12X1000GR MULTIUSO",
            "subcategory_id": 1028
        },
        {
            "code": 10066017,
            "name": "CLORO ARCADIA 2.5% 20X1000GR MULTIUSO",
            "subcategory_id": 1028
        },
        {
            "code": 10066020,
            "name": "CLORO ARCADIA 2.5% 9X2 LTS",
            "subcategory_id": 1028
        },
        {
            "code": 10066023,
            "name": "CLORO ARCADIA 2.5% 2X5000LT",
            "subcategory_id": 1028
        },
        {
            "code": 10066025,
            "name": "CLORO ARCADIA 5% 12X1 LT CONCENTRADO",
            "subcategory_id": 1028
        },
        {
            "code": 10066030,
            "name": "CLORO ARCADIA 5% 4 X 4LT DOMESTICO",
            "subcategory_id": 1028
        },
        {
            "code": 10066035,
            "name": "CLORO GEL ARCADIA 2X5000LT",
            "subcategory_id": 1028
        },
        {
            "code": 10066050,
            "name": "ALCOHOL GEL MAGIC SIN AROMA  1 LITRO",
            "subcategory_id": 1028
        },
        {
            "code": 10066099,
            "name": "DESINFEC Y SANITI. AMONIO CUAT 12X1800CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066100,
            "name": "DESINFEC . AMONIO CUAT CITRUS 12X1800CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066105,
            "name": "LIMPIAPISOS CON DESINFECTANTE 12X1800CC",
            "subcategory_id": 1028
        },
        {
            "code": 10066120,
            "name": "DESINFEC AMONIO CUAT GATILLO 12X900CC",
            "subcategory_id": 1028
        },
        {
            "code": 10070003,
            "name": "AMP. HAL. MEGABRIGHT 53WX10",
            "subcategory_id": 1029
        },
        {
            "code": 10070006,
            "name": "AMP. HAL. MEGABRIGHT  42W X10",
            "subcategory_id": 1029
        },
        {
            "code": 10070015,
            "name": "AMPOLL. HALOG. PHILIPS 4X53W.(75W)",
            "subcategory_id": 1029
        },
        {
            "code": 10070035,
            "name": "AMP. CLARA RED POWER 70 W(100 W) X 5 UNI",
            "subcategory_id": 1029
        },
        {
            "code": 10070036,
            "name": "AMP. CLARA RED POWER 52W (60 W) X 5 UNI",
            "subcategory_id": 1029
        },
        {
            "code": 10070046,
            "name": "AMPOLLETAS HYUNDAI 75WX10",
            "subcategory_id": 1029
        },
        {
            "code": 10070053,
            "name": "AMPOLLETA SYLVANIA CLARA 75W(10)",
            "subcategory_id": 1029
        },
        {
            "code": 10070078,
            "name": "AMPOLLETA LED BULBO BLANCA 7W",
            "subcategory_id": 1029
        },
        {
            "code": 10070080,
            "name": "AMPOLLETA LED BULBO BLANCA 9W",
            "subcategory_id": 1029
        },
        {
            "code": 10070082,
            "name": "AMPOLLETA LED BULBO BLANCA 12W",
            "subcategory_id": 1029
        },
        {
            "code": 10070084,
            "name": "AMPOLLETA LED PERLA BLANCA 9W",
            "subcategory_id": 1029
        },
        {
            "code": 10070086,
            "name": "AMPOLLETA LED PERLA BLANCA 12W",
            "subcategory_id": 1029
        },
        {
            "code": 10072010,
            "name": "PAPELILLO RONSON X 50 LIBRILLOS",
            "subcategory_id": 1030
        },
        {
            "code": 10072012,
            "name": "PAPELILLO OCB PREMIUN1 1/4 NEGRO (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10072014,
            "name": "PAPELILLO OCB ORGANICO1 1/4 X (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10072016,
            "name": "PAPELILLO OCB XPERT 1 1/4 X (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10072025,
            "name": "PACK 2 MOON SOLIDO X 20 + FOSFORO SAUCE",
            "subcategory_id": 1030
        },
        {
            "code": 10072029,
            "name": "PACK FOSFORO COPIHUE X10 + MOON SOLIDO",
            "subcategory_id": 1030
        },
        {
            "code": 10072030,
            "name": "ENCENDEDOR MOON TRASP X 25UN(40)",
            "subcategory_id": 1030
        },
        {
            "code": 10072032,
            "name": "ENCENDEDOR MOON SOL X 25 UNI (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10072050,
            "name": "ENCEND RONSON SOLID CLASIC X 25 UDS",
            "subcategory_id": 1030
        },
        {
            "code": 10072060,
            "name": "ENCEND RONSON ELECTROLITE X15UDS",
            "subcategory_id": 1030
        },
        {
            "code": 10072070,
            "name": "ENCENDEDOR RED POWER TRASP X 20 UDS",
            "subcategory_id": 1030
        },
        {
            "code": 10072075,
            "name": "ENCENDEDORES RED POWER  SOLIDO X20 UDS",
            "subcategory_id": 1030
        },
        {
            "code": 10072080,
            "name": "ENCENDEDOR NEON ELECTROLITE X 25 UDS",
            "subcategory_id": 1030
        },
        {
            "code": 10072085,
            "name": "ENCENDEDOR  NEON  TRANSPARENTE X 25U",
            "subcategory_id": 1030
        },
        {
            "code": 10073005,
            "name": "PAPELILLO DARK HORSE BLACK X25 (42)",
            "subcategory_id": 1031
        },
        {
            "code": 10073010,
            "name": "PAPELILLO DARK HORSE SILVER X25 (42)",
            "subcategory_id": 1031
        },
        {
            "code": 10073015,
            "name": "PAPELILLO DARK HORSE ORGANICO X25 (42)",
            "subcategory_id": 1031
        },
        {
            "code": 10073020,
            "name": "PAPELILLO DARK HORSE BROWN X25 (42)",
            "subcategory_id": 1031
        },
        {
            "code": 10073026,
            "name": "FILTRO DARK HORSE SLIM (ROJO) 34X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073031,
            "name": "FILTRO DARK HORSE SLIM (MENTOL) 10X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073036,
            "name": "FILTRO DARK HORSE SLIM (ORGANICO) 10X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073041,
            "name": "FILTRO DARK HORSE SLIM (CARBON) 10X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073046,
            "name": "FILTRO DH SLIM + PAPEL (BIO) 34X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073051,
            "name": "FILTRO DH SLIM + PAPEL (NEGRO) 34X120",
            "subcategory_id": 1031
        },
        {
            "code": 10073056,
            "name": "FILTRO DH SLIM LARG+PAPEL(ROJ/NEG)25X120",
            "subcategory_id": 1031
        },
        {
            "code": 10074101,
            "name": "TOALLA PAPEL LYM 12X2 X 12 MTS",
            "subcategory_id": 1032
        },
        {
            "code": 10075110,
            "name": "PAÑUELO BILLETERA  10X6UNIDADES",
            "subcategory_id": 1033
        },
        {
            "code": 10075120,
            "name": "PAPEL ENVOLVER ACONCAGUA X 280 MTS.",
            "subcategory_id": 1033
        },
        {
            "code": 10075150,
            "name": "TOALLA DE PAPEL  6X2 UNI DE 33 MTS",
            "subcategory_id": 1033
        },
        {
            "code": 10076015,
            "name": "ENCEND SPEED SOLIDO X 25 UND (40)",
            "subcategory_id": 1034
        },
        {
            "code": 10076025,
            "name": "ENCEND SPEED TRANSPARENTE X 25 (40)",
            "subcategory_id": 1034
        },
        {
            "code": 10076030,
            "name": "TRIPACK ENCEND+PAPELILLO AMSTERDAN URBAN",
            "subcategory_id": 1034
        },
        {
            "code": 10076100,
            "name": "PAPELILLO AMSTERDAM ECOPAPER+ TIPS 25UN",
            "subcategory_id": 1034
        },
        {
            "code": 10076105,
            "name": "PAPELILLO AMSTERDAM + TIPS  25UN",
            "subcategory_id": 1034
        },
        {
            "code": 10076120,
            "name": "PAPELILLO AMSTERDAM ECOPAPER X20",
            "subcategory_id": 1034
        },
        {
            "code": 10076125,
            "name": "PAPELILLO AMSTERDAM URBAN X20",
            "subcategory_id": 1034
        },
        {
            "code": 10077002,
            "name": "INSECT. TANAX POLVO SOBRE 10X20 GRS.",
            "subcategory_id": 1035
        },
        {
            "code": 10077003,
            "name": "INSECTICIDA TANAX M/Z 6X275ML",
            "subcategory_id": 1035
        },
        {
            "code": 10077028,
            "name": "INSECT. APARATO ELECT. RAID X 6 UNIDADES",
            "subcategory_id": 1035
        },
        {
            "code": 10077029,
            "name": "INSECT APARATO ELECT RAID X 1",
            "subcategory_id": 1035
        },
        {
            "code": 10077030,
            "name": "INSECT. RAID TABLETA ELECT. 20X12 UNID.",
            "subcategory_id": 1035
        },
        {
            "code": 10077051,
            "name": "INSECTICIDA RAID MOSCO/ZANCUDO 12X235",
            "subcategory_id": 1035
        },
        {
            "code": 10077055,
            "name": "INSECTICIDA RAID  CASA Y JARDIN  12X235",
            "subcategory_id": 1035
        },
        {
            "code": 10077058,
            "name": "INSECTICIDA RAID MAX 12X 225",
            "subcategory_id": 1035
        },
        {
            "code": 10077060,
            "name": "RATICIDA KLERAT 10X50 GR.",
            "subcategory_id": 1035
        },
        {
            "code": 10079022,
            "name": "BOLSA BASURA SUPERIOR 70X90 (X 10)",
            "subcategory_id": 1036
        },
        {
            "code": 10079025,
            "name": "BOLSA  BASURA SUPERIOR 50X70 (X 10)",
            "subcategory_id": 1036
        },
        {
            "code": 10079028,
            "name": "BOLSA BASURA OSO 80X110( X 5)",
            "subcategory_id": 1036
        },
        {
            "code": 10080001,
            "name": "VELAS ALONDRA L/DURACION X26",
            "subcategory_id": 1037
        },
        {
            "code": 10080005,
            "name": "VELAS INVENA 40X115 GRS",
            "subcategory_id": 1037
        },
        {
            "code": 10080010,
            "name": "VELAS ALONDRA ECONOMICA X 26 UNID.",
            "subcategory_id": 1037
        },
        {
            "code": 10080020,
            "name": "VELAS ALONDRA S. GIGANTE 15X260  GRS",
            "subcategory_id": 1037
        },
        {
            "code": 10080088,
            "name": "INSECT. MORTEIN C/JARDIN 6X450 ML.",
            "subcategory_id": 1037
        },
        {
            "code": 10081001,
            "name": "CERA NUGGET CAOBA 12X340 GRS.",
            "subcategory_id": 1038
        },
        {
            "code": 10081003,
            "name": "CERA NUGGET NATURAL 12X340 GRS.",
            "subcategory_id": 1038
        },
        {
            "code": 10081006,
            "name": "CERA NUGGET CON TIERRA 12X340 GRS",
            "subcategory_id": 1038
        },
        {
            "code": 10081039,
            "name": "CERA NUGGETT  INCOLORA 12X400",
            "subcategory_id": 1038
        },
        {
            "code": 10081071,
            "name": "CERA OSO CON TIERRA 12X300 CC",
            "subcategory_id": 1038
        },
        {
            "code": 10081073,
            "name": "CERA OSO ROJA 12X300 CC",
            "subcategory_id": 1038
        },
        {
            "code": 10081076,
            "name": "CERA OSO AMARILLA 12X300 CC",
            "subcategory_id": 1038
        },
        {
            "code": 10083001,
            "name": "BETUN NUGGET CHICO NEGRO X12",
            "subcategory_id": 1039
        },
        {
            "code": 10083003,
            "name": "BETUN NUGGET CHICO CAFE X12",
            "subcategory_id": 1039
        },
        {
            "code": 10083021,
            "name": "BETUN NUGGET GRANDE NEGRO X12",
            "subcategory_id": 1039
        },
        {
            "code": 10083023,
            "name": "BETUN NUGGET GRANDE CAFE X12",
            "subcategory_id": 1039
        },
        {
            "code": 10086005,
            "name": "CARBON CACIQUE ARECAYA  X 2.5 KG",
            "subcategory_id": 1040
        },
        {
            "code": 10086010,
            "name": "CARBON CACIQUE ARECAYA  X 2.5 KG ",
            "subcategory_id": 1040
        },
        {
            "code": 10087003,
            "name": "PAÑAL BABYSEC PREMIUN XXG X 16(8)",
            "subcategory_id": 1041
        },
        {
            "code": 10087008,
            "name": "PAÑAL BABYSEC PREMIUN XG X 16(8)",
            "subcategory_id": 1041
        },
        {
            "code": 10087021,
            "name": "PAÑAL HUGGIES VERDE M X 36",
            "subcategory_id": 1041
        },
        {
            "code": 10087022,
            "name": "PAÑAL HUGGIES NIÑO XG. X 22 UNID. (AZUL)",
            "subcategory_id": 1041
        },
        {
            "code": 10087023,
            "name": "PAÑAL HUGGIES NIÑA XG 22 UNI. (ROSADO)",
            "subcategory_id": 1041
        },
        {
            "code": 10087024,
            "name": "PAÑAL HUGGIES NIÑO XXG X 22 UNID. (AZUL)",
            "subcategory_id": 1041
        },
        {
            "code": 10087025,
            "name": "PAÑAL HUGGIES NIÑA XXG  X 22 UNID.(ROSAD",
            "subcategory_id": 1041
        },
        {
            "code": 10087026,
            "name": "PAÑAL HUGGIES AMARILLO XG X24 UNI",
            "subcategory_id": 1041
        },
        {
            "code": 10087051,
            "name": "PAÑAL HUGGIES AMARILLO XXG X24",
            "subcategory_id": 1041
        },
        {
            "code": 10087060,
            "name": "PAÑAL PAMPERS JUEGOS Y SUEÑOSX8 UNIDADES",
            "subcategory_id": 1041
        },
        {
            "code": 10087070,
            "name": "TOALLAS HUM. BABYLAN 12 X 50 UNDS.",
            "subcategory_id": 1041
        },
        {
            "code": 10087075,
            "name": "TOALLAS HUMEDAS BABYCLIN 24 X 50UND",
            "subcategory_id": 1041
        },
        {
            "code": 10087080,
            "name": "TOALLAS HUMEDAS BABYSEC PACK X3UNID.",
            "subcategory_id": 1041
        },
        {
            "code": 10089001,
            "name": "PEPSODENT 6X50 GR",
            "subcategory_id": 1042
        },
        {
            "code": 10089002,
            "name": "PEPSODENT 10X40 GRS",
            "subcategory_id": 1042
        },
        {
            "code": 10089003,
            "name": "PEPSODENT 6X2X130 GR",
            "subcategory_id": 1042
        },
        {
            "code": 10089004,
            "name": "PEPSODENT PACK 3 X 90 GR",
            "subcategory_id": 1042
        },
        {
            "code": 10089005,
            "name": "PEPSODENT PACK 2X130GRS.",
            "subcategory_id": 1042
        },
        {
            "code": 10089010,
            "name": "CEPILLO DENTAL PEPSODENT MED.PACK 12X4UN",
            "subcategory_id": 1042
        },
        {
            "code": 10089011,
            "name": "CEPILLO DENTAL COLGATE X 12  UNIDADES",
            "subcategory_id": 1042
        },
        {
            "code": 10089012,
            "name": "CEPILLO DENTAL COLGATE X 14 UNIDADES(6)",
            "subcategory_id": 1042
        },
        {
            "code": 10089015,
            "name": "CEPILLO DENTAL COLGATE  MEDIANO X 6 UND.",
            "subcategory_id": 1042
        },
        {
            "code": 10089020,
            "name": "PASTA DENTAL COLGATE 6X50GRS.",
            "subcategory_id": 1042
        },
        {
            "code": 10089025,
            "name": "PASTA DENTAL COLGATE 12X75 GRS",
            "subcategory_id": 1042
        },
        {
            "code": 10089027,
            "name": "DESOD. NIVEA BARRA PROT. HOMBRE 12X42",
            "subcategory_id": 1042
        },
        {
            "code": 10089028,
            "name": "DES. SPRAY SPEED STICK MENNEN  24/7 X 12",
            "subcategory_id": 1042
        },
        {
            "code": 10089029,
            "name": "DES. SPRAY SPEED MENNEN W/PROO 12",
            "subcategory_id": 1042
        },
        {
            "code": 10089030,
            "name": "DESOD. NIVEA SPRAY  PROTECT H. 12X150 ML",
            "subcategory_id": 1042
        },
        {
            "code": 10089031,
            "name": "DESOD. NIVEA BARRA DRY CONFORT  12X43GRS",
            "subcategory_id": 1042
        },
        {
            "code": 10089032,
            "name": "DESOD. NIVEA BARRA PEARL BEAUTY 12X34GRS",
            "subcategory_id": 1042
        },
        {
            "code": 10089033,
            "name": "DESOD. SPRAY MUJER DRY CONFORT 12X150 ML",
            "subcategory_id": 1042
        },
        {
            "code": 10089034,
            "name": "DESOD. NIVEA SP. MUJER STRESS PRO 12X150",
            "subcategory_id": 1042
        },
        {
            "code": 10089035,
            "name": "DESOD. NIVEA BARRA MUJ. INVIS.12X43GRS.",
            "subcategory_id": 1042
        },
        {
            "code": 10089036,
            "name": "DES. MENNEN SPRAY INTENSE 12X150ML.",
            "subcategory_id": 1042
        },
        {
            "code": 10089040,
            "name": "DESOD. MENNEN CLASICO BARRA   12X 100GRS",
            "subcategory_id": 1042
        },
        {
            "code": 10089045,
            "name": "DESOD. HOMBRE FRESH BARRA SPEED X12",
            "subcategory_id": 1042
        },
        {
            "code": 10089050,
            "name": "DESOD. BARRA  HOMB.  HIPOALERGENICO. X12",
            "subcategory_id": 1042
        },
        {
            "code": 10089060,
            "name": "DESOD. LADY SP. INV. FRESH  12X40 G. BAR",
            "subcategory_id": 1042
        },
        {
            "code": 10089062,
            "name": "DESOD. LADY SP. INV.  WILL F. 12X40  BAR",
            "subcategory_id": 1042
        },
        {
            "code": 10093001,
            "name": "PILA PANASONIC AA X 20 UNI",
            "subcategory_id": 1043
        },
        {
            "code": 10093003,
            "name": "PILA PANASONIC AAA X40 UNI",
            "subcategory_id": 1043
        },
        {
            "code": 10093005,
            "name": "PILA PANASONIC AA X60",
            "subcategory_id": 1043
        },
        {
            "code": 10093011,
            "name": "PILAS PANASONIC MEDIANA X 24 UNI",
            "subcategory_id": 1043
        },
        {
            "code": 10093013,
            "name": "PILAS PANASONIC GRANDE X24 UNI",
            "subcategory_id": 1043
        },
        {
            "code": 10093015,
            "name": "BATERIA PANASONIC X12 UNID.",
            "subcategory_id": 1043
        },
        {
            "code": 10094001,
            "name": "PILA ENERGIZER ALCALINA AA X10",
            "subcategory_id": 1044
        },
        {
            "code": 10094002,
            "name": "PILA ENERGIZER ALKALINA AA X 12 (20)",
            "subcategory_id": 1044
        },
        {
            "code": 10094004,
            "name": "PILA ENERGIZER GRANDE (D) X 24 UNID",
            "subcategory_id": 1044
        },
        {
            "code": 10094006,
            "name": "PILA ENERGIZER ALKALINA AAA X 12(20)",
            "subcategory_id": 1044
        },
        {
            "code": 10094011,
            "name": "PILA EVEREADY EX.DUR.AA X 60(12) (74700)",
            "subcategory_id": 1044
        },
        {
            "code": 10094013,
            "name": "PILA EVEREADY EX.DUR.AAA X24(12) (13300)",
            "subcategory_id": 1044
        },
        {
            "code": 10094015,
            "name": "PILA EVEREADY EX.DUR.GRANDEX12(24 (10000",
            "subcategory_id": 1044
        },
        {
            "code": 10094017,
            "name": "PILA EVEREADY EX.DUR.MEDIANX12(24)(52100",
            "subcategory_id": 1044
        },
        {
            "code": 10094021,
            "name": "BATERIA EVEREADY EXTRA DURACION X 1",
            "subcategory_id": 1044
        },
        {
            "code": 10094023,
            "name": "PILA  EVEREADY  GOLD AA X 8",
            "subcategory_id": 1044
        },
        {
            "code": 10094024,
            "name": "PILA EVEREADY GOLD AA X 10",
            "subcategory_id": 1044
        },
        {
            "code": 10094025,
            "name": "PILAS EVEREADY  GOLD AAA X 10",
            "subcategory_id": 1044
        },
        {
            "code": 10094055,
            "name": "EXIBIDOR PILAS METALICO",
            "subcategory_id": 1044
        },
        {
            "code": 10094060,
            "name": "EXHIBIDOR SOBREMESON",
            "subcategory_id": 1044
        },
        {
            "code": 10095005,
            "name": "PILA DURACELL AA X 12   (CAJA 10X12)",
            "subcategory_id": 1045
        },
        {
            "code": 10095008,
            "name": "PILA DURACELL AAA X 6 UN. (CAJA 10X6)",
            "subcategory_id": 1045
        },
        {
            "code": 10095011,
            "name": "DURACELL GRANDE 6X2 UNI",
            "subcategory_id": 1045
        },
        {
            "code": 10095013,
            "name": "BATERIA DURACELL X 12",
            "subcategory_id": 1045
        },
        {
            "code": 10095015,
            "name": "PILA SONY MEDIANA X 20",
            "subcategory_id": 1045
        },
        {
            "code": 10095018,
            "name": "PILA SONY GRANDE X 20",
            "subcategory_id": 1045
        },
        {
            "code": 10095020,
            "name": "PILA SONY AAAX40",
            "subcategory_id": 1045
        },
        {
            "code": 10095025,
            "name": "PILA SONY AA X 40 UNID.",
            "subcategory_id": 1045
        },
        {
            "code": 10095028,
            "name": "BATERIA SONY 9 V  X 10 UNIDADES",
            "subcategory_id": 1045
        },
        {
            "code": 10097002,
            "name": "RAYOVAC AA X 48(10) (15400)",
            "subcategory_id": 1046
        },
        {
            "code": 10097003,
            "name": "RAYOVAC AAA X 30 ( 24 ) (14400)",
            "subcategory_id": 1046
        },
        {
            "code": 10097008,
            "name": "BATERIA DE CARBON RAYOVAC X 48",
            "subcategory_id": 1046
        },
        {
            "code": 10097011,
            "name": "RAYOVAC MEDIANA X24 (6)",
            "subcategory_id": 1046
        },
        {
            "code": 10097012,
            "name": "RAYOVAC MEDIANA X 12(24) (24400)",
            "subcategory_id": 1046
        },
        {
            "code": 10097013,
            "name": "RAYOVAC GRANDE X 24 (12)",
            "subcategory_id": 1046
        },
        {
            "code": 10097015,
            "name": "RAYOVAC GRANDE X 12 (24)",
            "subcategory_id": 1046
        },
        {
            "code": 10097016,
            "name": "PILAS RAYOVAC ALCALINA AA X 12",
            "subcategory_id": 1046
        },
        {
            "code": 10097027,
            "name": "AMP. LED R/VAC  L.FRIA 6 X14W(100W) (16)",
            "subcategory_id": 1046
        },
        {
            "code": 10097028,
            "name": "AMP. LED R/VAC  L.FRIA  6X10W(75W)(16)",
            "subcategory_id": 1046
        },
        {
            "code": 10100001,
            "name": "PEPSI LATA 24 UNI X 350 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100006,
            "name": "KEM PINA LATA 24 UNI X 350 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100012,
            "name": "BILZ LATA 24 UNI X 350 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100015,
            "name": "PAP LATA 24 UNI X 350 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100022,
            "name": "CRUSH ZERO 6X4 LATA 310CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100033,
            "name": "PAP ZERO PET 12X500CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100034,
            "name": "BILZ ZERO PET 12X500CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100035,
            "name": "PAP ZERO PET 12X250CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100036,
            "name": "BILZ ZERO PET 12X250CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100037,
            "name": "LIMON SODA ZERO PET 12X500CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100038,
            "name": "KEM ZERO PET 12X500CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100039,
            "name": "PEPSI ZERO PET 12X500CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100041,
            "name": "PEPSI ZERO PET 12 UNI X 600 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10100045,
            "name": "CRUSH LATA 6 X 4 X 350 CC",
            "subcategory_id": 1047
        },
        {
            "code": 10102001,
            "name": "PEPSI MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102003,
            "name": "BILZ MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102005,
            "name": "BILZ ZERO MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102006,
            "name": "PAP MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102007,
            "name": "PAP ZERO  MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102009,
            "name": "KEM PINA MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102012,
            "name": "ORANGE 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102015,
            "name": "LIMON SODA MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102018,
            "name": "SEVEN UP MINI 12 UNI X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10102021,
            "name": "CRUSH PET 12 X 250 CC",
            "subcategory_id": 1048
        },
        {
            "code": 10103001,
            "name": "PEPSI 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103002,
            "name": "PEPSI ZERO LIMON 12X500 C.C.",
            "subcategory_id": 1049
        },
        {
            "code": 10103003,
            "name": "BILZ 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103006,
            "name": "PAP 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103009,
            "name": "KEM PINA 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103012,
            "name": "ORANGE 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103015,
            "name": "LIMON SODA 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103018,
            "name": "GINGER ALE 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103021,
            "name": "SEVEN UP 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103025,
            "name": "CRUSH 12 UNI X 500 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103050,
            "name": "PEPSI PET 12 UNI X 600 CC",
            "subcategory_id": 1049
        },
        {
            "code": 10103099,
            "name": "BEBIDAS SURTIDA  12 X 500",
            "subcategory_id": 1049
        },
        {
            "code": 10104001,
            "name": "NECTAR NARANJA 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104003,
            "name": "NECTAR NARANJA LIGHT 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104004,
            "name": "NECTAR NARANJA /PLATANO 6X1.5 LT.",
            "subcategory_id": 1050
        },
        {
            "code": 10104006,
            "name": "NECTAR DURAZNO 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104009,
            "name": "NECTAR DURAZNO LIGHT 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104012,
            "name": "NECTAR DAMASCO 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104015,
            "name": "NECTAR PIÑA 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104018,
            "name": "NECTAR MANZANA 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104021,
            "name": "NECTAR FRUTILLA 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104024,
            "name": "NECTAR TUTTIPAPAYA 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104027,
            "name": "NECTAR TUTTIKIWI 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104030,
            "name": "NECTAR TUTTIARANDANO 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104032,
            "name": "NECTAR TUTTIFRUTILLA LIGHT  6X1.5",
            "subcategory_id": 1050
        },
        {
            "code": 10104033,
            "name": "NECTAR MARACUYA LIGHT 6 UNI X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10104034,
            "name": "NECTAR PIÑA LIGHT 6X1.5",
            "subcategory_id": 1050
        },
        {
            "code": 10104037,
            "name": "NECTAR MANGO LIGHT 6 X 1.5 LT",
            "subcategory_id": 1050
        },
        {
            "code": 10105001,
            "name": "NECTAR NARANJA 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105003,
            "name": "NECTAR NARANJA LIGHT 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105006,
            "name": "NECTAR DURAZNO 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105009,
            "name": "NECTAR DURAZNO LIGHT 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105012,
            "name": "NECTAR DAMASCO 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105015,
            "name": "NECTAR MANZANA 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105018,
            "name": "NECTAR TUTIFRUTILLA 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105019,
            "name": "NECTAR TUTIFRUTILLA LIHTG 24X300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10105021,
            "name": "NECTAR TUTIARANDANO 24 UNI X 300 CC",
            "subcategory_id": 1051
        },
        {
            "code": 10106001,
            "name": "CACHANTUN 6 UNI X 1.6 LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106003,
            "name": "CACHANTUN SIN GAS 6 UNI X 1.6 LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106006,
            "name": "CACHANTUN LIGHT 6 UNI X 1.6 LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106008,
            "name": "CACHANTUN C/GAS 6 X 2.5 LTS",
            "subcategory_id": 1052
        },
        {
            "code": 10106009,
            "name": "CACHANTUN MAS CITRUS C/ GAS 6 X 1.6 LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106010,
            "name": "CACHANTUN MAS MANZANA 6X1.6LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106011,
            "name": "CACHANTUN MAS PERA  6X1.6 LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106015,
            "name": "CACHANTUN MAS GRANADA 6 X1.6 LTS",
            "subcategory_id": 1052
        },
        {
            "code": 10106018,
            "name": "CACHANTUN MAS MANGO MARACUYA 6 X 1600 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106021,
            "name": "CACHANTUN LIGTH 12 UNI X 500 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106024,
            "name": "CACHANTUN C/GAS  12 X 500 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106027,
            "name": "CACHANTUN SIN GAS 12 UNI X 500 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106030,
            "name": "CACHANTUN MAS LIMON  12 UNI X 500 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106041,
            "name": "CACHANTUN MAS MANZANA 12 X 600 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106042,
            "name": "CACHANTUN MAS PERA  12 X 600 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106043,
            "name": "CACHANTUN MAS CITRUS 12 X 600 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106045,
            "name": "CACHANTUN MAS GRANADA 12 X 600 CC",
            "subcategory_id": 1052
        },
        {
            "code": 10106111,
            "name": "CACHANTUN SIN GAS BIDON 4X6LT",
            "subcategory_id": 1052
        },
        {
            "code": 10106120,
            "name": "PURE LIFE S/GAS BIDON X6LT",
            "subcategory_id": 1052
        },
        {
            "code": 10107001,
            "name": "GATORADE COOL BLUE 6X500 CC",
            "subcategory_id": 1053
        },
        {
            "code": 10107005,
            "name": "GATORADE NARANJA ZERO PET 12 X 500 CC",
            "subcategory_id": 1053
        },
        {
            "code": 10107031,
            "name": "GATORADE COOL BLUE 6X750 CC",
            "subcategory_id": 1053
        },
        {
            "code": 10107033,
            "name": "GATORADE FRUTAS TROPICALES 6X750 CC",
            "subcategory_id": 1053
        },
        {
            "code": 10107036,
            "name": "GATORADE NARANJA 6X750 CC",
            "subcategory_id": 1053
        },
        {
            "code": 10107041,
            "name": "GATORADE COOL BLUE 6X1 LT",
            "subcategory_id": 1053
        },
        {
            "code": 10107043,
            "name": "GATORADE FRUTAS TROPICALES 6X1 LT",
            "subcategory_id": 1053
        },
        {
            "code": 10107046,
            "name": "GATORADE NARANJA 6X1 LT",
            "subcategory_id": 1053
        },
        {
            "code": 10108005,
            "name": "RED BULL TRADICIONAL 24  X 355 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108007,
            "name": "RED BULL TRADICIONAL 6 X 4  X  250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108008,
            "name": "RED BULL TRADICIONAL 4 X6 X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108010,
            "name": "RED BULL TRADICIONAL 2 X 12 X  250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108012,
            "name": "RED BULL SIN AZUCAR 24  X  250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108015,
            "name": "RED BULL AMARILLA TROPICAL 24 X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108016,
            "name": "RED BULL TRADICIONAL  12 X  250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108018,
            "name": "RED BULL RED SANDIA 24  X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108019,
            "name": "RED BULL MORADO ACAI 24 X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108020,
            "name": "RED BULL GRANADA LATA 24  X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108021,
            "name": "RED BULL BLUE ARANDANO 24  X  250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108024,
            "name": "RED BULL AMARILLA 3 X 8 X 250",
            "subcategory_id": 1054
        },
        {
            "code": 10108026,
            "name": "RED BULL RED SANDIA 3 X 8 X 250",
            "subcategory_id": 1054
        },
        {
            "code": 10108030,
            "name": "ROCKSTAR ORIGINAL BOTELLA 12 X 500 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10108035,
            "name": "RED BULL ED FRUTA DEL DRAGON 24 X 250 CC",
            "subcategory_id": 1054
        },
        {
            "code": 10109001,
            "name": "GINGER ALE PET 6X1.5LT",
            "subcategory_id": 1055
        },
        {
            "code": 10109011,
            "name": "PEPSI   6X1500 CC",
            "subcategory_id": 1055
        },
        {
            "code": 10109012,
            "name": "PEPSI ZERO 6 X 1500 CC",
            "subcategory_id": 1055
        },
        {
            "code": 10109013,
            "name": "KEM XTREME PET 6X1.5 LT",
            "subcategory_id": 1055
        },
        {
            "code": 10109015,
            "name": "AGUA TONICA PET 6X1.5 LT",
            "subcategory_id": 1055
        },
        {
            "code": 10110002,
            "name": "COCA COLA RETORN 10 UNI X 1 LT",
            "subcategory_id": 1056
        },
        {
            "code": 10110004,
            "name": "FANTA RETORNABLE 10 UNI X 1 LT",
            "subcategory_id": 1056
        },
        {
            "code": 10110005,
            "name": "SPRITE RETORNABLE 10 UNI X 1 LT",
            "subcategory_id": 1056
        },
        {
            "code": 10110012,
            "name": "COCA COLA S/AZUC RETORN 10 UNI  X 1 LT",
            "subcategory_id": 1056
        },
        {
            "code": 10111001,
            "name": "COCA COLA RETORN 12 UNI X 1.5 LT",
            "subcategory_id": 1057
        },
        {
            "code": 10111003,
            "name": "FANTA RETORNABLE 12 UNI X 1.5 LT",
            "subcategory_id": 1057
        },
        {
            "code": 10111006,
            "name": "SPRITE RETORNABLE 12 UNI X 1.5 LT",
            "subcategory_id": 1057
        },
        {
            "code": 10111020,
            "name": "BILZ PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111025,
            "name": "PAP PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111030,
            "name": "CRUSH PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111035,
            "name": "KEM PIÑA PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111040,
            "name": "LIMON SODA PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111045,
            "name": "SEVEN UP PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111050,
            "name": "CRUSH ZERO PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111055,
            "name": "BILZ ZERO PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111060,
            "name": "PAP ZERO PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111065,
            "name": "KEM ZERO PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10111070,
            "name": "PEPESI ZERO PET 6 X 1500 CC",
            "subcategory_id": 1057
        },
        {
            "code": 10112001,
            "name": "COCA COLA RETORN 8 UNI X 2 LT",
            "subcategory_id": 1058
        },
        {
            "code": 10112003,
            "name": "COCA COLA LIGHT 8 UNI X 2 LT",
            "subcategory_id": 1058
        },
        {
            "code": 10112006,
            "name": "COCA COLA S/AZUC RETORN 8 UNI X 2 LT",
            "subcategory_id": 1058
        },
        {
            "code": 10112009,
            "name": "FANTA RETORNABLE 8 UNI X 2 LT",
            "subcategory_id": 1058
        },
        {
            "code": 10112012,
            "name": "SPRITE RETORNABLE 8 UNI X 2 LT",
            "subcategory_id": 1058
        },
        {
            "code": 10113001,
            "name": "COCA COLA DESECHABLE 6 UNI X 2.5 LT",
            "subcategory_id": 1059
        },
        {
            "code": 10113003,
            "name": "COCA COLA LIGHT DESECHABLE 6UNI X 2.5 LT",
            "subcategory_id": 1059
        },
        {
            "code": 10113004,
            "name": "COCA COLA S/AZUC  DESECHA 6 UNI X 2.5 LT",
            "subcategory_id": 1059
        },
        {
            "code": 10113006,
            "name": "FANTA  DESECHABLE 6 UNI X 2.5 LT",
            "subcategory_id": 1059
        },
        {
            "code": 10113009,
            "name": "SPRITE  DESECHABLE 6 UNI X 2.5 LT",
            "subcategory_id": 1059
        },
        {
            "code": 10114001,
            "name": "COCA COLA RETORNABLE 6X3 LT",
            "subcategory_id": 1060
        },
        {
            "code": 10114006,
            "name": "FANTA RETORNABLE 6X3 LT",
            "subcategory_id": 1060
        },
        {
            "code": 10114009,
            "name": "SPRITE RETORNABLE 6X3 LT",
            "subcategory_id": 1060
        },
        {
            "code": 10114011,
            "name": "COCA COLA S/AZUC RETORN 6X3LT",
            "subcategory_id": 1060
        },
        {
            "code": 10114050,
            "name": "LIMON SODA  PET 6 X 3000 CC",
            "subcategory_id": 1060
        },
        {
            "code": 10114055,
            "name": "BILZ PET 6 X 3000 CC",
            "subcategory_id": 1060
        },
        {
            "code": 10114060,
            "name": "PAP PET 6 X 3000 CC",
            "subcategory_id": 1060
        },
        {
            "code": 10114065,
            "name": "KEM PIÑA PÉT 6 X 3000 CC",
            "subcategory_id": 1060
        },
        {
            "code": 10114070,
            "name": "PEPSI PET 6 X 3000 CC",
            "subcategory_id": 1060
        },
        {
            "code": 10117001,
            "name": "COCA COLA DESECHABLE 6 UNI X 1 LT",
            "subcategory_id": 1061
        },
        {
            "code": 10117003,
            "name": "COCA COLA LIGHT DESECHABLE 6 UNI X 1 LT",
            "subcategory_id": 1061
        },
        {
            "code": 10117006,
            "name": "COCA COLA S/AZUC DESECHABLE 6 UNI X 1 LT",
            "subcategory_id": 1061
        },
        {
            "code": 10117009,
            "name": "FANTA DESECHABLE 6 UNI X 1.100 LT",
            "subcategory_id": 1061
        },
        {
            "code": 10117012,
            "name": "SPRITE DESECHABLE 6 UNI X 1.100 LT",
            "subcategory_id": 1061
        },
        {
            "code": 10118001,
            "name": "COCA COLA DESECHABLE 6 UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118003,
            "name": "COCA COLA LIGHT DESECHABLE 6UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118006,
            "name": "COCA COLA S/AZUC DESECH 6UNI X 1.5LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118009,
            "name": "FANTA DESECHABLE 6 UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118010,
            "name": "SPRITE ZERO  DESECHABLE 6 UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118012,
            "name": "SPRITE DESECHABLE 6 UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118020,
            "name": "SCHWEPPES TONICA 6X1.5 LTS",
            "subcategory_id": 1062
        },
        {
            "code": 10118023,
            "name": "SCHWEPPES GINGER ALE 6X1.5 LTS",
            "subcategory_id": 1062
        },
        {
            "code": 10118115,
            "name": "AGUA TONICA PEC 6X1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10118120,
            "name": "NORDIC GINGER 6X1.5",
            "subcategory_id": 1062
        },
        {
            "code": 10118125,
            "name": "NORDIC TONIC 6X 1.5",
            "subcategory_id": 1062
        },
        {
            "code": 10118130,
            "name": "NORDIC GINGER ALE ZERO 6UNI X 1.5 LT",
            "subcategory_id": 1062
        },
        {
            "code": 10120001,
            "name": "COCA COLA DESECHABLE 6 UNI X 3 LT (154)",
            "subcategory_id": 1063
        },
        {
            "code": 10120003,
            "name": "FANTA DESECHABLE 6 UNI X 3 LT (567)",
            "subcategory_id": 1063
        },
        {
            "code": 10120006,
            "name": "SPRITE DESECHABLE 6 UNI X 3 LT (767)",
            "subcategory_id": 1063
        },
        {
            "code": 10120011,
            "name": "COCA S/AZUC DESECHABLE 6UNI X 3 LT (567)",
            "subcategory_id": 1063
        },
        {
            "code": 10120013,
            "name": "COCA LIGHT DESECHABLE 6 UNI X 3 LT",
            "subcategory_id": 1063
        },
        {
            "code": 10120014,
            "name": "NORDIC GINGER DESECH ALE   6X3 LTS",
            "subcategory_id": 1063
        },
        {
            "code": 10120100,
            "name": "TRIPACK 3 LITROS 2 COCA + 1 SPRITE",
            "subcategory_id": 1063
        },
        {
            "code": 10120150,
            "name": "TRIPACK 3 LITROS 2 COCA + 1 FANTA",
            "subcategory_id": 1063
        },
        {
            "code": 10121001,
            "name": "COCA COLA LATA 24 UNI X 350 CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121003,
            "name": "FANTA LATA 24 UNI X 350 CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121006,
            "name": "SPRITE LATA 24 UNI X 350 CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121009,
            "name": "COCA COLA LIGTH LATA 24X350CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121013,
            "name": "COCA COLA S/AZUCAR LATA 24X350 CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121015,
            "name": "SPRITE ZERO LATA 24 X 350CC",
            "subcategory_id": 1064
        },
        {
            "code": 10121020,
            "name": "NORDIC GINGER ALE LATA 24 X 350 CC",
            "subcategory_id": 1064
        },
        {
            "code": 10122001,
            "name": "COCA COLA LATA MINI 24 UNI X 220 CC",
            "subcategory_id": 1065
        },
        {
            "code": 10122002,
            "name": "COCA COLA ZERO LATA MINI  24X220",
            "subcategory_id": 1065
        },
        {
            "code": 10122003,
            "name": "COCA COLA LIGHT MINI 24 UNI X 220 CC",
            "subcategory_id": 1065
        },
        {
            "code": 10122004,
            "name": "SPRITE MINI 24 UNI X 220 CC",
            "subcategory_id": 1065
        },
        {
            "code": 10122006,
            "name": "FANTA LATA MINI 24 UNI X 220 CC",
            "subcategory_id": 1065
        },
        {
            "code": 10122007,
            "name": "NORDIC TONICA LATA 24X310",
            "subcategory_id": 1065
        },
        {
            "code": 10122008,
            "name": "NORDIC GINGER 24X310",
            "subcategory_id": 1065
        },
        {
            "code": 10122009,
            "name": "NORDIC GINGER ALE BOTELLA 12X266 CC",
            "subcategory_id": 1065
        },
        {
            "code": 10122016,
            "name": "NORDIC GIN ALE ZERO LATA 6 X 220CC",
            "subcategory_id": 1065
        },
        {
            "code": 10123015,
            "name": "MONSTER ENERGY LATA 24X473CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123020,
            "name": "MONSTER ENERGY RIPPER LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123025,
            "name": "MONSTER ENERGY LIGHT LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123030,
            "name": "MONSTER ENERGY ULTRA LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123035,
            "name": "MONSTER ENERGY SUNR LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123040,
            "name": "MONSTER ENERGY LCAR LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123045,
            "name": "MONSTER ENERGY ABSOL ZERO LATA  24X473CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123060,
            "name": "MONSTER ENERGY ULTRA GOLD LATA 24X473 CC",
            "subcategory_id": 1066
        },
        {
            "code": 10123065,
            "name": "MONSTER ENERGY ULTRA WATERMELON 24X473 C",
            "subcategory_id": 1066
        },
        {
            "code": 10124015,
            "name": "COCA COLA DESECH.24 UNI X 591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10124018,
            "name": "COCA COLA LIGHT DESECH.24 UN X 591 C",
            "subcategory_id": 1067
        },
        {
            "code": 10124021,
            "name": "FANTA DESECHABLE 24 UNI X 591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10124022,
            "name": "FANTA ZERO DESECHABLE 24 UNI X 591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10124024,
            "name": "SPRITE DESECHABLE 24 UNI X 591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10124025,
            "name": "SPRITE ZERO DESECHABLE 24 UNI X 591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10124027,
            "name": "COCA COLA S/AZUC 24X591 CC",
            "subcategory_id": 1067
        },
        {
            "code": 10125006,
            "name": "VITAL INDIVIDUAL C/GAS DESECH 12 X 600CC",
            "subcategory_id": 1068
        },
        {
            "code": 10125008,
            "name": "VITAL INDIVIDUAL S/GAS DESECH 12 X 600CC",
            "subcategory_id": 1068
        },
        {
            "code": 10125030,
            "name": "BENEDICTINO S/G 2X6.5 LTS",
            "subcategory_id": 1068
        },
        {
            "code": 10125035,
            "name": "BENEDICTINO C/GAS 6X500ML.",
            "subcategory_id": 1068
        },
        {
            "code": 10125040,
            "name": "BENEDECTINO S/GAS 6X500ML.",
            "subcategory_id": 1068
        },
        {
            "code": 10125045,
            "name": "BENEDICTINO S/GAS 6 X 1500 CC",
            "subcategory_id": 1068
        },
        {
            "code": 10125050,
            "name": "BENEDICTINO C/GAS 6X1500 CC",
            "subcategory_id": 1068
        },
        {
            "code": 10126006,
            "name": "NECTAR ANDINA DEL VALLE MANZANA 6X200CC",
            "subcategory_id": 1069
        },
        {
            "code": 10126011,
            "name": "NECTAR ANDINA DEL VALLE PIÑA 6X200CC",
            "subcategory_id": 1069
        },
        {
            "code": 10126016,
            "name": "NECTAR ANDINA DEL VALLE NARANJA 6X200CC",
            "subcategory_id": 1069
        },
        {
            "code": 10126021,
            "name": "NECTAR ANDINA DEL VALLE DURAZNO 6X200CC",
            "subcategory_id": 1069
        },
        {
            "code": 10126026,
            "name": "NECTAR ANDINA DEL VALLE FRUTLIGHT 6X200C",
            "subcategory_id": 1069
        },
        {
            "code": 10127001,
            "name": "NECTAR ANDINA DEL VALLE NARANJA 6X1500CC",
            "subcategory_id": 1070
        },
        {
            "code": 10127004,
            "name": "NECTAR ANDINA DEL VALLE PIÑA 6X1500CC",
            "subcategory_id": 1070
        },
        {
            "code": 10127008,
            "name": "NECTAR ANDINA DEL VALLE DURAZNO 6X1500CC",
            "subcategory_id": 1070
        },
        {
            "code": 10127012,
            "name": "NECTAR ANDINADEL VALLE DAMASCO 6X1500CC",
            "subcategory_id": 1070
        },
        {
            "code": 10127020,
            "name": "NECTAR ANDINA DEL VALLLE 6X300 CC",
            "subcategory_id": 1070
        },
        {
            "code": 10128005,
            "name": "SCORE MOJITO 24 X 500 CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128010,
            "name": "SCORE MEMO 24 X 500 CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128015,
            "name": "SCORE BLUE 24 X 500 CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128018,
            "name": "SCORE MANGO 24 X 500CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128020,
            "name": "SCORE  EDICION LIMITADA 24 X 500 CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128025,
            "name": "SCORE ENERGY DRINK GORILLA 24X500CC",
            "subcategory_id": 1071
        },
        {
            "code": 10128030,
            "name": "SCORE ENERGY GORILA 24X355CC",
            "subcategory_id": 1071
        },
        {
            "code": 10129001,
            "name": "AQUARIUS LIMONADA JENGIBRE 6X1600 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129005,
            "name": "AQUARIUS MANZANA 6X1600 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129010,
            "name": "AQUARIUS PERA 6X1600 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129015,
            "name": "AQUARIUS MANZANA LIGHT 6X500 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129020,
            "name": "AQUARIUS PERA LIGHT 6X500 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129025,
            "name": "AQUARIUS UVA LIGHT 6X500 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10129030,
            "name": "AQUARIUS LIMON LIGHT 6X500 CC",
            "subcategory_id": 1072
        },
        {
            "code": 10130030,
            "name": "POWERADE FROZEN BLAST 6X600 CC",
            "subcategory_id": 1073
        },
        {
            "code": 10130050,
            "name": "AGUA PUYEHUE CON GAS 6X1.5 LT",
            "subcategory_id": 1073
        },
        {
            "code": 10130060,
            "name": "AGUA PUYEHUE SIN GAS 6X1.5 LT",
            "subcategory_id": 1073
        },
        {
            "code": 10131020,
            "name": "BEBIDA IRONADE COOL BLUE  2.0  6X2 LT",
            "subcategory_id": 1074
        },
        {
            "code": 10131022,
            "name": " BEBIDA IRONADE FRUTOS TROPI 2.0  6X2 LT",
            "subcategory_id": 1074
        },
        {
            "code": 10131030,
            "name": " BEBIDA IRONADE NARANJA 2.0  6X2 LT",
            "subcategory_id": 1074
        },
        {
            "code": 10132001,
            "name": "BEACH COLA 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10132003,
            "name": "BEACH NARANJA 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10132005,
            "name": "BEACH PIÑA 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10132007,
            "name": "BEACH LIMA LIMON 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10132009,
            "name": "BEACH PAPAYA 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10132011,
            "name": "BEACH FRUTAL 6 X 2.25 LTS",
            "subcategory_id": 1075
        },
        {
            "code": 10133001,
            "name": "AGUA  PUYEHUE  CON GAS 6X1.5 LT",
            "subcategory_id": 1076
        },
        {
            "code": 10133003,
            "name": "AGUA  PUYEHUE SIN GAS 6X1.5 LT",
            "subcategory_id": 1076
        },
        {
            "code": 10133006,
            "name": "AGUA  PUYEHUE  LIGTH 6X1.5 LT",
            "subcategory_id": 1076
        },
        {
            "code": 10133020,
            "name": "AGUA PUYEHUE CON GAS DE VIDRIO 12X330 CC",
            "subcategory_id": 1076
        },
        {
            "code": 10133025,
            "name": "AGUA PUYEHUE SIN GAS DE VIDRIO 12X330 CC",
            "subcategory_id": 1076
        },
        {
            "code": 10133031,
            "name": "AGUA PUYEHUE CON GAS 12X500 CC",
            "subcategory_id": 1076
        },
        {
            "code": 10133033,
            "name": "AGUA  PUYEHUE SIN GAS 12X500 CC",
            "subcategory_id": 1076
        },
        {
            "code": 10133036,
            "name": "AGUA PUYEHUE LIGTH 12X500 CC",
            "subcategory_id": 1076
        },
        {
            "code": 10134005,
            "name": "CRISTAL BOTELLA  CANASTILLO 6X4 X 355 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134007,
            "name": "CRISTAL BOTELLA CERO 6X4 X 355 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134013,
            "name": "MALTA MORENITA LATA 6X4 X470C.C.",
            "subcategory_id": 1077
        },
        {
            "code": 10134015,
            "name": "CRISTAL LATA 6 X 4 X 470 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134017,
            "name": "ESCUDO  LATA 6X 4 X 470 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134018,
            "name": "ESCUDO SILVER LATA 6X4X470CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134020,
            "name": "CRISTAL LATA 2 X 12 X 470 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134022,
            "name": "ESCUDO LATA 2 X12 X 470 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134040,
            "name": "CRISTAL LATA CERO 6X4 X 355 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134045,
            "name": "ESCUDO LATA 6X4 X 350 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134048,
            "name": "CRISTAL LATA 6X4 X  350 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10134085,
            "name": "HEINEKEN  LATA 6X4 X 350 CC",
            "subcategory_id": 1077
        },
        {
            "code": 10135011,
            "name": "ESCUDO RETORNABLE  10 X 1.2  LTS",
            "subcategory_id": 1078
        },
        {
            "code": 10135013,
            "name": "CRISTAL RETORNABLE  10 X 1.2  LTS",
            "subcategory_id": 1078
        },
        {
            "code": 10135105,
            "name": "ROYAL RETORNABLE 12 X1 LT",
            "subcategory_id": 1078
        },
        {
            "code": 10135115,
            "name": "MALTA MORENITA 10X1.2 LT",
            "subcategory_id": 1078
        },
        {
            "code": 10136011,
            "name": "KUNSTMANN SIN ALCOHOL 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136012,
            "name": "KUNSTMAN TOROBAYO 4X6X330 BOTELLA",
            "subcategory_id": 1079
        },
        {
            "code": 10136013,
            "name": "KUNSTMANN BOCK 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136014,
            "name": "KUNSTMANN LAGER 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136015,
            "name": "KUNSTMANN MIEL 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136018,
            "name": "KUNSTMANN ARANDANO 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136019,
            "name": "KUNSTMANN TOROBAYO BOTELLA 12X500 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136020,
            "name": "KUNSTMANN TOROBAYO LATA 6X4X470 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136022,
            "name": "KUNSTMANN IPA 4 X 6 X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136025,
            "name": "KUNSTMANN GRAN TOROBAYO BOTELL 12X480CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136026,
            "name": "KUNSTMANTTOROBAYO 6X4 X330 BOTELLIN",
            "subcategory_id": 1079
        },
        {
            "code": 10136028,
            "name": "KUNSTMANN VALDIVIA PALE 6X4X330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136030,
            "name": "KUNSTMAN MIEL 6X4X330 BOT",
            "subcategory_id": 1079
        },
        {
            "code": 10136033,
            "name": "KUNSTMANN MIEL 12 X 500 BOTELLA",
            "subcategory_id": 1079
        },
        {
            "code": 10136034,
            "name": "KUNSTMANN ANWANDTER 12 X 500 BOTELLA",
            "subcategory_id": 1079
        },
        {
            "code": 10136045,
            "name": "AUSTRALCALAFATE 12 X 500CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136046,
            "name": "AUSTRAL CALAFATE 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136047,
            "name": "AUSTRAL NUEVA LAGER 4X6  X 330 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136049,
            "name": "AUSTRAL TORRES PAINE 12X500 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136054,
            "name": "AUSTRAL PATAGONA 4X6 330CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136055,
            "name": "AUSTRAL PATAG. RED LAGER LATA 6X4X470 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136056,
            "name": "AUSTRAL PATAG BLACK LAGER LATA 24X470 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136058,
            "name": "AUSTRAL PATAG HOPPY LAGER LATA 6X4X470CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136070,
            "name": "AUSTRAL PATAG.LOTUS LATA 6X4X470CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136120,
            "name": "HEINIKEN CERO CANASTILLO 4X6X350CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136135,
            "name": "HEINEKEN CERO LATA 6X4 X 470 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136146,
            "name": "MANGO STONE 6X4 LATA 350 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136147,
            "name": "LEMON STONES LATA 24 X 350 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136149,
            "name": "LEMON STONES DESECHABLE 6 X 1.5 LTS",
            "subcategory_id": 1079
        },
        {
            "code": 10136151,
            "name": "LEMON STONES MARACUYA  LATA 6X4 X 350 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136152,
            "name": "LEMON STONE 6X4 LATA 470 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136170,
            "name": "CERVEZA DOLBEK PAMPA ALE 12X330CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136175,
            "name": "CERVEZA DOLBEK MAQUI 12X330CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136203,
            "name": "AUSTRAL CALAFATE BOTELLA 12 X 500 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136207,
            "name": "DOLBEK MAQUI BOTELLA 12X500 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136211,
            "name": "KUNSTMAN VALDIVIA 12X500 CC",
            "subcategory_id": 1079
        },
        {
            "code": 10136216,
            "name": "ROYAL GUARD GOLDEN 6X4X330CC",
            "subcategory_id": 1079
        },
        {
            "code": 10137136,
            "name": "CERVEZA COORS LATA 12 X 710 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137201,
            "name": "SOL BOTELLIN 6X4 X330 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137205,
            "name": "COORS CANASTILLO 6X4 X 330 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137207,
            "name": "HEINEKEN BOTELLIN 6X4X330 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137210,
            "name": "DOLBEK MAQUI 12 X 500 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137213,
            "name": "ROYAL GUARD BOTELLIN 6X4X330 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137301,
            "name": "COORS LATA 6X4X470 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137305,
            "name": "HEINEKEN LATA 6X4X470 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137311,
            "name": "ROYAL GUARD LATA  6X4X470 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137315,
            "name": "BABARIA LATA 6X4X470 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137318,
            "name": "IMPERIAL LATA 6X4X470 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137401,
            "name": "SOL BOTELLA 12X710 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137405,
            "name": "HEINEKEN BOTELLA 12X650 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137408,
            "name": "ROYAL GUARD BOTELLA 12X650 CC",
            "subcategory_id": 1080
        },
        {
            "code": 10137415,
            "name": "IMPERIAL LATA 6X4X470",
            "subcategory_id": 1080
        },
        {
            "code": 10137501,
            "name": "LEMON MARACUYA LATA 6X4X350",
            "subcategory_id": 1080
        },
        {
            "code": 10140008,
            "name": "BECKER LATA 4X6 X473CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140013,
            "name": "BECKER CARTON LATA 12 X 350CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140022,
            "name": "CORONA EXTRA 4 X 6  X 330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140035,
            "name": "STELLA ARTOIS X12 660 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140039,
            "name": "STELLA ARTOIS BOTELLA 6X4X330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140040,
            "name": "CERV BUDWEISER 5° X12 1L",
            "subcategory_id": 1081
        },
        {
            "code": 10140042,
            "name": "BUDWEISER BOTELLA 5° 4X6X330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140047,
            "name": "BUDWEISER 5° 4X6 473CC LATA",
            "subcategory_id": 1081
        },
        {
            "code": 10140049,
            "name": "BUDWEISER LATA 12X710 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140060,
            "name": "CUSQUEÑA LATA 4 X 6 X 473CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140062,
            "name": "CUSQUEÑA  BOTELLA  4X6X330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140065,
            "name": "CUSQUEÑA  BOTELLA 12 X 620CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140070,
            "name": "QUILMES LATA 4X6 473 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140080,
            "name": "CERV BALTICA X12 X710",
            "subcategory_id": 1081
        },
        {
            "code": 10140101,
            "name": "CORONA PROMO 4X6X330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140105,
            "name": "STELLA ARTOIS BOT PROMO 4X6X330CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140109,
            "name": "CUSQUEÑA BOT PROMO 4X6X330 CC",
            "subcategory_id": 1081
        },
        {
            "code": 10140115,
            "name": "BUDWEISER LATA PROMO 12X710CC",
            "subcategory_id": 1081
        },
        {
            "code": 10150001,
            "name": "GATO CAJA TINTO 8X2 LT 11.5G (700564)",
            "subcategory_id": 1082
        },
        {
            "code": 10150003,
            "name": "GATO CAJA BLANCO 8X2 LT  11.5G(700563)",
            "subcategory_id": 1082
        },
        {
            "code": 10150004,
            "name": "GATO CAJA  MERLOT 8X2 LT. (700565)",
            "subcategory_id": 1082
        },
        {
            "code": 10150005,
            "name": "GATO CAJA CARMENERE 8 X 2LT (700566)",
            "subcategory_id": 1082
        },
        {
            "code": 10150006,
            "name": "GATO CAJA TINTO 8X1.5 LT  11.5G(700561)",
            "subcategory_id": 1082
        },
        {
            "code": 10150009,
            "name": "GATO CAJA BLANCO 8X1.5 LT 11.5G(700560)",
            "subcategory_id": 1082
        },
        {
            "code": 10150011,
            "name": "GATO CAJA MERLOT 8X1.5 LT (700562)",
            "subcategory_id": 1082
        },
        {
            "code": 10150012,
            "name": "GATO CAJA TINTO 12X1 LT  11.5G (700558)",
            "subcategory_id": 1082
        },
        {
            "code": 10150015,
            "name": "GATO CAJA BLANCO 12X1 LT 11.5G (700557)",
            "subcategory_id": 1082
        },
        {
            "code": 10150016,
            "name": "GATO CAJA  MERLOT 12X1 LT. (700559)",
            "subcategory_id": 1082
        },
        {
            "code": 10150018,
            "name": "GATO CAJA TINTO 12X500C.C 11.5 (700556)",
            "subcategory_id": 1082
        },
        {
            "code": 10150021,
            "name": "GATO CAJA BLANCO 12X500C.C. (700555)",
            "subcategory_id": 1082
        },
        {
            "code": 10150031,
            "name": "GATO BOTELLON TINTO 8X 1.5 LT (700039)",
            "subcategory_id": 1082
        },
        {
            "code": 10150032,
            "name": "GATO BOT. DULCE  DC(TTO) 8X1.5 LT.(7008",
            "subcategory_id": 1082
        },
        {
            "code": 10150034,
            "name": "GATO BOTELLON BLANCO 8X 1.5 LT (700040)",
            "subcategory_id": 1082
        },
        {
            "code": 10150035,
            "name": "GATO BOTELLON BCO DULCE 8X1.5LT(700524)",
            "subcategory_id": 1082
        },
        {
            "code": 10150036,
            "name": "GATO BOTELLON CARMENERE 8X1.5 LT(700271)",
            "subcategory_id": 1082
        },
        {
            "code": 10150037,
            "name": "GATO BOTELLON MERLOT 8X 1.5 LT. (700041)",
            "subcategory_id": 1082
        },
        {
            "code": 10150038,
            "name": "GATO BOT. DULCE ROSE 8X1500C.C.",
            "subcategory_id": 1082
        },
        {
            "code": 10150039,
            "name": "GATO BOTELLA TINTO 12X700 CC 12G (7680)",
            "subcategory_id": 1082
        },
        {
            "code": 10150040,
            "name": "GATO DULCE BOTELLA 12X750 CC(700808)",
            "subcategory_id": 1082
        },
        {
            "code": 10150042,
            "name": "GATO BLANCO BOTELLA 12X700 CC 13G (7686)",
            "subcategory_id": 1082
        },
        {
            "code": 10150045,
            "name": "GATO MERLOT BOTELLA 12X700 CC 13G (9021)",
            "subcategory_id": 1082
        },
        {
            "code": 10150046,
            "name": "GATO CARMENERE BOTELLA 12X700CC(700272)",
            "subcategory_id": 1082
        },
        {
            "code": 10150048,
            "name": "GATO PREM CAB. SAUV 12X700 C 13G(700452)",
            "subcategory_id": 1082
        },
        {
            "code": 10150051,
            "name": "GATO PREM CARME. 12X700 CC  13G(700455)",
            "subcategory_id": 1082
        },
        {
            "code": 10150054,
            "name": "GATO PREM MERLOT 12X700 CC   13G(700454)",
            "subcategory_id": 1082
        },
        {
            "code": 10150057,
            "name": "GATO PREM SAUV BLAN 12X700 CC 13G(700453",
            "subcategory_id": 1082
        },
        {
            "code": 10150058,
            "name": "GATO PREMIUN CAB SAUV 24X187 C.C(700229)",
            "subcategory_id": 1082
        },
        {
            "code": 10150059,
            "name": "GATO PREMIUN SAUV BLA 24X187 C.C(700230)",
            "subcategory_id": 1082
        },
        {
            "code": 10150061,
            "name": "GATO PREMIUN CAB SAUV 24X375 C.C(700450)",
            "subcategory_id": 1082
        },
        {
            "code": 10150063,
            "name": "GATO PEMIUN SAU BLAN 24X375 C.C(700449)",
            "subcategory_id": 1082
        },
        {
            "code": 10151001,
            "name": "SANTA HELENA TETRA TINTO 8X2 LT(700576)",
            "subcategory_id": 1083
        },
        {
            "code": 10151003,
            "name": "SANTA HELENA TETRA BLAN 8X2 LT(700575)",
            "subcategory_id": 1083
        },
        {
            "code": 10151005,
            "name": "PACK 4 S.H 2 LT.BLCO +4  GATO 2LT BCO",
            "subcategory_id": 1083
        },
        {
            "code": 10151006,
            "name": "SANTA HELENA TETRA TINT 8X1.5 LT(700574)",
            "subcategory_id": 1083
        },
        {
            "code": 10151009,
            "name": "SANTA HELENA TETRA BLAN 8X1.5 LT(700573)",
            "subcategory_id": 1083
        },
        {
            "code": 10151012,
            "name": "SANTA HELENA TETRA TINTO 12X LT (700572)",
            "subcategory_id": 1083
        },
        {
            "code": 10151015,
            "name": "SANTA HELENA TETRA BLA 12X1 LT (700571)",
            "subcategory_id": 1083
        },
        {
            "code": 10151022,
            "name": "SANTA HELENA TETRA TIN 12X500C.C.(700570",
            "subcategory_id": 1083
        },
        {
            "code": 10151023,
            "name": "SANTA HELENA TETRA BLA 12X500C.C.(700569",
            "subcategory_id": 1083
        },
        {
            "code": 10152002,
            "name": "SAN PEDRO EXPORT TINTO 8X1.5 LT(700042)",
            "subcategory_id": 1084
        },
        {
            "code": 10152003,
            "name": "SAN PEDRO EXPORT BOT BLA 8X1.5 L(7000043",
            "subcategory_id": 1084
        },
        {
            "code": 10152011,
            "name": "SAN PEDRO  EXPORT TINTO 12X700 C.C(7962)",
            "subcategory_id": 1084
        },
        {
            "code": 10152012,
            "name": "SAN PEDRO EXPORT BLAN 12X700 C.C.(7963)",
            "subcategory_id": 1084
        },
        {
            "code": 10153001,
            "name": "MISIONES VAR CAB/ SAUV. 700CCX12(7801)",
            "subcategory_id": 1085
        },
        {
            "code": 10153003,
            "name": "MISIONES VAR CARMENE 750CCX12 13G(7803)",
            "subcategory_id": 1085
        },
        {
            "code": 10153006,
            "name": "MISIONES VAR MERLOT  750CCX12 13G(7799)",
            "subcategory_id": 1085
        },
        {
            "code": 10153009,
            "name": "MISIONES VAR SAUV BLAN 12X700CC 13G(7788",
            "subcategory_id": 1085
        },
        {
            "code": 10153012,
            "name": "MISIONES VAR CHARDO 750CCX12 13G (7802)",
            "subcategory_id": 1085
        },
        {
            "code": 10153014,
            "name": "MISIONES VARIE CAB SAUV. 24X187 (700153)",
            "subcategory_id": 1085
        },
        {
            "code": 10153016,
            "name": "MISIONES VARIE SAUV BL 24X187 CC(700154)",
            "subcategory_id": 1085
        },
        {
            "code": 10153017,
            "name": "MISIONES RESERVA CARMENERE  12X375 C.C",
            "subcategory_id": 1085
        },
        {
            "code": 10153018,
            "name": "MISIONES VARIE CAB SAUV 24X375CC (700583",
            "subcategory_id": 1085
        },
        {
            "code": 10153019,
            "name": "MISIONES RESERVA  CAB. SAUV. 12X375 C.C",
            "subcategory_id": 1085
        },
        {
            "code": 10153020,
            "name": "MISIONES VARI SAUV BLAN 24X375CC(700584)",
            "subcategory_id": 1085
        },
        {
            "code": 10153021,
            "name": "MISIONES RES CABER SAUV 12X700CC  (7795)",
            "subcategory_id": 1085
        },
        {
            "code": 10153023,
            "name": "MISIONES RESERVA CUVEE 12X700 C.C.(7792)",
            "subcategory_id": 1085
        },
        {
            "code": 10153024,
            "name": "MISIONES RES CABER SYRAH 12X700CC (7797)",
            "subcategory_id": 1085
        },
        {
            "code": 10153027,
            "name": "MISIONES RES CARMENE 12X700 CC 13G(7798)",
            "subcategory_id": 1085
        },
        {
            "code": 10153030,
            "name": "MISIONES RES MERLOT 12X700 CC 13G (7790)",
            "subcategory_id": 1085
        },
        {
            "code": 10153033,
            "name": "MISIONES RES MALBEC 12X700CC 13G(700036)",
            "subcategory_id": 1085
        },
        {
            "code": 10153036,
            "name": "MISIONES RES SAUVI BCO 12X700CC 13(7789)",
            "subcategory_id": 1085
        },
        {
            "code": 10153039,
            "name": "MISIONES RES CHARDO 12X700CC 13G (7796)",
            "subcategory_id": 1085
        },
        {
            "code": 10153044,
            "name": "ESPUMANTE MISIONES BRUT 12X750CC(700375)",
            "subcategory_id": 1085
        },
        {
            "code": 10153047,
            "name": "ESPUMANTE MISIONES D/SEC 12X750C(700376)",
            "subcategory_id": 1085
        },
        {
            "code": 10153048,
            "name": "ESPUMANTE MISIONES MOSCATO 12X750(700608",
            "subcategory_id": 1085
        },
        {
            "code": 10153049,
            "name": "ESPUMANTE MISIONES ROSE 12X 750C(700609)",
            "subcategory_id": 1085
        },
        {
            "code": 10154006,
            "name": "LATE HARVEST CASTILLO 12X500CC (700456)",
            "subcategory_id": 1085
        },
        {
            "code": 10154010,
            "name": "LATE HARVET TARAPACA 12X500C.C(7825)",
            "subcategory_id": 1085
        },
        {
            "code": 10154015,
            "name": "CASTILLO  MOLINA RES MERLOT 12X750C(7254",
            "subcategory_id": 1085
        },
        {
            "code": 10154020,
            "name": "CASTILLO MOLINA RES CABER 12X700CC(7245)",
            "subcategory_id": 1085
        },
        {
            "code": 10154025,
            "name": "CASTILLO MOLINA RES CARME 12X750CC(7280)",
            "subcategory_id": 1085
        },
        {
            "code": 10154030,
            "name": "TARAPACA GRAN RESE CAV.SAUV 12X750(7845)",
            "subcategory_id": 1085
        },
        {
            "code": 10154035,
            "name": "TARAPACA RESERVA CABER.12 X 750C (70053)",
            "subcategory_id": 1085
        },
        {
            "code": 10154040,
            "name": "VINO MISION CABERNET G. RESERVA 6X750",
            "subcategory_id": 1085
        },
        {
            "code": 10154045,
            "name": "VINO MISION RED BLEND G. RESERVA 6X750",
            "subcategory_id": 1085
        },
        {
            "code": 10154048,
            "name": "VINO MISION CARMENERE 6X750C.C",
            "subcategory_id": 1085
        },
        {
            "code": 10154050,
            "name": "VINO 1865 CABER SAUVI 6X750 C.C(700326)",
            "subcategory_id": 1085
        },
        {
            "code": 10154055,
            "name": "VINO 1865 CARMENERE NAC. 6X750 C.C(7266)",
            "subcategory_id": 1085
        },
        {
            "code": 10154065,
            "name": "CASTILLO MOLINA CABER 24X375CC(700612)",
            "subcategory_id": 1085
        },
        {
            "code": 10155001,
            "name": "MANQUEHUE PIÑA 24X275 CC(700293)",
            "subcategory_id": 1086
        },
        {
            "code": 10155003,
            "name": "MANQUEHUE FRUTOS ROJOS 24X275 CC(700292)",
            "subcategory_id": 1086
        },
        {
            "code": 10155013,
            "name": "MANQUEHUE FRUTOS ROJOS 12X750 CC(700522)",
            "subcategory_id": 1086
        },
        {
            "code": 10155015,
            "name": "MANQUEHUE PIÑA 12X750CC (700521)",
            "subcategory_id": 1086
        },
        {
            "code": 10155019,
            "name": "MANQ. COOLER F. ROJOS 8X1.5 LTS.(700568)",
            "subcategory_id": 1086
        },
        {
            "code": 10155020,
            "name": "MANQ. COOLER PIÑA 8X1500 CC.(700567)",
            "subcategory_id": 1086
        },
        {
            "code": 10155021,
            "name": "MANQUEHUITO GUARANA LATA X 24(700304)",
            "subcategory_id": 1086
        },
        {
            "code": 10155022,
            "name": "MANQUEHUITO PIÑA LATA 24X355 C.C(450208)",
            "subcategory_id": 1086
        },
        {
            "code": 10155025,
            "name": "ESP VIÑA MAR DEMI 6X750CC (700409",
            "subcategory_id": 1086
        },
        {
            "code": 10155026,
            "name": "ESP. VIÑA MAR MOSCATO 6X750C.C",
            "subcategory_id": 1086
        },
        {
            "code": 10155027,
            "name": "ESP. VIÑA  MAR EX/ BRUT 6X750(700218)",
            "subcategory_id": 1086
        },
        {
            "code": 10155028,
            "name": "ESP. VIÑA MAR BRUT 6X750CC (700004)",
            "subcategory_id": 1086
        },
        {
            "code": 10155029,
            "name": "ESP. VIÑA MAR UNIQ BRUT 6X750CC(700309)",
            "subcategory_id": 1086
        },
        {
            "code": 10155032,
            "name": "ESP.VIÑA MAR ROSE 6X750CC  (700219",
            "subcategory_id": 1086
        },
        {
            "code": 10155035,
            "name": "ESPUM. ICE DULCE V/ MAR 6X750 C.(8700397",
            "subcategory_id": 1086
        },
        {
            "code": 10155050,
            "name": "ESP.VIÑA MAR BRUT 12 X 375 CC(700018)",
            "subcategory_id": 1086
        },
        {
            "code": 10155055,
            "name": "ESP. MISION  BRUT LATA 24 X 250 CC(",
            "subcategory_id": 1086
        },
        {
            "code": 10155060,
            "name": "ESP. MISSIONES ROSE LATA 24 X 250 CC",
            "subcategory_id": 1086
        },
        {
            "code": 10160001,
            "name": "TOCORNAL TINTO 6X2 LT  11.5G",
            "subcategory_id": 1087
        },
        {
            "code": 10160003,
            "name": "TOCORNAL BLANCO 6X2 LT 11.5G",
            "subcategory_id": 1087
        },
        {
            "code": 10160005,
            "name": "TOCORNAL CABERNET SYRAH 6X2 LTS",
            "subcategory_id": 1087
        },
        {
            "code": 10160006,
            "name": "TOCORNAL TINTO 8X1.5 LT  11.5º",
            "subcategory_id": 1087
        },
        {
            "code": 10160009,
            "name": "TOCORNAL BLANCO 8X1.5 LT  11.5º",
            "subcategory_id": 1087
        },
        {
            "code": 10160012,
            "name": "TOCORNAL TINTO 12X1 LT  11.5º",
            "subcategory_id": 1087
        },
        {
            "code": 10160015,
            "name": "TOCORNAL BLANCO 12X1 LT  11.5G",
            "subcategory_id": 1087
        },
        {
            "code": 10160018,
            "name": "TOCORNAL TINTO X5 LT  11.5G",
            "subcategory_id": 1087
        },
        {
            "code": 10160021,
            "name": "TOCORNAL BLANCO X5 LT  11.5G",
            "subcategory_id": 1087
        },
        {
            "code": 10160030,
            "name": "EXPORTACION BLANCO BOT 6X1.5 LT",
            "subcategory_id": 1087
        },
        {
            "code": 10160031,
            "name": "EXPORTACION TINTO BOT 6X1.5 LT 11º",
            "subcategory_id": 1087
        },
        {
            "code": 10160033,
            "name": "EXPORT SELECTO CABERNET  6X1.5 LT 12.5",
            "subcategory_id": 1087
        },
        {
            "code": 10160036,
            "name": "EXPORT SELECTO  CARMENERE  6X1.5 LT 11º",
            "subcategory_id": 1087
        },
        {
            "code": 10160039,
            "name": "EXPORT SELECTO  MERLOT 6X1.5 LT 11º",
            "subcategory_id": 1087
        },
        {
            "code": 10160042,
            "name": "EXPORT SELECT SUAVIGNON BLANC 6X1500 CC",
            "subcategory_id": 1087
        },
        {
            "code": 10160051,
            "name": "EXPORTACION TINTO 12X700 CC",
            "subcategory_id": 1087
        },
        {
            "code": 10160055,
            "name": "EXPORTACION BLANCO 12X700",
            "subcategory_id": 1087
        },
        {
            "code": 10160060,
            "name": "EXPORTACION TETRA TINTO 6X2 LTS",
            "subcategory_id": 1087
        },
        {
            "code": 10160065,
            "name": "EXPORTACION TETRA BLANCO 6X2 LTS",
            "subcategory_id": 1087
        },
        {
            "code": 10160099,
            "name": "VINO DULCE SAN BLAS 12X750CC",
            "subcategory_id": 1087
        },
        {
            "code": 10161001,
            "name": "CLOS DE PIRQUE CABERNET SAUVIG  6X2 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161003,
            "name": "CLOS DE PIRQUE BLANCO 6X2 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161006,
            "name": "CLOS DE PIRQUE MERLOT 6X2 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161008,
            "name": "CLOS DE PIRQUE CARMENERE 6X2LT.",
            "subcategory_id": 1088
        },
        {
            "code": 10161011,
            "name": "CLOS DE PIRQUE CABERNET 8X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161013,
            "name": "CLOS DE PIRQUE BLANCO 8X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161016,
            "name": "CLOS DE PIRQUE MERLOT 8X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161018,
            "name": "CLOS DE PIRQUE CARMENERE 8X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161021,
            "name": "CLOS DE PIRQUE CABERNET 12X1 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161023,
            "name": "CLOS DE PIRQUE BLANCO 12X1 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161026,
            "name": "CLOS DE PIRQUE MERLOT 12X1 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161029,
            "name": "CLOS DE PIRQUE CABERNET 16X500CC",
            "subcategory_id": 1088
        },
        {
            "code": 10161039,
            "name": "CLOS BOTELLON CABERNET SYRAH 6 X 1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161041,
            "name": "CLOS BOTELLON CABERNET SAUVIG  6X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161043,
            "name": "CLOS BOTELLON CARMENERE 6X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161045,
            "name": "CLOS BOTELLON MERLOT 6X1.5  LT",
            "subcategory_id": 1088
        },
        {
            "code": 10161048,
            "name": "CLOS BOTELLON  SAUVIG BLANC  6X1.5 LT",
            "subcategory_id": 1088
        },
        {
            "code": 10162001,
            "name": "PISCO MALPASO ESPECIAL 35GL 12X750 ML",
            "subcategory_id": 1089
        },
        {
            "code": 10162004,
            "name": "PISCO MALPASO RESERVA 40GL 6X750ML",
            "subcategory_id": 1089
        },
        {
            "code": 10162009,
            "name": "PISCO MAL PASO PEDRO JIMENEZ 6X 750 CC",
            "subcategory_id": 1089
        },
        {
            "code": 10162010,
            "name": "PISCO DIABLO ESPECIAL 35° X6U",
            "subcategory_id": 1089
        },
        {
            "code": 10162090,
            "name": "WHISKY THE GUILIGANS X6U",
            "subcategory_id": 1089
        },
        {
            "code": 10163023,
            "name": "FRESSCO FRUTOS ROJOS 8X1.5 LT 8º",
            "subcategory_id": 1090
        },
        {
            "code": 10163029,
            "name": "FRESSCO PIÑA 8X1.5 LT 8º",
            "subcategory_id": 1090
        },
        {
            "code": 10165001,
            "name": "EMILIANA VARIET CABERNET 12X700 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165003,
            "name": "EMILIANA VARIET MERLOT 12X700 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165005,
            "name": "EMILIANA VARIET CARMENERE 12X700 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165006,
            "name": "EMILIANA VARIET SAUVIÑOG BLANC 12X700 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165007,
            "name": "EMILIANA VARIET CHARDONNAY 12X700 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165008,
            "name": "VINO FRONTERA CAB.SAUV 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165009,
            "name": "VINO FRONTERA CARMERE 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165010,
            "name": "VINO FRONTERA SAUV.BLANC 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165011,
            "name": "EMILIANA VARIET CABERT SAUV 24X375CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165012,
            "name": "EMILIANA VARIET SAUV.BLANC 24X375CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165019,
            "name": "EMILIANA VARIETAL TINTO 24X187 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165021,
            "name": "EMILIANA VARIETAL BLANCO 24X187 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165030,
            "name": "EMILIANA RESERVA CABERNET 12X700",
            "subcategory_id": 1091
        },
        {
            "code": 10165032,
            "name": "EMILIANA RESERVA MERLOT 12X700",
            "subcategory_id": 1091
        },
        {
            "code": 10165034,
            "name": "EMILIANA RESERVA CARMENERE 12X700",
            "subcategory_id": 1091
        },
        {
            "code": 10165036,
            "name": "EMILIANA RESERVA SAUVIGNON BLANC 12X700",
            "subcategory_id": 1091
        },
        {
            "code": 10165041,
            "name": "EMILIANA RESERVA CHARDONAY 12X700",
            "subcategory_id": 1091
        },
        {
            "code": 10165052,
            "name": "CASILLERO CABERNET 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165053,
            "name": "CASILLERO SAUV BLANC 12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165055,
            "name": "CASILLERO CARMENERE 12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165057,
            "name": "CASILLERO MERLOT 12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165059,
            "name": "CASILLERO CHARDONNAY 12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165060,
            "name": "CASILLERO RESV PRIV CABERNET  12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165061,
            "name": "CASILLERO RESV PRIV CARMENERE 12X750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165063,
            "name": "CASILLERO RES DEVILS COLLECTION 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165065,
            "name": "CASILLERO DEL DIABLO CABERNET BOT 3 LTS",
            "subcategory_id": 1091
        },
        {
            "code": 10165067,
            "name": "CASILLERO DIABLO DARK RED 2020 12X750",
            "subcategory_id": 1091
        },
        {
            "code": 10165069,
            "name": "CASILLERO DIABLO BLACK C. SAUV. 12X750",
            "subcategory_id": 1091
        },
        {
            "code": 10165075,
            "name": "CASILLERO DIABLO DEEP BLUE CARM 12 X 750",
            "subcategory_id": 1091
        },
        {
            "code": 10165090,
            "name": "ESPUMOSO SUBERCASEAUX BRUT 12X750",
            "subcategory_id": 1091
        },
        {
            "code": 10165093,
            "name": "ESPUMOSO SUBERCASEAUX DEMISEC 12X750",
            "subcategory_id": 1091
        },
        {
            "code": 10165095,
            "name": "ESPUMOSO SUBERCASEAUX MOSCATO 12X750",
            "subcategory_id": 1091
        },
        {
            "code": 10165150,
            "name": "MARQUES DE CASA CONCHA CAB SAUV 12X750CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165200,
            "name": "CERVEZA KROSS K44  BOT. 6X710.C.C",
            "subcategory_id": 1091
        },
        {
            "code": 10165250,
            "name": "LATE HARVEST ROSE 2021 12 X 375 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165255,
            "name": "LATE HARVEST SAUVIGNON BLANC 12 X 375 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10165300,
            "name": "VINO PALO ALTO RESERVA CAB/SAUV 12X750 C",
            "subcategory_id": 1091
        },
        {
            "code": 10165305,
            "name": "VINO PALO ALTO RES MERLOT 12 X 750 CC",
            "subcategory_id": 1091
        },
        {
            "code": 10167041,
            "name": "GRAN 120 BOT CABER.SAUV 6X1.5 LT 11.5 G",
            "subcategory_id": 1092
        },
        {
            "code": 10167043,
            "name": "GRAN 120 BOT BLANCO SAUV6X1.5 LT 11.5 G",
            "subcategory_id": 1092
        },
        {
            "code": 10167044,
            "name": "GRAN 120 EDIC.SYRAH CABERNET 6X1.5",
            "subcategory_id": 1092
        },
        {
            "code": 10167045,
            "name": "GRAN 120 EDIC.CABER. CARMEN. 6X1.5",
            "subcategory_id": 1092
        },
        {
            "code": 10167047,
            "name": "GRAN 120 CARMENERE 6X1.5 LT.",
            "subcategory_id": 1092
        },
        {
            "code": 10167049,
            "name": "GRAN 120 MERLOT 6X1.5 LT.",
            "subcategory_id": 1092
        },
        {
            "code": 10167051,
            "name": "GRAN 120 CS 12X700 CC 11.5 G",
            "subcategory_id": 1092
        },
        {
            "code": 10167053,
            "name": "GRAN 120 SAUV BLANC 12X700 CC 11.5 G",
            "subcategory_id": 1092
        },
        {
            "code": 10167054,
            "name": "GRAN 120 EDIC. CAB.SAUVI CARM 12X700 CC",
            "subcategory_id": 1092
        },
        {
            "code": 10167055,
            "name": "GRAN 120 EDIC.MERLOT CABER SAUV12X700 CC",
            "subcategory_id": 1092
        },
        {
            "code": 10167056,
            "name": "GRAN 120 EDIC. SYRAH CAB SAUV 12X700 CC",
            "subcategory_id": 1092
        },
        {
            "code": 10167100,
            "name": "GRAN 120 CABERNET SAUVIGNON  6 X 2 LTS",
            "subcategory_id": 1092
        },
        {
            "code": 10167110,
            "name": "GRAN 120 CARMENERE 6 X 2 LTS",
            "subcategory_id": 1092
        },
        {
            "code": 10167120,
            "name": "GRAN 120 MERLOT 6 X 2 LTS",
            "subcategory_id": 1092
        },
        {
            "code": 10167130,
            "name": "GRAN 120 CABERNET S. 24X375 C.C",
            "subcategory_id": 1092
        },
        {
            "code": 10168001,
            "name": "BODEGA UNO TETRA TINTO 8X2 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168003,
            "name": "BODEGA UNO TETRA BLANCO 8X2 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168011,
            "name": "BODEGA UNO TETRA TINTO 8X1.5 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168013,
            "name": "BODEGA UNO TETRA BLANCO 8X1.5 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168021,
            "name": "BODEGA UNO TETRA TINTO 12X1 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168023,
            "name": "BODEGA UNO TETRA BLANCO 12X1 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168025,
            "name": "BODEGA UNO TETRA TINTO 24X500 CC 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168027,
            "name": "BODEGA UNO TETRA BLANCO 24X500 CC 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168031,
            "name": "BODEGA PET TINTO 1X5 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168033,
            "name": "BODEGA PET BLANCO 1X5 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168051,
            "name": "HERMANOS CARRERA TETRA TINTO 8X2 L 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168053,
            "name": "HERMANOS CARRERA TETRA BCO 8X2 L 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168061,
            "name": "HERMANOS CARRERA TETRA TTO 12X1 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10168063,
            "name": "HERMANOS CARRERA TETRA BCO 12X1 LT 11.5º",
            "subcategory_id": 1093
        },
        {
            "code": 10169001,
            "name": "120 RESERVA ESP.CABERNET SAUV 12X750 CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169003,
            "name": "120 RESERVA ESP CARMENERE 12X750CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169006,
            "name": "120 RESERVA ESP MERLOT 12X750CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169009,
            "name": "120 RESERVA ESP SAUV BLAN 12X750CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169012,
            "name": "120 RESERVA ESP CHARDONEY 12X750CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169014,
            "name": "120 RESERVA ESP SYRA 12X750CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169031,
            "name": "3 MEDALLAS TINTO 12X700 CC 11.5º",
            "subcategory_id": 1094
        },
        {
            "code": 10169033,
            "name": "3 MEDALLAS BLANCO 12X700 CC 11.5º",
            "subcategory_id": 1094
        },
        {
            "code": 10169051,
            "name": "MEDALLA REAL CABERNET SAUV 12X700CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169053,
            "name": "MEDALLA REAL CARMENERE 12X700CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169056,
            "name": "MEDALLA REAL MERLOT 12X700 CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169059,
            "name": "MEDALLA REAL SAUVIÑOG BLAN 12X700 CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169062,
            "name": "MEDALLA REAL SYRAH 12X700 CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169070,
            "name": "CARMEN GRAN RESERVA CAB SUVIG 12X750",
            "subcategory_id": 1094
        },
        {
            "code": 10169072,
            "name": "CARMEN GRAN RESERVA GDE VIDUR 12 X 750 C",
            "subcategory_id": 1094
        },
        {
            "code": 10169082,
            "name": "PACK 120 RVA ESPE CABERNET SAUV 6X187CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169085,
            "name": "PACK 120  RVA ESPE SAUV BLANCO 6X187CC",
            "subcategory_id": 1094
        },
        {
            "code": 10169089,
            "name": "PACK 120 RES. ESP. BLANCO 6X4X 187 C.C",
            "subcategory_id": 1094
        },
        {
            "code": 10169090,
            "name": "PACK  120 RES. ESP. TINTO 6X4X187 C.C",
            "subcategory_id": 1094
        },
        {
            "code": 10170001,
            "name": "120 TRES MEDALLAS VARIETAL BLANCO 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170002,
            "name": "120 TRES MEDALLAS VAR CARMENERE 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170003,
            "name": "120 TRES MEDALLAS VAR CABERNET 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170004,
            "name": "120 TRES MEDALLAS VAR CHARDONNAY 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170005,
            "name": "120 TRES MEDALLAS VAR MERLOT 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170006,
            "name": "120 TRES MEDALLAS VAR CAB SAUV 24X375",
            "subcategory_id": 1095
        },
        {
            "code": 10170009,
            "name": "120 TRES MEDALLAS VAR TINTO 24X187 CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170011,
            "name": "CARMEN MARGAUX CAB SAUV 12X700 CC 11.5·",
            "subcategory_id": 1095
        },
        {
            "code": 10170012,
            "name": "CARMEN MERLOT 12X700 CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170013,
            "name": "CARMEN CARMENERE 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170014,
            "name": "CARMEN CHARDONNAY 12X700",
            "subcategory_id": 1095
        },
        {
            "code": 10170015,
            "name": "CARMEN RHIN 12X 700CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170019,
            "name": "120 TRES MEDALLAS TINTO 12X700CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170020,
            "name": "120 TRES MEDALLAS MERLOT 12X700CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170022,
            "name": "120 TRES MEDALLAS SAUV BLANCO 12X700CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170024,
            "name": "120 TRES MEDALLAS CARMENERE 12X700CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170053,
            "name": "CARMEN MARGAUX 24X187 CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170055,
            "name": "CARMEN RHIN 24X187 CC 12.5°",
            "subcategory_id": 1095
        },
        {
            "code": 10170063,
            "name": "CARMEN MARGAUX 24X375 CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170065,
            "name": "CARMEN MARGAUX 12X700CC 13°",
            "subcategory_id": 1095
        },
        {
            "code": 10170075,
            "name": "SECRET RVA SELEC CABERNET 12X750CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170080,
            "name": "SECRET RVA SELEC CARMENERE 12X750CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170085,
            "name": "SECRET RVA SELEC MERLOT 12X750CC",
            "subcategory_id": 1095
        },
        {
            "code": 10170090,
            "name": "CARMEN INSIGNE CABERNET SAUV.12X750C 13°",
            "subcategory_id": 1095
        },
        {
            "code": 10170200,
            "name": "TIERRA ANDINA CLASICO CABE. SAUV 12X750C",
            "subcategory_id": 1095
        },
        {
            "code": 10171001,
            "name": "LOMAS DE CAUQUENES TETRA TTO 12X1 LT 11º",
            "subcategory_id": 1096
        },
        {
            "code": 10171003,
            "name": "LOMAS DE CAUQUENES TETRA BCO 12X1 LT 11º",
            "subcategory_id": 1096
        },
        {
            "code": 10171025,
            "name": "LOMAS DE CAUQUENES CABERNET BOT 6X1.5LT",
            "subcategory_id": 1096
        },
        {
            "code": 10171027,
            "name": "LOMAS DE CAUQUENES BOT TTO 8X1.5 LT 11º",
            "subcategory_id": 1096
        },
        {
            "code": 10171029,
            "name": "LOMAS DE CAUQUENES BOT BCO 8X1.5 LT 11º",
            "subcategory_id": 1096
        },
        {
            "code": 10172001,
            "name": "UNDURRAGA PINOT MERLOT 12X750CC",
            "subcategory_id": 1097
        },
        {
            "code": 10172005,
            "name": "UNDURRAGA PINOT CABER/SAUVIGNON 12X750CC",
            "subcategory_id": 1097
        },
        {
            "code": 10172006,
            "name": "UNDURRAGA PINOT CARMENERE 12X750CC",
            "subcategory_id": 1097
        },
        {
            "code": 10172010,
            "name": "UNDURRAGA RIHN 12X750 CC",
            "subcategory_id": 1097
        },
        {
            "code": 10173001,
            "name": "CHAMPAÑA DEMI SEC ENCOMENDERO 12X700 11º",
            "subcategory_id": 1098
        },
        {
            "code": 10173003,
            "name": "CHAMPAÑA PIÑA ENCOMENDEROS 12X700 CC 8º",
            "subcategory_id": 1098
        },
        {
            "code": 10173021,
            "name": "ENCOMENDEROS BOTELLON BLANCO 6X1.5LT",
            "subcategory_id": 1098
        },
        {
            "code": 10173023,
            "name": "ENCOMENDEROS BOTELLON TINTO 6X1.5 LTS",
            "subcategory_id": 1098
        },
        {
            "code": 10173025,
            "name": "LOMAS DE CAYUMANQUI BLANCO 5LTS 11.5G",
            "subcategory_id": 1098
        },
        {
            "code": 10173026,
            "name": "LOMAS DE CAYUMANQUI TINTO 5LTS 11.5G",
            "subcategory_id": 1098
        },
        {
            "code": 10175011,
            "name": "CHAMPAÑA DEMI SEC STA. CAROLINA 12X700 C",
            "subcategory_id": 1099
        },
        {
            "code": 10175012,
            "name": "1 ESTRELLA CABERNET 6X1.5 LT 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175013,
            "name": "PONCHE DE PIÑA STA CAROLINA 12X700 C 11º",
            "subcategory_id": 1099
        },
        {
            "code": 10175015,
            "name": "1 ESTRELLA MERLOT 6X1.5 LT 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175018,
            "name": "1 ESTRELLA SAUVIÑOG BLAC 6X1.5 LT 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175031,
            "name": "1 ESTRELLA CABERNET 12X700 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175033,
            "name": "1 ESTRELLA MERLOT 12X700 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175036,
            "name": "1 ESTRELLA SAUVIÑOG BLANC 12X700 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175041,
            "name": "1 ESTRELLA CABERNET SAUV  24X375 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175043,
            "name": "1 ESTRELLA SAUVIÑOG BLANC  24X375 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175046,
            "name": "1 ESTRELLA SAUVIÑOG BLANC  24X187 CC 13º",
            "subcategory_id": 1099
        },
        {
            "code": 10175061,
            "name": "3 ESTRELLA CABERNET 12X750",
            "subcategory_id": 1099
        },
        {
            "code": 10175063,
            "name": "3 ESTRELLA MERLOT 12X700",
            "subcategory_id": 1099
        },
        {
            "code": 10175066,
            "name": "3 ESTRELLA CARMENERE 12X700",
            "subcategory_id": 1099
        },
        {
            "code": 10175069,
            "name": "3 ESTRELLA SAUVIÑOG BLAN 12X700",
            "subcategory_id": 1099
        },
        {
            "code": 10175071,
            "name": "3 ESTRELLA CHARDONEY 12X700",
            "subcategory_id": 1099
        },
        {
            "code": 10175076,
            "name": "3 ESTRELLA CABERNET 24X375 CC",
            "subcategory_id": 1099
        },
        {
            "code": 10175079,
            "name": "3 ESTRELLA SAUVIÑOG BLAN 24X375",
            "subcategory_id": 1099
        },
        {
            "code": 10175082,
            "name": "3 ESTRELLA CABERNET 24X187",
            "subcategory_id": 1099
        },
        {
            "code": 10175085,
            "name": "3 ESTRELLA SAUVIÑOG BLAN 24X187 CC 13.5º",
            "subcategory_id": 1099
        },
        {
            "code": 10175091,
            "name": "ESTRELLA ORO CABERNET 12X700",
            "subcategory_id": 1099
        },
        {
            "code": 10175093,
            "name": "ESTRELLA ORO CABERNET CILINDRO X1 CC 14º",
            "subcategory_id": 1099
        },
        {
            "code": 10175096,
            "name": "BARRICA CABERNET 12X700 CC 14.5º",
            "subcategory_id": 1099
        },
        {
            "code": 10175099,
            "name": "BARRICA CARMENERE 12X700 CC 14.5º",
            "subcategory_id": 1099
        },
        {
            "code": 10175856,
            "name": "VINO PLATA CABERNT. SAUV. SZ 13° 12X750",
            "subcategory_id": 1099
        },
        {
            "code": 10178056,
            "name": "PONCHE DE PIÑA CEPAS DE MAICA 5 LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178059,
            "name": "PONCHE DE DURAZNO CEPAS DE MAICA 5 LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178060,
            "name": "VINO CEPAS DE MAICA BOT. TTO 6X1500CC",
            "subcategory_id": 1100
        },
        {
            "code": 10178061,
            "name": "VINO CEPAS DE MAICA BCO 6X1500CC",
            "subcategory_id": 1100
        },
        {
            "code": 10178065,
            "name": "VINO CEPAS DE MAICA TINTO BOT 11  X 1LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178069,
            "name": "VINO CEPAS DE MAICA TINTO BOT 12 X 1LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178070,
            "name": "VINO CEPAS DE MAICA TINTO X 5 LT.",
            "subcategory_id": 1100
        },
        {
            "code": 10178071,
            "name": "VINO CEPAS DE MAICA BLANCO X 5LT.",
            "subcategory_id": 1100
        },
        {
            "code": 10178072,
            "name": "VINO CEPAS DE MAICA BLANCO BOT 12 X 1 LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178075,
            "name": "VINO PIPEÑO BLCO CERRO COLORADO X 5LT.",
            "subcategory_id": 1100
        },
        {
            "code": 10178079,
            "name": "VINO PIPEÑO BOT CERRO COLORADO 8 X 2 LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178085,
            "name": "GRANADINA KLAASSEN 12X750 CC",
            "subcategory_id": 1100
        },
        {
            "code": 10178090,
            "name": "VINO TINTO BOT PRIMERA PARRA 6X1.5 CC",
            "subcategory_id": 1100
        },
        {
            "code": 10178100,
            "name": "VINO CANTOS DEL VIÑEDO CARMENERE 6X1.5LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178110,
            "name": "VINO CANTOS DEL VIÑEDO MERLOT 6X1.5LT",
            "subcategory_id": 1100
        },
        {
            "code": 10178120,
            "name": "VINO CANTOS DEL VIÑEDO CABERNET 6X1.5LT",
            "subcategory_id": 1100
        },
        {
            "code": 10180001,
            "name": "VINO GROSSO TINTO 8 X 1.5LT",
            "subcategory_id": 1101
        },
        {
            "code": 10180003,
            "name": "VINO GROSSO BLANCO 8 X 1.5LT",
            "subcategory_id": 1101
        },
        {
            "code": 10180005,
            "name": "VINO GROSSO DURAZNO 8 X 1.5LT",
            "subcategory_id": 1101
        },
        {
            "code": 10180007,
            "name": "VINO GROSSO FRUTILLA 8 X 1.5LT",
            "subcategory_id": 1101
        },
        {
            "code": 10180009,
            "name": "VINO GROSSO PINA 8 X 1.5LT",
            "subcategory_id": 1101
        },
        {
            "code": 10181001,
            "name": "MIGUEL TORRES GR RESERVA CABERNET 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181005,
            "name": "MIGUEL TORRES GR RESERVA MERLOT 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181009,
            "name": "MIGUEL TORRES GR RESERVA CARMENERE 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181012,
            "name": "MIGUEL T. ORGANIC G R CABERNET 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181015,
            "name": "MIGUEL T. ORGANIC G R MERLOT 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181018,
            "name": "MIGUEL T. ORGANICO GR CARMENERE 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181021,
            "name": "LAS MULAS ORGANICO RES CABERNET 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181025,
            "name": "LAS MULAS ORGANICO RES MERLOT 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181028,
            "name": "LAS MULAS ORGANICO RES CARMENERE 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181031,
            "name": "SANTA DIGNA GRAN RES CABERNET 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181035,
            "name": "SANTA DIGNA GRAN RES MERLOT 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10181038,
            "name": "SANTA DIGNA GRAN RES CARMENERE 6X750",
            "subcategory_id": 1102
        },
        {
            "code": 10182001,
            "name": "PISCO GOBERNADOR ESPECIAL 35 6X750",
            "subcategory_id": 1103
        },
        {
            "code": 10182005,
            "name": "PISCO GOBERNADOR RESERVA 40  6X750",
            "subcategory_id": 1103
        },
        {
            "code": 10182007,
            "name": "TEQUILLA SIERRA SILVER 6X750",
            "subcategory_id": 1103
        },
        {
            "code": 10182009,
            "name": "TEQUILLA SIERRA REPOSADO 6X750",
            "subcategory_id": 1103
        },
        {
            "code": 10184001,
            "name": "CASA SILVA GRAN TERROIR CABERNET 6X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184011,
            "name": "CASA S. TERROIR DE FAMILIA MERLOT 6X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184021,
            "name": "CASA SILVA COLECCION CARMENERE 6X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184025,
            "name": "CASA SILVA RESERVA CUVEE CABERNET12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184027,
            "name": "CASA SILVA RESERVA CUVEE CARMENERE12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184031,
            "name": "DOÑA DOMINGA RES FAMILIA CABERNET 12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184035,
            "name": "DOÑA DOMINGA RES FAMILIA MERLOT 12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184041,
            "name": "DOÑA DOMINGA ETIQ NEGRA CABERNET 12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184045,
            "name": "DOÑA DOMINGA ETIQ NEGRA SIRAH 12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184046,
            "name": "DOÑA DOMINGA ETIQ NEGRA MERLOT 12X750",
            "subcategory_id": 1104
        },
        {
            "code": 10184048,
            "name": "DOÑA DOMINGA ETIQ NEGRA CARMENERE 6X750",
            "subcategory_id": 1104
        },
        {
            "code": 10186001,
            "name": "STA  EMA RESERVA TERROIR CARMENERE 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186005,
            "name": "STA EMA RESERVA TERROIR MERLOT 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186010,
            "name": "STA EMA  RESERVA TERROIR CAB SAUV 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186011,
            "name": "SANTA EMA GRAN RESERVA CABERNET 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186013,
            "name": "SANTA EMA GRAN RESERVA MERLOT 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186015,
            "name": "SANTA EMA GRAN RESERVA CARMENERE 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186018,
            "name": "TORO DE PIEDRA GRAN RESERVA CABER 6X750",
            "subcategory_id": 1105
        },
        {
            "code": 10186030,
            "name": "TORO DE PIEDRA GRAN RESERVA CABER 6X1.5",
            "subcategory_id": 1105
        },
        {
            "code": 10188001,
            "name": "TORO DE PIEDRA RESERVA CAB SAUV 6 X 750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188005,
            "name": " TORO DE PIEDRA RESERVA CARMEN. 6 X 750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188010,
            "name": "TORO DE PIEDRA RESERVA MERLOT 6 X 750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188015,
            "name": "TORO DE PIEDRA RESV. RED BLEND 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188017,
            "name": "TORO DE PIEDRA RESERVA BLANCO 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188030,
            "name": "VINO PEREZ CRUZ LIMITED CAB 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188033,
            "name": "VINO PEREZ CRUZ LIMITED CAB FRANC 6X750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188035,
            "name": "VINO PEREZ CRUZ LIMITED CARM 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188040,
            "name": "VINO PEREZ CRUZ LIMITED MERLOT 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188045,
            "name": "VINO LA PIU BELLE ROSE  X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188050,
            "name": "VINO BOUCHON BLOCK CAB SAUV 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188055,
            "name": "VINO BOUCHON BLOCK CARMENERE 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188060,
            "name": "VINO BOUCHON BLOCK MALBEC 6 X 750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188063,
            "name": "TORO PIEDRA GR BLANCO REQUINGUA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188065,
            "name": "TORO PIEDRA GR C/SAUV REQUINGUA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188067,
            "name": "TORO PIEDRA GR CARIGNAN REQUINGUA 6X750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188070,
            "name": "TORO PIEDRA GR CARMEN REQUINGUA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188075,
            "name": "TORO PIEDRA GR MERLOT REQUINGUA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188080,
            "name": "TORO PIEDRA GR CAR/CAB REQUINGUA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188085,
            "name": "VINO J.BOUCHON CAR RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188090,
            "name": "VINO J.BOUCHON CAB SAV  RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188095,
            "name": "VINO J.BOUCHON MER RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188097,
            "name": "VINO PATRONALES CAB/SAV GRAN RE 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188100,
            "name": "VINO PATRONALES CARMENE GRAN RE 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188103,
            "name": "VINO PATRONALES MERLOT GRAN RE 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188105,
            "name": "VINO PATRONALES CAB/SAV RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188107,
            "name": "VINO PATRONALES MERLOT RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188109,
            "name": "VINO PATRONALES CARMENER RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188110,
            "name": "VINO MORANDE CAB/SAV PIONERO RES 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188113,
            "name": "VINO MORANDE MERLOT  PIONERO RES 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188115,
            "name": "VINO MORANDE CARMEN PIONERO RES 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188118,
            "name": "VINO MORANDE CAB/SAV GRAN RESERV 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188120,
            "name": "VINO MORANDE CARMENERE GRAN RESE 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188123,
            "name": "VINO MORANDE MERLOT GRAN RESERVA 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188126,
            "name": "VINO VIK ENSAMBLAJE LA PIU BELLE X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188129,
            "name": "CAVA FREIXENET CORDON NEGRO BRUT12X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188135,
            "name": "VINO PETIT VERDOT CABER GR TOPIE 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188137,
            "name": "VINO PINOT NOIR GR TORO DE PIEDRA 6X750C",
            "subcategory_id": 1106
        },
        {
            "code": 10188141,
            "name": "VINOCHARDONNAY TORO DE PIEDRA GR 6X750CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188200,
            "name": "MR PERKINS AGUA TONICA DRY6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188201,
            "name": "MR PERKINS AGUA TONICA DRY 6X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188202,
            "name": "MR PERKINS AGUA TONICA DRY 6X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188205,
            "name": "MR PERKINS  PINK SODA 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188206,
            "name": "MR PERKINS  PINK SODA 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188207,
            "name": "MR PERKINS  PINK SODA 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188210,
            "name": "MR PERKINS AGUA TONICA BLOSSOM 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188211,
            "name": "MR PERKINS AGUA TONICA BLOSSOM 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188212,
            "name": "MR PERKINS AGUA TONICA BLOSSOM 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188215,
            "name": "MR PERKINS AGUA TONICA  LIGHT 6X4X200CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188300,
            "name": "RON ABUELO AÑEJO 12X1000CC",
            "subcategory_id": 1106
        },
        {
            "code": 10188310,
            "name": "RON ABUELO AÑEJO 24X375CC",
            "subcategory_id": 1106
        },
        {
            "code": 10189005,
            "name": "VINO VACA BRAVA GR CARMENERE 6X750CC",
            "subcategory_id": 1107
        },
        {
            "code": 10189010,
            "name": "VINO VACA BRAVA GR CAB/SAUVIGNON 6X750CC",
            "subcategory_id": 1107
        },
        {
            "code": 10189015,
            "name": "VINO VACA BRAVA GR SYRAH 6X750CC",
            "subcategory_id": 1107
        },
        {
            "code": 10189120,
            "name": "VINO VACA BRAVA GR CAB/SAV-CARME 6X750CC",
            "subcategory_id": 1107
        },
        {
            "code": 10189125,
            "name": "VINO VACA BRAVA RES. ESP RED BLEND 6X750",
            "subcategory_id": 1107
        },
        {
            "code": 10190001,
            "name": "MISTRAL 35 12X750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190003,
            "name": "MISTRAL RESERVA 40 12X750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190004,
            "name": "MISTRAL NOBEL D.O 46GL 6X750CC (5732)",
            "subcategory_id": 1108
        },
        {
            "code": 10190005,
            "name": "MISTRAL 12X1LT (5761)",
            "subcategory_id": 1108
        },
        {
            "code": 10190006,
            "name": "MISTRAL NOB BAR.TOSTADA 40G 6X750C(5982)",
            "subcategory_id": 1108
        },
        {
            "code": 10190007,
            "name": "MISTRAL SELECCION DE BARRICAS 4X700 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190008,
            "name": "MISTRAL GRAN PISCO 46° 6X750 CC (5227)",
            "subcategory_id": 1108
        },
        {
            "code": 10190009,
            "name": "MISTRAL NOBEL CAFE 40GL 6X750CC (5696)",
            "subcategory_id": 1108
        },
        {
            "code": 10190010,
            "name": "MISTRAL GRAN NOBEL 40° 4X700 CC(5433)",
            "subcategory_id": 1108
        },
        {
            "code": 10190011,
            "name": "MISTRAL ICE DRY BOTELLA 4PX6B X275C 9GL",
            "subcategory_id": 1108
        },
        {
            "code": 10190012,
            "name": "MISTRAL ICE BOTELLA BLEND 6X4X275 (5407)",
            "subcategory_id": 1108
        },
        {
            "code": 10190014,
            "name": "MISTRAL NOBEL FIRE 6X750 C.C.(5871)",
            "subcategory_id": 1108
        },
        {
            "code": 10190015,
            "name": "PISCO 3 RRR 35G 12X750 CC (7005)",
            "subcategory_id": 1108
        },
        {
            "code": 10190016,
            "name": "PACK MISTRAL 35° LT + COCA LT1/2",
            "subcategory_id": 1108
        },
        {
            "code": 10190017,
            "name": "PISCO 3 RRR 35G + COCA COLA DESECH 1.5 L",
            "subcategory_id": 1108
        },
        {
            "code": 10190018,
            "name": "MISTRAL ICE LATA 6X4X310 CC (5734)",
            "subcategory_id": 1108
        },
        {
            "code": 10190019,
            "name": "PISCO 3 RRR 35° 6X1LT (5727)",
            "subcategory_id": 1108
        },
        {
            "code": 10190020,
            "name": "HORCON QUEMADO 35° 6 X645 CC (5426)",
            "subcategory_id": 1108
        },
        {
            "code": 10190021,
            "name": "MISTRAL ICE HOR  BOTELLA 4PX6B X275C 7GL",
            "subcategory_id": 1108
        },
        {
            "code": 10190022,
            "name": "ESPIRITU DE LOS ANDES  40GL 6X750C.C",
            "subcategory_id": 1108
        },
        {
            "code": 10190023,
            "name": "MISTRAL ICE ENERGY AZUL LATA 24X310 C 7°",
            "subcategory_id": 1108
        },
        {
            "code": 10190024,
            "name": "MISTRAL ICE ENERGY AZUL BOTELLA 24X275CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190025,
            "name": "MISTRAL ICE MAQUI GRANADA BOT 4X6X275C",
            "subcategory_id": 1108
        },
        {
            "code": 10190026,
            "name": "MISTRAL NOBEL APPLE 6X750CC(7010)",
            "subcategory_id": 1108
        },
        {
            "code": 10190027,
            "name": "MISTRAL NOBEL HONEY 6 X 750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190031,
            "name": "SERENA 33G 12X700 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190033,
            "name": "SERENA 35G 12X700 CC (5209)",
            "subcategory_id": 1108
        },
        {
            "code": 10190035,
            "name": "SERENA SOUR 6X1 LT",
            "subcategory_id": 1108
        },
        {
            "code": 10190036,
            "name": "MISTRAL LT + MAL PASO PEDRO JIMENENEZ 75",
            "subcategory_id": 1108
        },
        {
            "code": 10190040,
            "name": "SABOR ANDINO SOUR 14GL 12X700CC (5880",
            "subcategory_id": 1108
        },
        {
            "code": 10190041,
            "name": "SABOR ANDINO MANGO 12GL 12X700CC (5877)",
            "subcategory_id": 1108
        },
        {
            "code": 10190044,
            "name": "SABOR ANDINO SOUR 14GL 6X1000CC (5882)",
            "subcategory_id": 1108
        },
        {
            "code": 10190045,
            "name": "SABOR ANDINO MANGO 12G 6X1000CC(5879)",
            "subcategory_id": 1108
        },
        {
            "code": 10190049,
            "name": "CAMPANARIO ESPECIAL 35° 12X350CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190051,
            "name": "CAMPANARIO 35G 12X700 CC (5473)",
            "subcategory_id": 1108
        },
        {
            "code": 10190053,
            "name": "CAMPANARIO SOUR 16G 12X700 CC (5855)",
            "subcategory_id": 1108
        },
        {
            "code": 10190056,
            "name": "CAMPANARIO SOUR LIGHT 12G 12X700 (5477)",
            "subcategory_id": 1108
        },
        {
            "code": 10190057,
            "name": "CAMPANARIO SPARKLING SOUR 6X750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190058,
            "name": "CAMPANARIO SPARKLING SOUR 12X750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190059,
            "name": "CAMPANARIO SOUR PICA 14G 12X700 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190060,
            "name": "CAMPANARIO SOUR 16 G 6X1000 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190061,
            "name": "CAMPANARIO MANGO 12G 6X1000 CC(5503)",
            "subcategory_id": 1108
        },
        {
            "code": 10190062,
            "name": "CAMPANARIO MANGO 12G 12X700 CC(5460)",
            "subcategory_id": 1108
        },
        {
            "code": 10190063,
            "name": "CAMPANARIO MANGO LIGHT 9 G 12X700 (5462)",
            "subcategory_id": 1108
        },
        {
            "code": 10190065,
            "name": "CAMPANARIO PIÑA COLADA 12G 12X700C (5471",
            "subcategory_id": 1108
        },
        {
            "code": 10190068,
            "name": "CAM. CHIRIMOYA COLADA 12G X700C (5455)",
            "subcategory_id": 1108
        },
        {
            "code": 10190069,
            "name": "CAMPANARIO LUCUMA COLADA 12X700 (5458)",
            "subcategory_id": 1108
        },
        {
            "code": 10190070,
            "name": "CAMPANARIO MANGO COLADA 12X750 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190072,
            "name": "CAMPANARIO CARAMELO (TOFFE) 6X700 (5955)",
            "subcategory_id": 1108
        },
        {
            "code": 10190074,
            "name": "CAMPANARIO SELECCION CREME 6X700C (5902)",
            "subcategory_id": 1108
        },
        {
            "code": 10190079,
            "name": "CAMPANARIO COLA MONO 12X700 CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190095,
            "name": "PACK MISTRAL 35 LT + ALTO DEL CARM 35 LT",
            "subcategory_id": 1108
        },
        {
            "code": 10190096,
            "name": "MISTRAL ICE PINEAPPLE 7° 12X275",
            "subcategory_id": 1108
        },
        {
            "code": 10190901,
            "name": "PAC MISTRAL+ALTO 12X750CC",
            "subcategory_id": 1108
        },
        {
            "code": 10190902,
            "name": "PAC MISTRAL LT+ ALTO DELCARMEN LT",
            "subcategory_id": 1108
        },
        {
            "code": 10190903,
            "name": "PAC MISTRAL + CAPEL DE 35° X 12UDS",
            "subcategory_id": 1108
        },
        {
            "code": 10191001,
            "name": "RON HABANA ESPECIAL 12X700 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191002,
            "name": "TRIPACK LT MISTRAL ALTO Y BAUZA",
            "subcategory_id": 1109
        },
        {
            "code": 10191003,
            "name": "PACK HAVANA + COCA COLA DESCH 6X1.5 L",
            "subcategory_id": 1109
        },
        {
            "code": 10191005,
            "name": "RON HAVANA AÑEJO  ESPECIAL X1 LT(2013)",
            "subcategory_id": 1109
        },
        {
            "code": 10191011,
            "name": "RON HAVANA CLUB RESERVA 12X750 CC (2324)",
            "subcategory_id": 1109
        },
        {
            "code": 10191015,
            "name": "RON HAVANA CLUB RESERVA X 1 LT 40G(2017)",
            "subcategory_id": 1109
        },
        {
            "code": 10191021,
            "name": "RON HAVANA RESERVA 6X750CC C/VASOS",
            "subcategory_id": 1109
        },
        {
            "code": 10191030,
            "name": "WHISKY CHIVAS 12 AÑOS + PETACA 1X 750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191031,
            "name": "WHISKY CHIVAS REGAL12 AÑOS 1X750C (2074)",
            "subcategory_id": 1109
        },
        {
            "code": 10191033,
            "name": "WHISKY CHIVAS REGAL 12 AÑOS 1X1 LT",
            "subcategory_id": 1109
        },
        {
            "code": 10191034,
            "name": "W BALLANTINES + PETACA 6X 750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191035,
            "name": "WHIS. CHIVAS REGAL 18 AÑOS 40G X750 C.",
            "subcategory_id": 1109
        },
        {
            "code": 10191041,
            "name": "WHISKY BALLANTINES FINEST 1X750CC (2064)",
            "subcategory_id": 1109
        },
        {
            "code": 10191043,
            "name": "WHISKY BALLANTINES FINEST 1X 1LT (2068)",
            "subcategory_id": 1109
        },
        {
            "code": 10191045,
            "name": "PACK BALLANTINES + COCA COLA DESCH 1.5 L",
            "subcategory_id": 1109
        },
        {
            "code": 10191046,
            "name": "WHISKY BALLANTINES 12 AÑOS 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191048,
            "name": "WHISKY BALLANTINES PETACA 24X200 ML",
            "subcategory_id": 1109
        },
        {
            "code": 10191051,
            "name": "WHISKY 100 PIPERS 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191052,
            "name": "WHISKY 100 PIPERS 40° 6 X 1000 CC (2202)",
            "subcategory_id": 1109
        },
        {
            "code": 10191053,
            "name": "PACK 100 PIPERS + COCA COLA DESECH 1.5",
            "subcategory_id": 1109
        },
        {
            "code": 10191054,
            "name": "WHISKY JAMESON STANDAR 40G 12X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191061,
            "name": "VODKA ABSOLUT BLUE 40G 1X750 CC (2026)",
            "subcategory_id": 1109
        },
        {
            "code": 10191066,
            "name": "VODKA ABSOLUT CITRON 40º 1X750 CC (2029",
            "subcategory_id": 1109
        },
        {
            "code": 10191069,
            "name": "VODKA ABSOLUT MANDRIN 40º 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191071,
            "name": "VODKA ABSOLUT PEPPAR 40º 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191073,
            "name": "VODKA ABSOLUT KURANT 40º 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191076,
            "name": "VODKA ABSOLUT VAINILLA 40º 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191079,
            "name": "VODKA ABSOLUT RASPBERRI 40º 1X750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191081,
            "name": "VODKA ABSOLUT APEACH 40º 1X 750 CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191083,
            "name": "VODKA ABSOLUT MANGO 40º 1X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191086,
            "name": "VODKA ABSOLUT PEARS 40º 1X750CC (2033 )",
            "subcategory_id": 1109
        },
        {
            "code": 10191090,
            "name": "RAMAZZOTTI VIOLETTO 15° 6X700CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191095,
            "name": "RAMAZZOTTI 15° 6X700CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191096,
            "name": "COMBO RAMAZZOTTI + ESP.CELEBRITE 6X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191098,
            "name": "FERNET BRANCA 39G 6X1000CC (0017)",
            "subcategory_id": 1109
        },
        {
            "code": 10191100,
            "name": "FERNET BRANCA 39G 12X750CC (0016)",
            "subcategory_id": 1109
        },
        {
            "code": 10191101,
            "name": "FERNET BRANCA 39G 6X750CC + VASO (0025)",
            "subcategory_id": 1109
        },
        {
            "code": 10191105,
            "name": "GIN BEEFEATER 40G 12X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191110,
            "name": "GIN BEEFEATER PINK 37.5G 6X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191115,
            "name": "GIN MONKEY 47G 1X500CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191120,
            "name": "GIN MALFY LIMONE 41G X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191125,
            "name": "GIN MALFY ORIGINAL 41G X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191130,
            "name": "GIN MALFY ROSA 41G X750CC",
            "subcategory_id": 1109
        },
        {
            "code": 10191135,
            "name": "GIN KANTAL 43G 6X750CC (5928)",
            "subcategory_id": 1109
        },
        {
            "code": 10192003,
            "name": "RUTA NORTE SOUR 14º 12X700CC (5596)",
            "subcategory_id": 1110
        },
        {
            "code": 10192006,
            "name": "RUTA NORTE SOUR LIGHT 12º 12X700 CC",
            "subcategory_id": 1110
        },
        {
            "code": 10192009,
            "name": "RUTA NORTE MANGO SOUR 14º12X700C (5593)",
            "subcategory_id": 1110
        },
        {
            "code": 10192015,
            "name": "RUTA NORTE SOUR 14° 6 X 1200 CC (5770)",
            "subcategory_id": 1110
        },
        {
            "code": 10192020,
            "name": "RUTA NORTE MANGO 14° 6 X 1200 CC (5774)",
            "subcategory_id": 1110
        },
        {
            "code": 10193001,
            "name": "BAUZA ESPECIAL  35º 12X750 CC",
            "subcategory_id": 1111
        },
        {
            "code": 10193009,
            "name": "BAUZA ESPECIAL 35º 6X1 LT",
            "subcategory_id": 1111
        },
        {
            "code": 10193011,
            "name": "BAUZA RESERVA 40º 12X750 CC",
            "subcategory_id": 1111
        },
        {
            "code": 10193019,
            "name": "BAUZA MANGO 12º 12X750 CC",
            "subcategory_id": 1111
        },
        {
            "code": 10194000,
            "name": " PETACA SIERRA MORENA DORAD 12X190C G40º",
            "subcategory_id": 1112
        },
        {
            "code": 10194001,
            "name": "RON SIERRA MORENA 12X750 CC",
            "subcategory_id": 1112
        },
        {
            "code": 10194002,
            "name": "PACK SIERRA MOREN + COCA COLA DESECH 1.5",
            "subcategory_id": 1112
        },
        {
            "code": 10194003,
            "name": "RON CABO VIEJO 40º 12X750 CC",
            "subcategory_id": 1112
        },
        {
            "code": 10194009,
            "name": "RON SIERRA MORENA DORADO 12X750CC (5556)",
            "subcategory_id": 1112
        },
        {
            "code": 10194145,
            "name": "RON SIERRA MORENA BLANCO 6X750 (5554)",
            "subcategory_id": 1112
        },
        {
            "code": 10194146,
            "name": "RON SIERRA MORENA AÑEJO 6X750C.C(5560)",
            "subcategory_id": 1112
        },
        {
            "code": 10194148,
            "name": "RON SIERRA MORENA DORADO 6X1000C.C(5813)",
            "subcategory_id": 1112
        },
        {
            "code": 10194400,
            "name": "RON SIERRA MORENA DORADO 12X350 CC.40ºG.",
            "subcategory_id": 1112
        },
        {
            "code": 10194405,
            "name": "RON SIERRA ICE MOJITO 4X6X270CC (5520)",
            "subcategory_id": 1112
        },
        {
            "code": 10195001,
            "name": "CAPEL PETACA 35º 24X190 CC (9551)",
            "subcategory_id": 1113
        },
        {
            "code": 10195004,
            "name": "CAPEL ICE F ROJOS 24X275 CC 7º (9622)",
            "subcategory_id": 1113
        },
        {
            "code": 10195006,
            "name": "CAPEL ICE MANDARINA 24X275 CC 7º",
            "subcategory_id": 1113
        },
        {
            "code": 10195009,
            "name": "CAPEL ICE CITRUS 24X275 CC 7º",
            "subcategory_id": 1113
        },
        {
            "code": 10195010,
            "name": "CAPEL ICE  MOJITO 24X275CC (9621)",
            "subcategory_id": 1113
        },
        {
            "code": 10195011,
            "name": "CAPEL CHICO 35 2D 12X350 CC (9552)",
            "subcategory_id": 1113
        },
        {
            "code": 10195025,
            "name": "CAPEL 35 ESPECIAL 6X1000CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195030,
            "name": "CAPEL ESP. 80 AÑOS 35G 12X700",
            "subcategory_id": 1113
        },
        {
            "code": 10195032,
            "name": "CAPEL TRANSP. DOBLE DESTILADO 40G 12X750",
            "subcategory_id": 1113
        },
        {
            "code": 10195035,
            "name": "CAPEL DOBLE DESTILADO 35G 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195038,
            "name": "CAPEL GUARDA DOBLE DESTILADO 40G 12X750",
            "subcategory_id": 1113
        },
        {
            "code": 10195051,
            "name": "CAPEL SOUR PREMIUN 14G 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195056,
            "name": "CAPEL SOUR LIGHT 14G 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195062,
            "name": "CAPEL SOUR MANGO 12G 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195065,
            "name": "CAPEL MANGO COLADA 12º 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195068,
            "name": "CAPEL PIÑA COLADA PREMIUN 12º 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195073,
            "name": "CAPEL CHIRIMOYA COLADA 12º 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10195079,
            "name": "CAPEL TOFFI CREAM 12º 12X700 CC",
            "subcategory_id": 1113
        },
        {
            "code": 10197001,
            "name": "ARTESANO CHICO 35G 12X350 CC (9531)",
            "subcategory_id": 1114
        },
        {
            "code": 10197003,
            "name": "ARTESANO SOUR CHICO 16G 12X350 CC",
            "subcategory_id": 1114
        },
        {
            "code": 10197011,
            "name": "ARTESANO 35G 12X700 CC",
            "subcategory_id": 1114
        },
        {
            "code": 10197013,
            "name": "ARTESANO 40G 12X700 CC",
            "subcategory_id": 1114
        },
        {
            "code": 10197016,
            "name": "ARTESANO SOUR CASERO 16G 12X700 CC",
            "subcategory_id": 1114
        },
        {
            "code": 10198001,
            "name": "ALTO DEL CARMEN 35G 12X750 CC",
            "subcategory_id": 1115
        },
        {
            "code": 10198002,
            "name": "ALTO DEL CARMEN 35G 6X1LITRO",
            "subcategory_id": 1115
        },
        {
            "code": 10198003,
            "name": "ALTO CARMEN 40G RES 6X750 AZUL  (9505)",
            "subcategory_id": 1115
        },
        {
            "code": 10198005,
            "name": "ALTO DEL CAR. ETIQ. BLANC 40G 6 X750CC",
            "subcategory_id": 1115
        },
        {
            "code": 10198007,
            "name": "ALTO CARMEN ENJ ETI NEGRA 40GX750 (9506)",
            "subcategory_id": 1115
        },
        {
            "code": 10198031,
            "name": "ALTO DEL CARMEN TRANSP 40 X750CC (9507)",
            "subcategory_id": 1115
        },
        {
            "code": 10199011,
            "name": "RON MADDERO EXTRA AÑEJO 40G 6X750 CC",
            "subcategory_id": 1116
        },
        {
            "code": 10199013,
            "name": "RON MADDERO AÑEJO 40G 12X750 CC",
            "subcategory_id": 1116
        },
        {
            "code": 10199016,
            "name": "RON MADDERO DORADO 40G 12X750 CC (9151)",
            "subcategory_id": 1116
        },
        {
            "code": 10199017,
            "name": "RON MADERO DORADO 40G 6XLT.(9154)",
            "subcategory_id": 1116
        },
        {
            "code": 10199020,
            "name": "RON MADERO BLANCO 40G 12X750CC(9153)",
            "subcategory_id": 1116
        },
        {
            "code": 10200012,
            "name": "CERVEZA BEAR BEER LATA 24X330ML",
            "subcategory_id": 1117
        },
        {
            "code": 10200013,
            "name": "CERVEZA BEAR BEER LATA 24X500ML",
            "subcategory_id": 1117
        },
        {
            "code": 10200015,
            "name": "CERVEZA BEAR BEER BOTELLA 12X660ML",
            "subcategory_id": 1117
        },
        {
            "code": 10202022,
            "name": "CER VOLCANES LAGER BOT 6X1050 LT S/FILTR",
            "subcategory_id": 1118
        },
        {
            "code": 10202023,
            "name": "CERVEZA VOLCANES LAGER BOT 6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202024,
            "name": "CERVEZA VOLCANES NEGRA BOT 6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202025,
            "name": "CERVEZA VOLCANES IPA BOT  6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202026,
            "name": "CERVEZA VOLCANES LUCUMA BOT  6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202029,
            "name": "CERVEZA VOLCANES CHOC/NARJ BOT 6X1050 LT",
            "subcategory_id": 1118
        },
        {
            "code": 10202030,
            "name": "CERVEZA VOLCANES D/MALTA BOT 6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202032,
            "name": "CERVEZA VOLCANES STRONG BOT 6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10202033,
            "name": "CERVEZA VOLCANES STRONG  24X350CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202035,
            "name": "CERVEZA VOLCANES AMBER ALE  6X 1050 LT",
            "subcategory_id": 1118
        },
        {
            "code": 10202046,
            "name": "CERVEZA VOLCANES LUCUMA 24 X 350 CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202047,
            "name": "CERVEZA VOLCANES CHOC/NARJ  24 X 350 CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202051,
            "name": "CERVEZA VOLCANES LAGER  24 X 350 CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202053,
            "name": "CERVEZA VOLCANES CHOCOLATE 24 X 350 CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202058,
            "name": "CERVEZA VOLCANES NEGRA 24X350CC",
            "subcategory_id": 1118
        },
        {
            "code": 10202063,
            "name": "CERVEZA ANTILLANCA  BOT  6X1050 LTS",
            "subcategory_id": 1118
        },
        {
            "code": 10203025,
            "name": "CERVEZA ANTILLANCA LATA  6X4X470CC",
            "subcategory_id": 1119
        },
        {
            "code": 10204200,
            "name": "LICOR DE ANIS DE ORO SECO 6X750 CC (13)",
            "subcategory_id": 1120
        },
        {
            "code": 10204205,
            "name": "LICOR DE ANIS DE ORO DULCE 6X750 CC (14)",
            "subcategory_id": 1120
        },
        {
            "code": 10204210,
            "name": "LICOR DE CACAO MITJANS 6X750 CC (322)",
            "subcategory_id": 1120
        },
        {
            "code": 10204216,
            "name": "LICOR DE MANZANILLA MITJANS 6X750 (355)",
            "subcategory_id": 1120
        },
        {
            "code": 10204220,
            "name": "LICOR DE MENTA MITJANS 6X750 CC (372)",
            "subcategory_id": 1120
        },
        {
            "code": 10204225,
            "name": "LICOR TRIPLE SEC MITJANS 6X750 CC (382)",
            "subcategory_id": 1120
        },
        {
            "code": 10204230,
            "name": "LICOR DE CAFE MITJANS 6X750 CC (332)",
            "subcategory_id": 1120
        },
        {
            "code": 10204235,
            "name": "LICOR DE CURACAO MITJANS 6X750 CC (336)",
            "subcategory_id": 1120
        },
        {
            "code": 10204240,
            "name": "LICOR DE CHERRY MITJANS 6X750 CC (342)",
            "subcategory_id": 1120
        },
        {
            "code": 10204245,
            "name": "LICOR DE AMARETO MITJANS 6X750 CC (345)",
            "subcategory_id": 1120
        },
        {
            "code": 10204250,
            "name": "LICOR DE CASSIS MITJANS 6X750 CC (399)",
            "subcategory_id": 1120
        },
        {
            "code": 10204300,
            "name": "JARABE DE GOMA MITJANS 12X900 CC (8881)",
            "subcategory_id": 1120
        },
        {
            "code": 10204305,
            "name": "JARAB DE GRANADINA MITJANS 12X900 (8883)",
            "subcategory_id": 1120
        },
        {
            "code": 10204350,
            "name": "FERNET MITJANS 12X900 CC (120)",
            "subcategory_id": 1120
        },
        {
            "code": 10204360,
            "name": "LICOR AMARGO ROSSARD 12X155CC (349)",
            "subcategory_id": 1120
        },
        {
            "code": 10204370,
            "name": "FERNET ROSSARD 12X1 LT (4800)",
            "subcategory_id": 1120
        },
        {
            "code": 10204380,
            "name": "LICOR BITTER ROSSARD ROSSO 12X1LT (4801)",
            "subcategory_id": 1120
        },
        {
            "code": 10204390,
            "name": "LICOR BITTER ROSSARD 12X1LT (4805)",
            "subcategory_id": 1120
        },
        {
            "code": 10204400,
            "name": "DESTILADO AÑEJO TRES PALOS 12X750 (2290)",
            "subcategory_id": 1120
        },
        {
            "code": 10204405,
            "name": "DESTILADO AÑEJO TRES PALOS 12X1 L (2291)",
            "subcategory_id": 1120
        },
        {
            "code": 10204450,
            "name": "GIN BOOLTON 6X1 LT (239)",
            "subcategory_id": 1120
        },
        {
            "code": 10204460,
            "name": "VINO SECO ZALAMERO 12X750 (3614)",
            "subcategory_id": 1120
        },
        {
            "code": 10204465,
            "name": "VINO LICOROSO DULCE DIAMANTE 12X750",
            "subcategory_id": 1120
        },
        {
            "code": 10204480,
            "name": "VINO AÑEJO DULCE CENTENARIO 12X1L (4724)",
            "subcategory_id": 1120
        },
        {
            "code": 10205008,
            "name": "RON ABUELO AÑEJO 5 AÑOS 12X750CC",
            "subcategory_id": 1121
        },
        {
            "code": 10205027,
            "name": "CREMA DE CASSIS 12X750CC",
            "subcategory_id": 1121
        },
        {
            "code": 10205300,
            "name": "RON BLANCO AÑEJADO MITJANS 12X1LT (138)",
            "subcategory_id": 1121
        },
        {
            "code": 10205305,
            "name": "RON BLANCO AÑEJADO MITJANS 12X750 (144)",
            "subcategory_id": 1121
        },
        {
            "code": 10205310,
            "name": "RON DORADO AÑEJADO MITJANS 12X1LT (147)",
            "subcategory_id": 1121
        },
        {
            "code": 10205315,
            "name": "RON DORADO AÑEJADO MITJANS 12X750 (148)",
            "subcategory_id": 1121
        },
        {
            "code": 10206005,
            "name": "ESPUM VALDIVIESO MOSCATO 12X750 (6800)",
            "subcategory_id": 1122
        },
        {
            "code": 10206010,
            "name": "ESPUM VALDIVIESO DEMI SEC 12X750 (6804)",
            "subcategory_id": 1122
        },
        {
            "code": 10206015,
            "name": "ESPUM VALDIVIESO ROSE 12X750 CC (6810)",
            "subcategory_id": 1122
        },
        {
            "code": 10206020,
            "name": "ESPUM VALDIVIESO BRUT 12X750 CC (6810)",
            "subcategory_id": 1122
        },
        {
            "code": 10206050,
            "name": "ESPUM VALDIVIESO LIMIT EXTRA BRUT 6X750",
            "subcategory_id": 1122
        },
        {
            "code": 10206060,
            "name": "ESPUM VALDIVIESO DEMI SEC 12X375 (6807)",
            "subcategory_id": 1122
        },
        {
            "code": 10206065,
            "name": "ESPUM VALDIVIESO MOSCATO 12X375CC (6835)",
            "subcategory_id": 1122
        },
        {
            "code": 10206070,
            "name": "ESPUM VALDIVIESO BRUT 12X375CC (6836)",
            "subcategory_id": 1122
        },
        {
            "code": 10206100,
            "name": "ESPUM VALDIVIESO PETIT BRUT 12X187 (6873",
            "subcategory_id": 1122
        },
        {
            "code": 10206105,
            "name": "ESPUM VALDIVIESO PETIT ROSE 12X187 (6874",
            "subcategory_id": 1122
        },
        {
            "code": 10206110,
            "name": "ESPUM VALDIVIESO BRUT LIMITED 12X187",
            "subcategory_id": 1122
        },
        {
            "code": 10207003,
            "name": "RON PAMPERO BLANCO 40º X750 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207005,
            "name": "RON PAMPERO SELECCION  X700CC 40G (9106)",
            "subcategory_id": 1123
        },
        {
            "code": 10207007,
            "name": "RON PAMPERO ESPECIAL 40G 6X700CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207008,
            "name": "RON PAMPERO SELECCION AÑEJO X700CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207010,
            "name": "WHISKY J WALKER INGLES SN ESTUCHE 6X700",
            "subcategory_id": 1123
        },
        {
            "code": 10207012,
            "name": "RON CACIQUE AÑEJO 1 X 700 ML 37.5G",
            "subcategory_id": 1123
        },
        {
            "code": 10207015,
            "name": "RON CACIQUE 500 40G 1X700 ML",
            "subcategory_id": 1123
        },
        {
            "code": 10207030,
            "name": "WHISKY JOHNNIE ROJO 40· X 1LT",
            "subcategory_id": 1123
        },
        {
            "code": 10207031,
            "name": "WHISKY JOHNNIE WALKER RED 40GX750C",
            "subcategory_id": 1123
        },
        {
            "code": 10207033,
            "name": "WHISKY JOHNNIE WALKER BLACK 40G X750 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207037,
            "name": "WHISKY JOHNNIE ROJO LABEL 6X200ML (9015)",
            "subcategory_id": 1123
        },
        {
            "code": 10207039,
            "name": "WHISKY JOHNNIE WALKER BLACK 6 X 200ML",
            "subcategory_id": 1123
        },
        {
            "code": 10207041,
            "name": "WHISKY J & B 40G 1X750 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207043,
            "name": "WHISKY WHITE HORSE 40G 1X750 CC (9031)",
            "subcategory_id": 1123
        },
        {
            "code": 10207044,
            "name": "WHISKY WHITE HORSE 40G 1 X 1000ML (9030)",
            "subcategory_id": 1123
        },
        {
            "code": 10207045,
            "name": "WHISKY SANDY MACDONALD 40G X750CC (9024)",
            "subcategory_id": 1123
        },
        {
            "code": 10207046,
            "name": "WHISKY SANDY MAC DONALD 40G X1LT (9022)",
            "subcategory_id": 1123
        },
        {
            "code": 10207047,
            "name": "WHISKY SANDY MAC DONAL 6X200ML (9023)",
            "subcategory_id": 1123
        },
        {
            "code": 10207048,
            "name": "WHISKY VAT 69 40G 1X750 ML",
            "subcategory_id": 1123
        },
        {
            "code": 10207049,
            "name": "CREMA DE WHISKY BAILEYS 1X750 CC (9203)",
            "subcategory_id": 1123
        },
        {
            "code": 10207061,
            "name": "VODKA SMIRNOFF 47° 12X750 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207062,
            "name": "VODKA SMIRNOFF RED 21 40G 1X750 ML",
            "subcategory_id": 1123
        },
        {
            "code": 10207065,
            "name": "PISCO HACIEN LA TORRE RES. 40°X700 (9580",
            "subcategory_id": 1123
        },
        {
            "code": 10207067,
            "name": "PISCO HACIENDA LA TORRE ENV. 43° X700CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207070,
            "name": "GIN TANQUERAY LONDON 43,1G 1X700 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207071,
            "name": "GIN TANQUERAY 40G 12X750 CC",
            "subcategory_id": 1123
        },
        {
            "code": 10207072,
            "name": "GIN TANQUERAY TEN 47.3 G 1X750",
            "subcategory_id": 1123
        },
        {
            "code": 10207073,
            "name": "GIN GORDONS 37.5º 12X750 CC (9304)",
            "subcategory_id": 1123
        },
        {
            "code": 10207074,
            "name": "GIN TANQUERAY SEVILLA 41.3G X700C (9302)",
            "subcategory_id": 1123
        },
        {
            "code": 10207082,
            "name": "TEQUILA DON JULIO REPO. X750C 38GR(9036)",
            "subcategory_id": 1123
        },
        {
            "code": 10207084,
            "name": "TEQUILA DON JULIO BLANCO X750C 38G(9035)",
            "subcategory_id": 1123
        },
        {
            "code": 10207200,
            "name": "WHISKY BUCHANANS 12AÑOS X750C 40G (9001)",
            "subcategory_id": 1123
        },
        {
            "code": 10207205,
            "name": "WHISKY JW AGED 18AÑOS X750C 40G (9003)",
            "subcategory_id": 1123
        },
        {
            "code": 10207210,
            "name": "WHISKY JW DOUBLE BLACK X750C 40G (9010)",
            "subcategory_id": 1123
        },
        {
            "code": 10207215,
            "name": "WHISKY JW GREEN LABEL X750C 43G (9012)",
            "subcategory_id": 1123
        },
        {
            "code": 10207220,
            "name": "WHISKY OLD PARR X750C 40G (9021)",
            "subcategory_id": 1123
        },
        {
            "code": 10207225,
            "name": "LICOR SHERIDANS X750CC 15.5G (9201)",
            "subcategory_id": 1123
        },
        {
            "code": 10208005,
            "name": "ARBOLEDA CARMENERE 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208010,
            "name": "ARBOLERA CABERNET SAV 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208015,
            "name": "OVEJA NEGRA CARMENERE/MERLOT 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208020,
            "name": "OVEJA NEGRA CAB.SAUV / SYRAH 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208025,
            "name": "OVEJA NEGRA CABERNET CARMENER 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208030,
            "name": "CHAMAN RESERV CARMERENE CABERT 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208035,
            "name": "CHAMAN RESERV CABERNET. SAUV 6X750",
            "subcategory_id": 1124
        },
        {
            "code": 10208036,
            "name": "CHAMAN RESERV CABERNET. SAUV 6X750",
            "subcategory_id": 1124
        },
        {
            "code": 10208040,
            "name": "CHAMAN GRAN RESERV CABERT. SAUV 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208045,
            "name": "CHAMAN GRAN RESERV MERLOT 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208050,
            "name": "CALITERRA RESERV CABERNET. SAUV 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208055,
            "name": "CALITERRA RESERV MERLOT 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208060,
            "name": "CALITERRA RESERV CARMENERE 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208065,
            "name": "ARBOLERA SYRAH 6X750 CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208070,
            "name": "ALIWEN CAB.SAUV/ SYRAH 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208075,
            "name": "ALIWEN MERLOT 6X750 CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208080,
            "name": "ALIWEN CAB.SAUV / CARMERENE 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208085,
            "name": "ALIWEN ROSE 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208090,
            "name": "ALIWEN CABERNET SAUV 6X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208095,
            "name": "ALIWEN PINOT NOIR 6X750 CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208100,
            "name": "PINOT CABERNET SAUV 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208105,
            "name": "PINOT CARMENERE 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208110,
            "name": "PINOT MERLOT 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10208115,
            "name": "PINOT BLANCO 12X750CC",
            "subcategory_id": 1124
        },
        {
            "code": 10209055,
            "name": "WHISKY JACK DANIELS 7 AÑOS 1X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209058,
            "name": "WHYSKY JACK DANIELS  FIRE X 750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209061,
            "name": "WHISKY JACK DANIELS 12X1 LT",
            "subcategory_id": 1125
        },
        {
            "code": 10209063,
            "name": "GENTLEMAN JACK X750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209064,
            "name": "WHISKY JACK DANIELS APPLE 1X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209067,
            "name": "WHISKY JACK DANIELS HONEY 1X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209071,
            "name": "CACHAZA 51 12X1 LT",
            "subcategory_id": 1125
        },
        {
            "code": 10209073,
            "name": "RICCADONNA ASTI 1 X 750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209075,
            "name": "SANTO MOJITO 12 X 750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209076,
            "name": "DRAMBUIE 1X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209081,
            "name": "TEQUILA EL JIMADOR REPOSADO 12X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209083,
            "name": "TEQUILA EL JIMADOR BLANCO 12X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209092,
            "name": "JAGERMEISTER  X700CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209101,
            "name": "JAGERMEISTER X 1750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209105,
            "name": "BOLS TRIPLE SEC 6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209110,
            "name": "BOLS MENTA  6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209113,
            "name": "BOLS BLUE 6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209116,
            "name": "BOLS CASSIS  6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209119,
            "name": "BOLS AMARETTO 6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209120,
            "name": "BOLS CHOCOLATE  6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209122,
            "name": "BOLS CAFE  6X700 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209138,
            "name": "VODKA STOLICHNAYA X 1 LT (12)",
            "subcategory_id": 1125
        },
        {
            "code": 10209141,
            "name": "VODKA STOLICHNAYA 12X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209145,
            "name": "VODKA STOLICHNAYA PETACA 48X 200",
            "subcategory_id": 1125
        },
        {
            "code": 10209158,
            "name": "ESPUMANTE BARON LACROIX ROSE 12X750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209160,
            "name": "ESPUMANTE BARON LACROIX DEMISEC 12X750C",
            "subcategory_id": 1125
        },
        {
            "code": 10209162,
            "name": "ESPUMANTE BARON LACROIX MOSCAT 12X750C",
            "subcategory_id": 1125
        },
        {
            "code": 10209164,
            "name": "ESPUMANTE BARON LACROIX  BRUT 12X750C",
            "subcategory_id": 1125
        },
        {
            "code": 10209170,
            "name": "CHAMPANGE BARON LACROIX PIÑA 12X750 CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209171,
            "name": "RICADONNA MOSCATO ROSE 6X750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209175,
            "name": "RICADONNA ASTI 6X750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209249,
            "name": "COMBO MISTRAL + BAUZA 12 X 750CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209265,
            "name": "FENTIMANS GINGER BEER 4X200CC (BOTELLA)",
            "subcategory_id": 1125
        },
        {
            "code": 10209270,
            "name": "FENTIMANS ROSE (ROSADO) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209275,
            "name": "FENTIMANS TONIC LIGHT (AZUL) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209280,
            "name": "FENTIMANS GINGER BEER (NEGRA) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209285,
            "name": "FENTIMANS VALENCIA (NARANJA) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209290,
            "name": "FENTIMANS GINGER ALE  (VERDE) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10209295,
            "name": "FENTIMANS TONIC (AMARILLO) 24X200CC",
            "subcategory_id": 1125
        },
        {
            "code": 10210050,
            "name": "VODKA ERISTOFF 24X190 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210053,
            "name": "VODKA ERISTOFF 12X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210056,
            "name": "VODKA ERISTOFF 12X1 LTS",
            "subcategory_id": 1126
        },
        {
            "code": 10210057,
            "name": "VODKA ERISTOFF BLOOD 12X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210059,
            "name": "VODKA ERISTOFF BLOOD 6X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210060,
            "name": "VODKA ERISTOFF GOLD (CARAMELO) 6X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210062,
            "name": "VODKA ERISTOFF BLACK 6X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210063,
            "name": "VODKA ERISTOFF BLACK 6X1000 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210065,
            "name": "PACK VODKA ERISTOFF+NECTAR 1.5 LT",
            "subcategory_id": 1126
        },
        {
            "code": 10210068,
            "name": "PACK VODKA BLACK + VODKA BLOOD 6X700 CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210100,
            "name": "CERVEZA LATA CARLSBERG 24X500CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210101,
            "name": "CERVEZA BOTELLA BLANC 6X4X330CC",
            "subcategory_id": 1126
        },
        {
            "code": 10210105,
            "name": "CERVEZA BOTELLA CARLSBERG 6X4X330CC",
            "subcategory_id": 1126
        },
        {
            "code": 10211002,
            "name": "MARTINI FIERO 6X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211004,
            "name": "VINO AROMATIZADO NOILLY PRAT DRY X 750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211006,
            "name": "MARTINI ROSSO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211007,
            "name": "MARTINI BIANCO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211008,
            "name": "MARTINI DRY  6X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211011,
            "name": "FERNET MARTINI 12X900 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211012,
            "name": "GIN BOMBAY SAPPHIRE 12 X 750 ML",
            "subcategory_id": 1127
        },
        {
            "code": 10211013,
            "name": "GIN BOSFORDS 12X1LT.",
            "subcategory_id": 1127
        },
        {
            "code": 10211014,
            "name": "GIN BOMBAY SAPPHIRE BOTELLON X1750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211015,
            "name": "GIN BOMBAY SAPPHIRE 12 X 375 ML",
            "subcategory_id": 1127
        },
        {
            "code": 10211027,
            "name": "RON CASTILLO 12X750",
            "subcategory_id": 1127
        },
        {
            "code": 10211031,
            "name": "GIN BOMBAY BRAMBLE 6X700CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211033,
            "name": "GIN STAR OF BOMBAY 6X700CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211034,
            "name": "GIN BOMBAY TONIC X12 LATA",
            "subcategory_id": 1127
        },
        {
            "code": 10211038,
            "name": "MARTINI ROSATO 6X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211039,
            "name": "MARTINI RISERVA SPECIALE RUBINO 6X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211040,
            "name": "MARTINI RISERVA SPECIALE AMBRATO 6X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211041,
            "name": "RON BACARDI CARTA ORO PETACA 24X200 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211042,
            "name": "RON BACARDI  BLANCO PETACA 24X200 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211043,
            "name": "RON BACARDI AÑEJO PETACA 24X200CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211045,
            "name": "RON BACARDI SPICED 12X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211046,
            "name": "RON BACARDI SOLERA  X 750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211047,
            "name": "RON TERESA ORANGE  6X500CC 40°",
            "subcategory_id": 1127
        },
        {
            "code": 10211048,
            "name": "RON AÑEJO SANTA TERESA  6X 750 CC 40°",
            "subcategory_id": 1127
        },
        {
            "code": 10211054,
            "name": "RON  SANTA TERESA  1796 RVR X 750 CC 40°",
            "subcategory_id": 1127
        },
        {
            "code": 10211058,
            "name": "BACARDI CARTA ORO 6X1750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211061,
            "name": "BACARDI CARTA ORO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211063,
            "name": "BACARDI BLANCO 12X980 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211064,
            "name": "BACARDI BLANCO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211065,
            "name": "BACARDI BLANCO 6X 1750",
            "subcategory_id": 1127
        },
        {
            "code": 10211066,
            "name": "BACARDI LIMON 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211068,
            "name": "BACARDI PIÑA 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211069,
            "name": "BACARDI MANGO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211072,
            "name": "BACARDI BIG APPLE 12 X 750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211075,
            "name": "BACARDI RAZZ (FRAMBUEZA) 12X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211077,
            "name": "BACARDI COCONUT 12 X 750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211078,
            "name": "BACARDI AÑEJO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211079,
            "name": "BACARDI MOJITO 12 X 750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211080,
            "name": "BACARDI AÑEJO 12 X1 LT.",
            "subcategory_id": 1127
        },
        {
            "code": 10211081,
            "name": "BACARDI GRAN AÑEJO 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211082,
            "name": "RON BACARDI OAKHEART 12X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211085,
            "name": "RON BACARDI MOJITO 12X700 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211086,
            "name": "RON BACARDI DAIQUIRI 12X700 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211087,
            "name": "RON BACARDI PIÑA COLADA 12X700 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211088,
            "name": "RON BACARDI RAZZ + VASO 6X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211089,
            "name": "RON BACARDI APPLE + VASO 6X750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211090,
            "name": "RON BACARDI MANGO + VASO  6 X 750 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211130,
            "name": "LICOR DOÑIHUE 12X900 CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211200,
            "name": "PISCO 1733 RESERVADO 6X750CC 40 GRADOS",
            "subcategory_id": 1127
        },
        {
            "code": 10211205,
            "name": "PISCO 1733 RESERVADO 6X1000CC 35 GRADOS",
            "subcategory_id": 1127
        },
        {
            "code": 10211215,
            "name": "PISCO TOLOLO C/ESTUCHE BLUE X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211220,
            "name": "PISCO TOLOLO C/ESTUCHE BLACK X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211226,
            "name": "VINO TOLOLO  ROSE 6 X750CC",
            "subcategory_id": 1127
        },
        {
            "code": 10211250,
            "name": "PISCO NORTERRA TRAN. 6X1500CC",
            "subcategory_id": 1127
        },
        {
            "code": 10212710,
            "name": "VINO LA JOYA RES CABERNET 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212715,
            "name": "VINO LA JOYA RES CARMENERE 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212720,
            "name": "VINO LA JOYA RES MERLOT 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212725,
            "name": "VINO LA JOYA RES SYRAH 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212728,
            "name": "VINO LA JOYA GRAN SAV. BLANCO 12X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212730,
            "name": "VINO LA JOYA SINGLE CABERNET 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212735,
            "name": "VINO LA JOYA SINGLE CARMENERE 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212740,
            "name": "VINO LA JOYA SINGLE MERLOT 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212745,
            "name": "VINO PETIRROJO CABERNET12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212750,
            "name": "VINO PETIRROJO CARMENERE 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212755,
            "name": "VINO PETIRROJO MERLOT 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212757,
            "name": "VINO PETIRROJO BLANCO 12X750",
            "subcategory_id": 1128
        },
        {
            "code": 10212780,
            "name": "VINO PETIRROJO CARMENERE +2COPAS X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212800,
            "name": "VINO ATRAPA CIELO LATE BLUE 12X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212805,
            "name": "VINO CRAZY ROWS CARIGNAN 6 X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212810,
            "name": "VINO CRAZY ROWS CINSAULT 6 X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212815,
            "name": "VINO CRAZY ROWS MOSCATEL 6 X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212820,
            "name": "VINO CRAZY ROWS PAIS 6 X750CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212850,
            "name": "PACK 2 BOT. PETIROJO CABER+MERLOT X700CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212855,
            "name": "PACK 2 BOT. PETIROJO MERLOT+CARME X700CC",
            "subcategory_id": 1128
        },
        {
            "code": 10212860,
            "name": "PACK 2 BOT. PETIROJO CABERN+CARME X700CC",
            "subcategory_id": 1128
        },
        {
            "code": 10213069,
            "name": "LICOR CURACAO BLUE 12X750CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213100,
            "name": "MANZANILLA DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213103,
            "name": "CACAO DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213105,
            "name": "LICOR CASSIS DUVAL 12X750",
            "subcategory_id": 1129
        },
        {
            "code": 10213106,
            "name": "AMARETO DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213109,
            "name": "TRIPLE SEC DUVAL(NARANJA) 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213112,
            "name": "CURACAO DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213115,
            "name": "CHERRY DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213118,
            "name": "MENTA VERDE GLACIAL DUVAL 12X1000 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213121,
            "name": "ANIS DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213124,
            "name": "MANJAR DUVAL 12X750 CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213126,
            "name": "ALMENDRA DUVAL AMARETO 12C750CC",
            "subcategory_id": 1129
        },
        {
            "code": 10213128,
            "name": "DUVAL COLA DE MONO 12X750CC",
            "subcategory_id": 1129
        },
        {
            "code": 10214003,
            "name": "WHISKY WILLIAMS LOWSON 12X750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214004,
            "name": "WHISKY JIM BEAM BLACK FIRE 12X750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214005,
            "name": "WHISKY DEWARS 12  AÑOS 1 X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214006,
            "name": "WHISKY HALLMARK 12X750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214007,
            "name": "WHISKY DEWARS WHITE LABEL1X750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214008,
            "name": "WHISKY JIM BEAM BLACK 48X200 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214009,
            "name": "WHISKEY BOURBON MAKERS MARK  X 750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214011,
            "name": "WHISKY JIM BEAM BLACK 24X375 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214012,
            "name": "WHISKY DEWARS RESERVE 18 AÑOS  X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214014,
            "name": "WHISKY JIM BEAM BLACK X750",
            "subcategory_id": 1130
        },
        {
            "code": 10214016,
            "name": "WHISKY ABERFELDY 12 AÑOS 6X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214017,
            "name": "WHISKY JIM BEAM WHITE  X1 LTS",
            "subcategory_id": 1130
        },
        {
            "code": 10214018,
            "name": "WHISKY JIM BEAM WHITE  X 750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214019,
            "name": "WHISKY AULTMORE 12 AÑOS  6 X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214020,
            "name": "TEQUILA SAUZA SILVER X 750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214022,
            "name": "TEQUILA SAUZA GOLD  X 750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214023,
            "name": "TEQUILA PATRON SILVER  X 750 CC 40°",
            "subcategory_id": 1130
        },
        {
            "code": 10214024,
            "name": "TEQUILA PATRON CITRONGE   X 750 CC 35°",
            "subcategory_id": 1130
        },
        {
            "code": 10214025,
            "name": "WHISKY JIM BEAM HONEY 700 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214027,
            "name": "WHISKY DEWARS WHITE LABEL 40° 1X1000 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214040,
            "name": "WHISKY FIREBALL CINNAMON 12 X 1 LT",
            "subcategory_id": 1130
        },
        {
            "code": 10214045,
            "name": "WHISKY FIREBALL CINNAMON 12 X 750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214050,
            "name": "FIREBALL CINNAMON 48 X 200 CC 33°",
            "subcategory_id": 1130
        },
        {
            "code": 10214099,
            "name": "TEQUILA CAZADORES AÑEJO X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214100,
            "name": "TEQUILA CAZADORES BLANCO 12X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214200,
            "name": "TEQUILA CAZADORES REPOSADO 12X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214205,
            "name": "TEQUILA PATRON CO CAFE X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214210,
            "name": "TEQUILA PATRON AÑEJO 1X750 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214250,
            "name": "GIN LARIOS ROSE  6X700 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214255,
            "name": "GIN LARIOS   6X700 CC",
            "subcategory_id": 1130
        },
        {
            "code": 10214500,
            "name": "WHISKY DEWARS 15  AÑOS 1 X750CC",
            "subcategory_id": 1130
        },
        {
            "code": 10215011,
            "name": "RON BARCELO DORADO 12X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215013,
            "name": "RON BARCELO BLANCO 12X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215018,
            "name": "RON BARCELO AÑEJO 12 X 750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215019,
            "name": "RON BARCELO  AÑEJO 12X1750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215020,
            "name": "RON BARCELO  AÑEJO 6X 1750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215021,
            "name": "PACK RON BARCELO+ SOUR PERUANO X750C (6)",
            "subcategory_id": 1131
        },
        {
            "code": 10215031,
            "name": "RON BARCELO AÑEJO 12X1LT",
            "subcategory_id": 1131
        },
        {
            "code": 10215041,
            "name": "RON BARCELO IMPERIAL 1X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215042,
            "name": "RON BARCELO AÑEJO PETACON 24X350 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10215060,
            "name": "TEQUILA SENDA SILVER 12 X 750CC  38°",
            "subcategory_id": 1131
        },
        {
            "code": 10215065,
            "name": "TEQUILA DEL ANTIGUO POTRERO C/GUSANO",
            "subcategory_id": 1131
        },
        {
            "code": 10216001,
            "name": "VODKA GREY GOOSE X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216004,
            "name": "VODKA GREY GOOSE LIMON  X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216007,
            "name": "VODKA GREY GOOSE NARANJA  X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216010,
            "name": "VODKA GREY GOOSE PERA X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216028,
            "name": "ESPUMANTE MARTINI 0° DOLCE 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216030,
            "name": "ESPUMANTE MARTINI ROSE 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216033,
            "name": "ESPUMANTE MARTINI PROSECCO 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216034,
            "name": "ESPUMANTE MARTINI RIESLING 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216036,
            "name": "ESPUMANTE MARTINI BRUT 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216039,
            "name": " ESPUMATE MARTINI ASTI ICE 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216040,
            "name": "ESPUMANTE MARTINI ASTI 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216042,
            "name": "ESPUMANTE MARTINI ROYALE BIANCO 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216045,
            "name": "ESPUMANTE MARTINI ROYALE ROSATO 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216046,
            "name": "ESPUMANTE MARTINI ASTI ICE 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216047,
            "name": "AMARULA LICOR DE VAINILLA 12X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216048,
            "name": "AMARULA LICOR DE CREMA 12X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216049,
            "name": "LICOR DE FLOR DE SAUCO 750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216050,
            "name": "LICOR DE HIERBAS BENEDICTINO 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216051,
            "name": "LICOR DE HIERBAS FERNET 6X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216052,
            "name": "BACARDI 8 AÑOS C/ ESTUCHE X 750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216053,
            "name": "LIVENZA SPRITEZ (COCTEL DE NARAN) 6X750C",
            "subcategory_id": 1132
        },
        {
            "code": 10216054,
            "name": "AMARULA LICOR DE CREMA + VASO X750 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10216055,
            "name": "LICOR DE FLOR DE SAUCO 12X375 CC",
            "subcategory_id": 1132
        },
        {
            "code": 10217098,
            "name": " LATA RON BACARDI MOJITO 24X310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217100,
            "name": " LATA RON BACARDI MOJITO Y COLA 24X310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217110,
            "name": "COCTEL LATA RON BACARDI Y COLA  24X310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217120,
            "name": "COCTEL DE NARANJA LIVENZA SPRITZ 24X310C",
            "subcategory_id": 1133
        },
        {
            "code": 10217130,
            "name": "COCTEL LATA  ERISTOFF BLUE 12X250CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217140,
            "name": "COCTEL LATA LIMA MEET HS 24 X 310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217150,
            "name": "COCTEL LATA MANGO MEET HS 24 X 310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217160,
            "name": "COCTEL LATA POMELO MEET HS 24 X 310CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217175,
            "name": "COCTEL BOTELLA DR LEMON MOJITO 12 X275C",
            "subcategory_id": 1133
        },
        {
            "code": 10217180,
            "name": "COCTEL BOTELLA DR LEMON LIMON 12 X275C",
            "subcategory_id": 1133
        },
        {
            "code": 10217185,
            "name": "COCTEL BOTELLA DR LEMON VODKA 12 X275C",
            "subcategory_id": 1133
        },
        {
            "code": 10217187,
            "name": "COCTEL BOTELLA DR LEMON BERRY 12X275CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217190,
            "name": "COCTEL DR LEMON GIN TONIC 12X275 35°",
            "subcategory_id": 1133
        },
        {
            "code": 10217195,
            "name": "COCTEL LATA DR LEMON LIMON 24 X 473 CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217200,
            "name": "COCTEL LATA DR LEMON VODKA 24 X 473 CC",
            "subcategory_id": 1133
        },
        {
            "code": 10217300,
            "name": "PACK MARTINI PROSSECO + ST GERMAIN200C",
            "subcategory_id": 1133
        },
        {
            "code": 10217305,
            "name": "PACK GIN LARIOS DRY X700C+ COPON VIDRIO",
            "subcategory_id": 1133
        },
        {
            "code": 10217310,
            "name": "PACK BACARDI AÑEJO 38G X750CC+ VASO",
            "subcategory_id": 1133
        },
        {
            "code": 10217315,
            "name": "PACK GIN BOMBAY BRAMBLE 700CC + COPON",
            "subcategory_id": 1133
        },
        {
            "code": 10217320,
            "name": "PACK GIN LARIOS ROSE X700C+ COPON VIDRIO",
            "subcategory_id": 1133
        },
        {
            "code": 10217325,
            "name": "PACK GIN BOMBAY SAPPHIRE 700CC + COPON",
            "subcategory_id": 1133
        },
        {
            "code": 10217330,
            "name": "PACK WHISKY FIREBALL 750C + 2 VASOS SHOT",
            "subcategory_id": 1133
        },
        {
            "code": 10217335,
            "name": "PACK WHISKY JIM BEAM WHITE 750CC +VASO",
            "subcategory_id": 1133
        },
        {
            "code": 10217500,
            "name": "COCTEL DE NARANJA LIVENZA SPRITZ 6X750CC",
            "subcategory_id": 1133
        },
        {
            "code": 10218015,
            "name": "RON ABUELO AÑEJO 7AÑOS X750CC (12)",
            "subcategory_id": 1134
        },
        {
            "code": 10218016,
            "name": "RON ABUELO AÑEJO 7 AÑOS X 1 LT (12)",
            "subcategory_id": 1134
        },
        {
            "code": 10218017,
            "name": "RON ABUELO AÑEJO X1.750CC (6)",
            "subcategory_id": 1134
        },
        {
            "code": 10218020,
            "name": "CAMPARI 6X700 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218030,
            "name": "VODKA SKYY AZUL 1X750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218035,
            "name": "VODKA SKYY CITRUS 12X750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218036,
            "name": "VODKA SKYY CHERRY 12X 750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218037,
            "name": "VODKA SKYY GRAPE 12X750  CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218038,
            "name": "VODKA SKYY PASSION FRUIT 12X750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218039,
            "name": "VODKA SKYY GINGER 12X750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218040,
            "name": "VODKA SKYY PINEAPPLE 1X750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218050,
            "name": "APEROL APERITIVO 6 X 750 ML 11G",
            "subcategory_id": 1134
        },
        {
            "code": 10218052,
            "name": "FIREBALL CINNAMON WHISKY",
            "subcategory_id": 1134
        },
        {
            "code": 10218070,
            "name": "ESPUMANTE AMARANTA DEMISEC 6 X 750CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218075,
            "name": "ESPUMANTE AMARANTA BRUT 6 X 750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218080,
            "name": "ESPUMANTE AMARANTA MOSCATO 6 X 750 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218090,
            "name": "CERVEZA GOLDEN DEER 24 X 500 CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218095,
            "name": "GIN BULLDOG  X750 40°",
            "subcategory_id": 1134
        },
        {
            "code": 10218097,
            "name": "GIN HENDRICKS  X700 41°",
            "subcategory_id": 1134
        },
        {
            "code": 10218098,
            "name": "CERV. BOTELLA PERONI LAGER 4X6X330CC",
            "subcategory_id": 1134
        },
        {
            "code": 10218100,
            "name": "CINZANO ROOSO ITALIA 6X1LT",
            "subcategory_id": 1134
        },
        {
            "code": 10218105,
            "name": "CINZANO BIANCO ITALIA 6X1LT",
            "subcategory_id": 1134
        },
        {
            "code": 10218110,
            "name": "SKYY INFUSION RASPBERRY 12X750CC",
            "subcategory_id": 1134
        },
        {
            "code": 10220035,
            "name": "COLA DE MONO MACKENNA 14° 12 X 645 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10220037,
            "name": "GRANADINA IN LONCOCHE 645 ML X 12",
            "subcategory_id": 1135
        },
        {
            "code": 10221005,
            "name": "WINE COCKTAIL SKY 6 ° (CELESTE) 6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221010,
            "name": "WINE COCKTAIL BLACK MAMBA  (NEGRO)6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221015,
            "name": "WINE COCKTAIL CITRON 6° (AMARILLO)6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221020,
            "name": "WINE COCKTAIL APPLE  (VERDE ) 6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221025,
            "name": "WINE COCKTAIL GLACIAR ICE MINT 6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221028,
            "name": "WINE COCKTAIL ROSE (ROSADO)  6X750C",
            "subcategory_id": 1136
        },
        {
            "code": 10221200,
            "name": "RON DAMON AÑEJO 40°  6 X 1000 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221205,
            "name": "RON DAMON AÑEJO 40°  12 X 1000 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221210,
            "name": "WHISKEY JAMES LYON CHERRY 38° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221215,
            "name": "WHISKEY JAMES LYON CLASSIC 40° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221220,
            "name": "WHISKEY JAMES LYON HONEY 38 ° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221225,
            "name": "WHISKEY JAMES LYON APPLE  38 ° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221230,
            "name": "WHISKEY JAMES LYON BLACK  BARREL 12X700C",
            "subcategory_id": 1136
        },
        {
            "code": 10221235,
            "name": "WHISKEY JAMES LYON PEAR 40 ° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10221240,
            "name": "WHISKEY JAMES LYON BERRY 40 ° 12X700 CC",
            "subcategory_id": 1136
        },
        {
            "code": 10222001,
            "name": "BITTER ARAUCANO 12X900 C.C",
            "subcategory_id": 1137
        },
        {
            "code": 10222011,
            "name": "LICOR DE CACHAZA 61 1X1 LT 40º",
            "subcategory_id": 1137
        },
        {
            "code": 10222049,
            "name": "CHAMPAGNE STA GEMITA DEMI SEC 12X750CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222050,
            "name": "TEQUILA EL COMANDANTE BLANCO 12 X 750 CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222063,
            "name": "GIN HIRAM WALKER 1X1 LT",
            "subcategory_id": 1137
        },
        {
            "code": 10222066,
            "name": "TEQUILA DIPUTADO DORADO C/GUSANO X1000CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222081,
            "name": "WHISKY GRANTS PETACA 24X200 CC 40º",
            "subcategory_id": 1137
        },
        {
            "code": 10222082,
            "name": "WHISKY GRANTS + VASOS 6X750 CC.",
            "subcategory_id": 1137
        },
        {
            "code": 10222085,
            "name": "WHISKY GRANTS 12 X LT.",
            "subcategory_id": 1137
        },
        {
            "code": 10222111,
            "name": "WHISKY ROYAL CIRCLE 12 X 750 CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222113,
            "name": "WHISKY ROYAL CIRCLE 12 X 190 CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222130,
            "name": "CERV. WOLTERS LATA 24X333CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222135,
            "name": "CERV. WOLTERS LATA 24X500CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222150,
            "name": "TEQUILA SENDA REAL BLANCO 12X750C.C",
            "subcategory_id": 1137
        },
        {
            "code": 10222151,
            "name": "TEQUILA SENDA REAL DORADO 12X750C.C",
            "subcategory_id": 1137
        },
        {
            "code": 10222166,
            "name": "TEQUILA SOMBRERO NEGRO DORADO  X750CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222170,
            "name": "TEQUILA SOMBRERO NEGRO BLANCO X750CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222175,
            "name": "BIDÚ SHOTS 20UND X 10 BOL",
            "subcategory_id": 1137
        },
        {
            "code": 10222200,
            "name": "TEQUILA SOMBRERO NEGRO BLANCO 12X LT",
            "subcategory_id": 1137
        },
        {
            "code": 10222203,
            "name": "TEQUILA SOMBRERO NEGRO DORADO 12X1LT",
            "subcategory_id": 1137
        },
        {
            "code": 10222204,
            "name": "TEQUILA RIO PLATA BLANCO X 750CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222215,
            "name": "TEQUILA SOMBRERO NEGRO PETACON 12X375 CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222220,
            "name": "MEZCAL TEHUANA CON GUSANO 12X750CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222225,
            "name": "MEZCAL TEHUANA  C/GUSANO 24X250CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222300,
            "name": "VODKA JOLLY SKULL LIGHT 6X1000CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222301,
            "name": "VODKA JOLLY SKULL MORA  6X1000CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222302,
            "name": "VODKA JOLLY SKULL ARANDANO 6X1000CC",
            "subcategory_id": 1137
        },
        {
            "code": 10222303,
            "name": "VODKA JOLLY SKULL BERRY 6X1000CC",
            "subcategory_id": 1137
        },
        {
            "code": 10224010,
            "name": "BEAR BERRY ENERGY DRINK LATA 24X250 CC",
            "subcategory_id": 1138
        },
        {
            "code": 10225001,
            "name": "PISCO BAUZA 35° 12X750 CC + MANI",
            "subcategory_id": 1139
        },
        {
            "code": 10225002,
            "name": "BAUZA RESERVA 40° 12X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225003,
            "name": "BAUZA SOUR 14G 12X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225004,
            "name": "BAUZA MANGO 12G 12X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225006,
            "name": "BAUZA BIPACK 35G 6X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225007,
            "name": "BAUZA ANIVERSARIO 40G 6X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225008,
            "name": "PISCO BAUZA 35° 6XLT",
            "subcategory_id": 1139
        },
        {
            "code": 10225010,
            "name": "TEQUILA SILVER TESORO MIO 12X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225012,
            "name": "VODKA NEMIROFF DELIKAT ORIGINAL 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225014,
            "name": "VODKA NEMIROFF DELIKAT + NECTAR 1.5LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225015,
            "name": "VODKA NEMIROFF PEAR 12X700 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225017,
            "name": "VODKA NEMIROFF CRAMBERRY 12 X 700",
            "subcategory_id": 1139
        },
        {
            "code": 10225018,
            "name": "VODKA NEMIROFF CRANBERRY 12X700 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225020,
            "name": "SECRETO PERUANO SOUR LIMON 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225022,
            "name": "SECRETO PERUANO SOUR LIMON 12X1 LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225023,
            "name": "SECRETO PERUANO SOUR MARACUYA 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225025,
            "name": "SECRETO PERUANO SOUR AMARETTO 12X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225027,
            "name": "SECRETO PERUANO SOUR LIMON 6X1.5 LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225030,
            "name": "SECRETO PERUANO SOUR ZERO 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225032,
            "name": "SECRETO PERUANO MANGO 40% PROM. 12 X 1LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225035,
            "name": "COCTEL STA MARGARITA LIMON 12 X 750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225037,
            "name": "COCTEL STA MARGARITA FRESA 12 X 750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225040,
            "name": "COCTEL STA MARGARITA MANGO 12 X 750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225045,
            "name": "ESPUMANTE CHANDON BRUT X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225050,
            "name": "ESPUMANTE CHANDON DEMISEC X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225055,
            "name": "COGNAC HENNESSY  X700CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225060,
            "name": "WHISKY GLENMORANGIE 10 AÑOS X750",
            "subcategory_id": 1139
        },
        {
            "code": 10225065,
            "name": "LICOR LIMONCELLO X750",
            "subcategory_id": 1139
        },
        {
            "code": 10225070,
            "name": "LICOR LUXARDO AMARETTO 6X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225071,
            "name": "LICOR LUXARDO AMARETTO X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225075,
            "name": "BAUZA COCTEL ICE LIMON 24X275CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225080,
            "name": "BAUZA COCTEL ICE MANZANA 24X275CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225085,
            "name": "APERITIVO APRILI 12GL 6X700CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225090,
            "name": "TEQUILA JOSE CUERVO ESPE BLANCO 12X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225091,
            "name": "TEQUILA JOSE CUERVO ESPE SILVER 12X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225095,
            "name": "TEQUILA JOSECUERVO ESP REPOSADO 12X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225100,
            "name": "CREMA DE WHISKY BROGANS X700CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225105,
            "name": "BOURBON EVAN WILLIAMS MIEL X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225110,
            "name": "BOURBON EVAN WILLIAMS BLACK X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225115,
            "name": "BOURBON EVAN WILLIAMS CANELA X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225120,
            "name": "VINO MONTGRAS RESER AURA CAB SAUV 6X750C",
            "subcategory_id": 1139
        },
        {
            "code": 10225125,
            "name": "VINO MONTGRAS RESER AURA CARMENER 6X750C",
            "subcategory_id": 1139
        },
        {
            "code": 10225130,
            "name": "VINO MONTGRAS QUATRO TINTO 6X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225135,
            "name": "VINO MONTGRAS QUATRO BLANCO 6X750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225300,
            "name": "SECRETO PERUANO SOUR LIMON 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225302,
            "name": "SECRETO PERUANO SOUR LIMON 12X1 LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225303,
            "name": "SECRETO PERUANO SOUR MARACUYA 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225305,
            "name": "SECRETO PERUANO SOUR AMARETTO 12X750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225307,
            "name": "SECRETO PERUANO SOUR LIMON 6X1.5 LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225310,
            "name": "SECRETO PERUANO SOUR ZERO 12X700",
            "subcategory_id": 1139
        },
        {
            "code": 10225312,
            "name": "SECRETO PERUANO MANGO 40% PROM 12X1 LT",
            "subcategory_id": 1139
        },
        {
            "code": 10225315,
            "name": "COCTEL STA MARGARITA LIMON 12 X 750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225317,
            "name": "COCTEL STA MARGARITA FRESA 12 X 750 CC",
            "subcategory_id": 1139
        },
        {
            "code": 10225320,
            "name": "COCTEL STA MARGARITA MANGO 12 X 750CC",
            "subcategory_id": 1139
        },
        {
            "code": 10227003,
            "name": "BEB ENERG MR BIG 6 X 2.5 LTS PROMOCION.",
            "subcategory_id": 1140
        },
        {
            "code": 10227007,
            "name": "BEB ENERG MR BIG 6 X 1.5 LT",
            "subcategory_id": 1140
        },
        {
            "code": 10227014,
            "name": "BEB ENERG MR BIG 6 X 330 ML",
            "subcategory_id": 1140
        },
        {
            "code": 10227030,
            "name": "LATA MR BIG DRINK 24 X 250 ML",
            "subcategory_id": 1140
        },
        {
            "code": 10227034,
            "name": "LATA MR BIG ENERGY PANTHER 4 X6 X500 CC",
            "subcategory_id": 1140
        },
        {
            "code": 10227040,
            "name": "OXIGENE+ MAQUI CALAF MENTA TE VDE 12X475",
            "subcategory_id": 1140
        },
        {
            "code": 10227050,
            "name": "OXIGENE+ MAQUI RUIB MANDAR TE VDE 12X475",
            "subcategory_id": 1140
        },
        {
            "code": 10228005,
            "name": "ESPUMANTE CELEBRITE BRUT 6 X 750 CC",
            "subcategory_id": 1141
        },
        {
            "code": 10228007,
            "name": "ESPUMANTE CELEBRITE DEMISEC 6 X 750 CC",
            "subcategory_id": 1141
        },
        {
            "code": 10228010,
            "name": "ESPUMANTE CELEBRITE ROSE 6 X 750 CC",
            "subcategory_id": 1141
        },
        {
            "code": 10228020,
            "name": "ICE CELEBRITY CITRUS 12X355 ML",
            "subcategory_id": 1141
        },
        {
            "code": 10228025,
            "name": "ICE CELEBRITY CITRUS SUGARFREE 12X355 ML",
            "subcategory_id": 1141
        },
        {
            "code": 10228030,
            "name": "ICE CELEBRITY  BERRIES 12X355 ML",
            "subcategory_id": 1141
        },
        {
            "code": 10228040,
            "name": "ICE CELEBRITY MOJITO 12X355 ML",
            "subcategory_id": 1141
        },
        {
            "code": 10228355,
            "name": "ICE CELEBRITY MANGO 12X355 ML",
            "subcategory_id": 1141
        },
        {
            "code": 10229075,
            "name": "SPIRIT SPRITZ  24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229085,
            "name": "SPIRIT VODKA MANZANA 24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229095,
            "name": "SPIRIT MOJITO 24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229105,
            "name": "SPIRIT BLUEBERRY 24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229120,
            "name": "SPIRIT PINEAPPLE 24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229140,
            "name": "PISCO MONJE NEGRO 35G 12X700CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229145,
            "name": "PISCO MONJE NEGRO TRANSPARENTE 6X700 40°",
            "subcategory_id": 1142
        },
        {
            "code": 10229150,
            "name": "PISCO MONJE NEGRO AÑEJADO 6X700 40°",
            "subcategory_id": 1142
        },
        {
            "code": 10229200,
            "name": "PISCO LOS NICHOS 35° 12 X 750CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229205,
            "name": "PISCO LOS NICHOS 40°  12 X 750CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229210,
            "name": "PISCO ESPIRITU DEL ELQUI 40° 6 X 750 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229215,
            "name": "PISCO ESPIRITU DEL ELQUI 45° 6 X 750 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229220,
            "name": "PISCO TAMAY PREMIUM ESPECIAL 35° 6X 750C",
            "subcategory_id": 1142
        },
        {
            "code": 10229225,
            "name": "PISCO TAMAY PREMIUM RESERVADO 40° 6X750C",
            "subcategory_id": 1142
        },
        {
            "code": 10229300,
            "name": "TEQUILA SENDA DEL SEÑOR PLATINO 6X700CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229310,
            "name": "TEQUILA SENDA DEL SEÑOR ROSE 6X700CC",
            "subcategory_id": 1142
        },
        {
            "code": 10229510,
            "name": "SPIRIT PINEAPPLE 24X275 CC",
            "subcategory_id": 1142
        },
        {
            "code": 10230020,
            "name": "PISCO AVIADOR 36G 6X700CC",
            "subcategory_id": 1143
        },
        {
            "code": 10230022,
            "name": "PISCO AVIADOR 36G X700CC  (6)",
            "subcategory_id": 1143
        },
        {
            "code": 10230024,
            "name": "PISCO AVIADOR 42G X700CC  (6)",
            "subcategory_id": 1143
        },
        {
            "code": 10230025,
            "name": "PISCO AVIADOR 42G 6X700CC",
            "subcategory_id": 1143
        },
        {
            "code": 10231030,
            "name": "WHISKY CHANCELER 38° 12X1 LT",
            "subcategory_id": 1144
        },
        {
            "code": 10231035,
            "name": "CERESER SPIRIZ 11.6° 12X660 CC",
            "subcategory_id": 1144
        },
        {
            "code": 10231045,
            "name": "ESPUMANTE CERESER DURAZNO 12X660 CC",
            "subcategory_id": 1144
        },
        {
            "code": 10231050,
            "name": "ESPUMANTE CERESER FRUTOS ROJOS 12X660 CC",
            "subcategory_id": 1144
        },
        {
            "code": 10231055,
            "name": "ESPUMANTE CERESER MIXTA 4 SABORES 12X660",
            "subcategory_id": 1144
        },
        {
            "code": 10231060,
            "name": "ESPUMANTE CERESER FRUTILLA 12X660 CC",
            "subcategory_id": 1144
        },
        {
            "code": 10231235,
            "name": "WHISKEY JAMES LYON PEAR  40° 12X700 CC",
            "subcategory_id": 1144
        },
        {
            "code": 10231240,
            "name": "WHISKEY JAMES LYON BERRY 40° 12X700C",
            "subcategory_id": 1144
        },
        {
            "code": 10232001,
            "name": "CREAM BERENTZEN CARAMEL 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232005,
            "name": "CREAM BERENTZEN COFFE 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232010,
            "name": "CREAMERS BERENTZEN  PASSIONFRUIT 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232015,
            "name": "CREAMERS BERENTZEN  PIÑA COLADA 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232020,
            "name": "CREAM BERENTZEN MINT CHOCOLATE 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232025,
            "name": "WHITE BERENTZEN  CHOC. MACADAMIA 6X700ML",
            "subcategory_id": 1145
        },
        {
            "code": 10232050,
            "name": "LICOR HOLIDAY CREAM LIQUEUR 6X500CC",
            "subcategory_id": 1145
        },
        {
            "code": 10232055,
            "name": "LICOR CREAMERS PISTACHO  6X500CC",
            "subcategory_id": 1145
        },
        {
            "code": 10232060,
            "name": "TOFFE BERENTZEN TIMELESS 6X700CC",
            "subcategory_id": 1145
        },
        {
            "code": 10232065,
            "name": "CREAM BERENTZEN RASPBERRY  6X700CC",
            "subcategory_id": 1145
        },
        {
            "code": 10232070,
            "name": "TOFFE LICOR CREAMERS 6X500CC",
            "subcategory_id": 1145
        },
        {
            "code": 10232100,
            "name": "WHISKY BERENTZEN APLLE BOURBON 6X700CC",
            "subcategory_id": 1145
        },
        {
            "code": 10233001,
            "name": "CERV. RADDLER BERRY CERO 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233005,
            "name": "CERV.  RADDLER POMELO CERO 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233010,
            "name": "CERV.  RADDLER LEMON CERO 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233020,
            "name": "CERV. STEAM BREW IPA 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233025,
            "name": "CERV. STEAM BREW LEMON IPA 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233030,
            "name": "CERV. STEAM BREW RED 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233035,
            "name": "CERV. STEAM BREW SESSION IPA 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233040,
            "name": "CERV. STEAM BREW WHEAT PALE ALE 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233045,
            "name": "CERV. STEAM BREW STOUT 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233060,
            "name": "CERV. TOLL BREW FANTASTIC IPA 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233065,
            "name": "CERV.TOLL BREW HAZY W. PALE ALE 24X500C",
            "subcategory_id": 1146
        },
        {
            "code": 10233070,
            "name": "CERV. TOLL BREW POMELO 24X500CC",
            "subcategory_id": 1146
        },
        {
            "code": 10233080,
            "name": "CERV. BARRIL APOSTEL 5 LT X2 UND",
            "subcategory_id": 1146
        },
        {
            "code": 10233090,
            "name": "BEBIDA ENERGETICA HUSTLER 6 X 4 X 500 ML",
            "subcategory_id": 1147
        },
        {
            "code": 10234005,
            "name": "WHISKY CHIVAS REGAL MINIATURA 12X50C 40G",
            "subcategory_id": 1148
        },
        {
            "code": 10234007,
            "name": "WHISKY JACK DANIELS MINIATURA 10X50C 40G",
            "subcategory_id": 1148
        },
        {
            "code": 10234010,
            "name": "VODKA ABSOLUT BLUE MINUATURA 12X50C 40G",
            "subcategory_id": 1148
        },
        {
            "code": 10234015,
            "name": "PISCO MISTRAL 35° MINIATURA 12X50CC",
            "subcategory_id": 1148
        },
        {
            "code": 10234020,
            "name": "JAGERMEISTER MINIATURA 24X50CC 35G",
            "subcategory_id": 1148
        },
        {
            "code": 10234025,
            "name": "GIN BEEFEATER MINIATURA 12X50CC 40°",
            "subcategory_id": 1148
        },
        {
            "code": 10234030,
            "name": "PISCO MISTRAL NOBEL MINIATURA 12X50C 46G",
            "subcategory_id": 1148
        },
        {
            "code": 10234035,
            "name": "TEQUILA SOMBRERO NEGRO MINIATURA 12X50CC",
            "subcategory_id": 1148
        },
        {
            "code": 10234040,
            "name": "WHISKY JACK DANIELS MINIATURA 10X50CC",
            "subcategory_id": 1148
        },
        {
            "code": 10234045,
            "name": "WHISKY JACK DANIEL HONEY MINIATURA 10X50",
            "subcategory_id": 1148
        },
        {
            "code": 10234050,
            "name": "WHISKY JACK DANIELS FIRE MINIATURA 10X50",
            "subcategory_id": 1148
        },
        {
            "code": 10234055,
            "name": "WHISKY J. DANIELS APPLE MINIATURA 10X50C",
            "subcategory_id": 1148
        },
        {
            "code": 10234060,
            "name": "VODKA STOLICHNAYA MINIATURA 20X50CC",
            "subcategory_id": 1148
        },
        {
            "code": 10234065,
            "name": "GIN BEEFEATER MINIATURA  12X50CC",
            "subcategory_id": 1148
        },
        {
            "code": 10234070,
            "name": "GIN HENDRICKS MINIATURA 12X50G",
            "subcategory_id": 1148
        },
        {
            "code": 10234075,
            "name": "LICOR DE CREMA CAROLANS MINIATURA 12X50C",
            "subcategory_id": 1148
        },
        {
            "code": 10235001,
            "name": "CERV IMP DARGUNER PREMIUN 6X4X330C",
            "subcategory_id": 1149
        },
        {
            "code": 10235002,
            "name": "ESPUMANTE OPERA PINK MOSCATO 12X750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235006,
            "name": "ESPUMANTE OPERA BLUE MOSCATO 12X750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235011,
            "name": "ESPUMANTE OPERA GOLD MOSCATO 12X750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235016,
            "name": "ESPUMANTE OPERA LOVE BLACKBERRIES 12X750",
            "subcategory_id": 1149
        },
        {
            "code": 10235021,
            "name": "APERITIVO OPERA SPRITZ 12X750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235025,
            "name": "ESPUMANTE OPERA  BRUT 12X750CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235030,
            "name": "VODKA SPARKLING NUVO 1X750ML",
            "subcategory_id": 1149
        },
        {
            "code": 10235040,
            "name": " MAGIC BLUE 6 X 750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235050,
            "name": " MAGIC PINK 6 X 750 CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235060,
            "name": "RON VIEJO CALDAS ROBLE BLCO 12 X 700 ML",
            "subcategory_id": 1149
        },
        {
            "code": 10235063,
            "name": "RONVIEJO CALDAS BLANCO C/COCTELERA X700C",
            "subcategory_id": 1149
        },
        {
            "code": 10235070,
            "name": "RONVIEJO CALDAS 5AÑOS C/COCTELERA X700ML",
            "subcategory_id": 1149
        },
        {
            "code": 10235300,
            "name": "AGUARDIENTE ANTIOQUEÑO S/AZUCAR X 750CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235400,
            "name": "WHISKY SIR EDWARDS X2000CC 40G",
            "subcategory_id": 1149
        },
        {
            "code": 10235500,
            "name": "COCTEL ROMEO JULIETA ROSATO SPRITZ X750C",
            "subcategory_id": 1149
        },
        {
            "code": 10235550,
            "name": "COCTEL ROMEO JULIETA CAPRI SPRITZ X750CC",
            "subcategory_id": 1149
        },
        {
            "code": 10235560,
            "name": "COCTEL ROMEO JULIETA DI BOSCO SPRIT X750",
            "subcategory_id": 1149
        },
        {
            "code": 10235600,
            "name": "COGNAC HENNESSY V.S 12X700CC 40G",
            "subcategory_id": 1149
        },
        {
            "code": 10235605,
            "name": "COGNAC HENNESSY V.S O P 12X700CC 40G",
            "subcategory_id": 1149
        },
        {
            "code": 10236005,
            "name": "TEQUILA FRIDA CATRINA C/GUSANO 12X1LT",
            "subcategory_id": 1135
        },
        {
            "code": 10236010,
            "name": "LICOR WHITE WOLF 12X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10236015,
            "name": "LICOR TRIPLE SEC TRES PLUMAS 6X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10236020,
            "name": "ESPUMANTE CARMELA DEMISEC 12X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10236025,
            "name": "ESPUMANTE CARMELA BRUT 12X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10236030,
            "name": "ESPUMANTE CARMELA ROSE 12X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10236035,
            "name": "ESPUMANTE CARMELA MOSCATO 12X750 CC",
            "subcategory_id": 1135
        },
        {
            "code": 10238001,
            "name": "VODKA PL FINEST PREMIUN 12X700 ML 40G",
            "subcategory_id": 1150
        },
        {
            "code": 10238005,
            "name": "VODKA PL CRANBERRY 12X700 ML 40G",
            "subcategory_id": 1150
        },
        {
            "code": 10238010,
            "name": "VODKA PL GREEN APPLE 12X700 ML 40G",
            "subcategory_id": 1150
        },
        {
            "code": 10238015,
            "name": "VODKA PL PERA 12X700 ML 40G",
            "subcategory_id": 1150
        },
        {
            "code": 10238020,
            "name": "VODKA PL BLACK 12X700 ML",
            "subcategory_id": 1150
        },
        {
            "code": 10238025,
            "name": "RON BOTRAN AÑEJO 5 AÑOS 12 X LT",
            "subcategory_id": 1150
        },
        {
            "code": 10238030,
            "name": "RON BRUGAL XU 40 12 X 750C",
            "subcategory_id": 1150
        },
        {
            "code": 10238035,
            "name": "VINO SOL DE CHIL GR RESERVA CS SY 12X750",
            "subcategory_id": 1151
        },
        {
            "code": 10238040,
            "name": "VINO SOL DE CHIL GR RESERVA CS CR 12X750",
            "subcategory_id": 1151
        },
        {
            "code": 10238045,
            "name": "VINO SOL DE CHIL GR RESERVA CS ME 12X750",
            "subcategory_id": 1151
        },
        {
            "code": 10238050,
            "name": "VINO SOL DE CHILE RESERVA CR 12X750",
            "subcategory_id": 1151
        },
        {
            "code": 10238055,
            "name": "VINO SOL DE CHILE RESERVA CS 12X750",
            "subcategory_id": 1151
        },
        {
            "code": 10238060,
            "name": "VINO CAM. DE CHILE TINTO DULCE 6X1.5LT",
            "subcategory_id": 1151
        },
        {
            "code": 10238065,
            "name": "VINO CAM. DE CHILE BOT CABERNET 6X1.5LT",
            "subcategory_id": 1151
        },
        {
            "code": 10238070,
            "name": "VINO CAM. DE CHILE BOT MERLOT 6X1.5LT",
            "subcategory_id": 1151
        },
        {
            "code": 10238075,
            "name": "VINO CAM. DE CHILE BOT CARMENERE 6X1.5LT",
            "subcategory_id": 1151
        },
        {
            "code": 10238080,
            "name": "VINO CAM. DE CHILE BOT MERLOT 12X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238085,
            "name": "VINO CAM DE CHILE BOT CARMENERE 12X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238090,
            "name": "VINO CAM. DE CHILE BOT CABERNET 12X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238092,
            "name": "VINO LATE HARVEST SOL DE CHILE 12X500 ML",
            "subcategory_id": 1151
        },
        {
            "code": 10238094,
            "name": "LATE HARVEST SOL DE CHILE ROSE 12X500 ML",
            "subcategory_id": 1151
        },
        {
            "code": 10238190,
            "name": "ESP. NIÑO/A SPUNCH MANZ. S/ALCOHOL 6X750",
            "subcategory_id": 1152
        },
        {
            "code": 10238191,
            "name": "ESP. NIÑO/A SPUNCH MANZ S/ALCOHOL 12X750",
            "subcategory_id": 1152
        },
        {
            "code": 10238200,
            "name": "ESPUMANTE NIÑO DALMATINO MANZANA 6X750CC",
            "subcategory_id": 1152
        },
        {
            "code": 10238205,
            "name": "ESPUMANTE NIÑO DALMATINO FRUTILL 6X750CC",
            "subcategory_id": 1152
        },
        {
            "code": 10238210,
            "name": "ESPUMANTE NIÑO DALMATINO PIÑA 6X750CC",
            "subcategory_id": 1152
        },
        {
            "code": 10238213,
            "name": "ESPUMANTE NIÑO DALMATINO DURAZNO 6X750CC",
            "subcategory_id": 1152
        },
        {
            "code": 10238220,
            "name": "VIONELLI NORMAL AZUL (BLUE) 6X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238225,
            "name": "VIONELLI NORMAL ROSADO (PINK) 6X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238240,
            "name": "VIONELLI MARMOLEADO ROSSE 6X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238245,
            "name": "VIONELLI MARMOLEADO BLUE AZZURRO 6X750CC",
            "subcategory_id": 1151
        },
        {
            "code": 10238250,
            "name": "VIONELLI MARMOLEADO AMARILLO GOLD 6X750C",
            "subcategory_id": 1151
        },
        {
            "code": 10238300,
            "name": "CERVEZA WILD DUCK BOTELLA 24X500 CC",
            "subcategory_id": 1153
        },
        {
            "code": 10238350,
            "name": "SPIRIT VODKA HAPPY PIÑA 12X330CC",
            "subcategory_id": 1150
        },
        {
            "code": 10238355,
            "name": "SPIRIT VODKA HAPPY MOJITO 12X330CC",
            "subcategory_id": 1150
        },
        {
            "code": 10238360,
            "name": "SPIRIT VODKA HAPPY BERRI 12X330CC",
            "subcategory_id": 1150
        },
        {
            "code": 10238600,
            "name": "TEQUILA MERENDERO BLANCO 38G 12X1LT",
            "subcategory_id": 1150
        },
        {
            "code": 10238605,
            "name": "WHISKY 8PM 750MLX12 SABOR FIRE 35°",
            "subcategory_id": 1150
        },
        {
            "code": 10238610,
            "name": "WHISKY 8PM 750MLX12 SIN SABOR 40°",
            "subcategory_id": 1150
        },
        {
            "code": 10238615,
            "name": "MEZCAL RSV DELVIEJO HERRA 40° 1000CCX12",
            "subcategory_id": 1150
        },
        {
            "code": 10238620,
            "name": "VINO ESPUMANTE FRESITA 6X750ML8°",
            "subcategory_id": 1151
        },
        {
            "code": 10238625,
            "name": "VINO ESPUMANTE FRESITA BLUBERR 6X750ML8°",
            "subcategory_id": 1151
        },
        {
            "code": 10238630,
            "name": "VINO ESPUMA FRESITA LIGERO 6X750ML 5.5°",
            "subcategory_id": 1151
        },
        {
            "code": 10238633,
            "name": "ESPUMANTE CASAL DE GORCHS ORANGE 6X750CC",
            "subcategory_id": 1150
        },
        {
            "code": 10238635,
            "name": "WHISKY IRISH PEAKY BLINDER 700MLX6",
            "subcategory_id": 1150
        },
        {
            "code": 10240002,
            "name": "CREMA TEQUILA MANGO 700 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240007,
            "name": "CREMA TEQUILA FRESA 700 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240013,
            "name": "TEQUILA ORENDAIN BLANCO 750 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240018,
            "name": "TEQUILA ORENDAIN REPOSADO 750 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240021,
            "name": "COCTEL VK BLUE 24  X 275 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240026,
            "name": "COCTEL VK BLACK CHERRY 24 X 275 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240031,
            "name": "COCTEL VK ORANGE PASSION FRUITS 24 X 275",
            "subcategory_id": 1154
        },
        {
            "code": 10240036,
            "name": "COCTEL VK TROPICAL FRUITS 24 X 275 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240041,
            "name": "COCKTAIL MIX GIN MANGO 12 X 330 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240046,
            "name": "COCKTAIL MIX MOJITO 12 X 330 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240051,
            "name": "COCKTAIL MIX VODKA WILDBERRY 12 X 330 CC",
            "subcategory_id": 1154
        },
        {
            "code": 10240056,
            "name": "COCKTAIL MIX GIN PASSION FRUIT 12 X 330",
            "subcategory_id": 1154
        },
        {
            "code": 10242001,
            "name": "RON BARCELO DORADO 12X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242005,
            "name": "RON BARCELO BLANCO 12X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242010,
            "name": "RON BARCELO AÑEJO 12X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242015,
            "name": "RON BARCELO AÑEJO 12X1750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242020,
            "name": "RON BARCELO AÑEJO 6X1750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242025,
            "name": "PACK RON BARCELO + SOUR PERUANO X750 (6)",
            "subcategory_id": 1131
        },
        {
            "code": 10242030,
            "name": "RON BARCELO AÑEJO 12X1LT",
            "subcategory_id": 1131
        },
        {
            "code": 10242035,
            "name": "RON BARCELO IMPERIAL 1X750 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242040,
            "name": "RON BARCELO AÑEJO PETACON 24X350 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242050,
            "name": "TEQUILA SENDA SILVER 12X750CC 38°",
            "subcategory_id": 1131
        },
        {
            "code": 10242053,
            "name": "TEQUILA MERENDERO 12X1LT",
            "subcategory_id": 1131
        },
        {
            "code": 10242055,
            "name": "TEQUILA DEL ANTIGUO POTRERO C/GUSANO",
            "subcategory_id": 1131
        },
        {
            "code": 10242060,
            "name": "SPIRIT SPRITZ 24X275 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242065,
            "name": "SPIRIT VODKA MANZANA 24X275 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242070,
            "name": "SPIRIT WHISKY GINGER 24X275 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242075,
            "name": "SPIRIT BLUEBERRY 24X275 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10242080,
            "name": "SPIRIT PINEAPPLE 24X275 CC",
            "subcategory_id": 1131
        },
        {
            "code": 10251025,
            "name": "DAILY TRADICIONAL 5X90ML.( 10 )",
            "subcategory_id": 1155
        },
        {
            "code": 10251028,
            "name": "DAILY TRADICIONAL 5X180ML. ( 7 )",
            "subcategory_id": 1155
        },
        {
            "code": 10251030,
            "name": "DAILY TRADICIONAL 3X270ML. ( 12 )",
            "subcategory_id": 1155
        },
        {
            "code": 10251050,
            "name": "DAILY STEVIS ALULOSA 3X180ML. (7)",
            "subcategory_id": 1155
        },
        {
            "code": 10251055,
            "name": "DAILY STEVIA ALULOSA 4X270ML. (6)",
            "subcategory_id": 1155
        },
        {
            "code": 10252020,
            "name": "DAILY STEVIA 3X90 ML.( 12 )",
            "subcategory_id": 1156
        },
        {
            "code": 10252023,
            "name": "DAILY STEVIA 5X180ML.( 7 )",
            "subcategory_id": 1156
        },
        {
            "code": 10252025,
            "name": "DAILY STEVIA 3X270 ML.( 12 )",
            "subcategory_id": 1156
        },
        {
            "code": 10252027,
            "name": "DAILY STEVIA 24 X 400 ML",
            "subcategory_id": 1156
        },
        {
            "code": 10252030,
            "name": "MANJAR DAILY CON TAGATOSA 10 X 400GR",
            "subcategory_id": 1156
        },
        {
            "code": 10252035,
            "name": "MANJAR DAILY CON TAGATOSA 10 X 280GR",
            "subcategory_id": 1156
        },
        {
            "code": 10253600,
            "name": "DAILY STEVIA 5X110 TABLETAS ( 10 )",
            "subcategory_id": 1157
        },
        {
            "code": 10253602,
            "name": "DAILY STEVIA TABLETA 5X300UNDS.(5)",
            "subcategory_id": 1157
        },
        {
            "code": 10254020,
            "name": "DAILY SUCRALOSA 3X90 ML. ( 12 )",
            "subcategory_id": 1158
        },
        {
            "code": 10254023,
            "name": "DAILY SUCRALOSA 5X180 ML. ( 7 )",
            "subcategory_id": 1158
        },
        {
            "code": 10254025,
            "name": "DAILY SUCRALOSA  3X270 ML.(12)",
            "subcategory_id": 1158
        },
        {
            "code": 10255500,
            "name": "DAILY SUCRALOSA 10X 150 TABL. ( 5 )",
            "subcategory_id": 1159
        },
        {
            "code": 10255502,
            "name": "DAILY SUCRALOSA TABLETA 5X500 (5)",
            "subcategory_id": 1159
        },
        {
            "code": 10255510,
            "name": "STEVIA C/INGR. ORGANICOS 3X100 ML(3)",
            "subcategory_id": 1159
        },
        {
            "code": 10255515,
            "name": "STEVIA C/INGR. ORGANICOS 5X180 ML.(7)",
            "subcategory_id": 1159
        },
        {
            "code": 10255520,
            "name": "STEVIA C/ INGR. ORGANICOS 3X270 ML(12)",
            "subcategory_id": 1159
        },
        {
            "code": 10256017,
            "name": "GELATINA + FLAN DAILY SURTIDA 30X20 G",
            "subcategory_id": 1160
        },
        {
            "code": 10256018,
            "name": "GELATINA DAILY SURTIDA C/STEVIA 30X22.5",
            "subcategory_id": 1160
        },
        {
            "code": 10256020,
            "name": "GELATINA DAILY FRUTILLA C/STEVIA 30X22.5",
            "subcategory_id": 1160
        },
        {
            "code": 10256022,
            "name": "GELATINA DAILY NARANJA C/STEVIA 30X22.5",
            "subcategory_id": 1160
        },
        {
            "code": 10256024,
            "name": "GELATINA DAILY  FRAMB.  C/STEVIA 30X22.5",
            "subcategory_id": 1160
        },
        {
            "code": 10256026,
            "name": "GELATINA LIMON C/STEVIA 30X22.5 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256028,
            "name": "GELATINA DURAZNO C/STEVIA 30X22.5",
            "subcategory_id": 1160
        },
        {
            "code": 10256030,
            "name": "GELATINA DAILY ARAN/MORA C/ STEVIA 30X22",
            "subcategory_id": 1160
        },
        {
            "code": 10256032,
            "name": "GELATINA DAILY PIÑA C/STEVIA 30X22.5 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256036,
            "name": "FLAN DAILY CHOCOLATE C/STEVIA 30X20 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256038,
            "name": "FLAN  DAILY  CARAMELO 30X20 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256040,
            "name": "FLAN DAILY VAINILLA C/STEVIA 30X20G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256042,
            "name": "FLAN DAILY MANJAR C/STEVIA 30X20 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256048,
            "name": "FLAN DAILY TRES LECHES C/STEVIA 30.20 G.",
            "subcategory_id": 1160
        },
        {
            "code": 10256052,
            "name": "FLAN DAILY SURTIDO C/STEVIA 30 X 20 GRS",
            "subcategory_id": 1160
        },
        {
            "code": 10257300,
            "name": "JUGO POLV0 STEVIA DURAZNO 25X8G. ( 4 )",
            "subcategory_id": 1161
        },
        {
            "code": 10257302,
            "name": "JUGO POLVO STEVIA  NARJ. DAILY 25X8 G(4)",
            "subcategory_id": 1161
        },
        {
            "code": 10257304,
            "name": "JUGO POLVO STEVIA PIÑA DAILY 25X8 G. ( 4",
            "subcategory_id": 1161
        },
        {
            "code": 10257306,
            "name": "JUGO POLVO STEVIA FRUT. DAILY 25X8 G.(4)",
            "subcategory_id": 1161
        },
        {
            "code": 10257308,
            "name": "JUGO POLVO STEVIA MANZ. DAILY 25X8G. (4)",
            "subcategory_id": 1161
        },
        {
            "code": 10257310,
            "name": "JUGO POLVO STEVIA FRAMB. DAILY 25X8G.(4)",
            "subcategory_id": 1161
        },
        {
            "code": 10258045,
            "name": "AGUAS  SABORIZADAS  SURTIDAS 24 X 190 ML",
            "subcategory_id": 1162
        },
        {
            "code": 10258050,
            "name": "AGUA SABORIZADA MANZ. 24X190ML",
            "subcategory_id": 1162
        },
        {
            "code": 10258052,
            "name": "AGUA SABORIZADA NARAN. 24X190ML.",
            "subcategory_id": 1162
        },
        {
            "code": 10258054,
            "name": "AGUA SABORIZADA GRANADA 24X190ML.",
            "subcategory_id": 1162
        },
        {
            "code": 10258056,
            "name": "AGUA SABORIZADA FRUTILLA 24X190ML.",
            "subcategory_id": 1162
        },
        {
            "code": 10258058,
            "name": "AGUA SABORIZADA UVA 24X190ML.",
            "subcategory_id": 1162
        },
        {
            "code": 10258060,
            "name": "AGUA SABORIZADA PERA 24X190 ML.",
            "subcategory_id": 1162
        },
        {
            "code": 10259500,
            "name": "MARUCHAN NOODLE BEEF 12X64GR",
            "subcategory_id": 1163
        },
        {
            "code": 10259505,
            "name": "MARUCHAN NOODLE  CHICKEN 12X64GR",
            "subcategory_id": 1163
        },
        {
            "code": 10260100,
            "name": "MANTEQUILLA KUMEY 36 X 125 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260110,
            "name": "MANTEQUILLA KUMEY 20 X 250 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260115,
            "name": "MANTEQUILLA LA VAQUITA 20 X 250 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260120,
            "name": "CREMA CHANTILLY 12 X 250 GRS. PRESIDENT",
            "subcategory_id": 1164
        },
        {
            "code": 10260125,
            "name": "QUESO GAUDA LAMINADO LA VAQUITA 40 X 250",
            "subcategory_id": 1164
        },
        {
            "code": 10260130,
            "name": "QUESO MANTECOSO LAM. LA VAQUITA 40X250GR",
            "subcategory_id": 1164
        },
        {
            "code": 10260135,
            "name": "QUESO CREMA LA VAQUITA 40 X 100 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260140,
            "name": "QUESO GAUDA GRANULADO LA VAQUITA 28X250G",
            "subcategory_id": 1164
        },
        {
            "code": 10260145,
            "name": "QUESO FRESCO LA VAQUITA 15 X 400 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260150,
            "name": "QUESO GAUDA BARRA ROJO KUMEY X 5 K APROX",
            "subcategory_id": 1164
        },
        {
            "code": 10260157,
            "name": "QUESO CHANCO KUMEY BOLITAS 8 X1 KL APROX",
            "subcategory_id": 1164
        },
        {
            "code": 10260159,
            "name": "QUESO MANTECOSO KUMEY X 9 KL APROX",
            "subcategory_id": 1164
        },
        {
            "code": 10260161,
            "name": "QUESO RALLADO LA VAQUITA 30X40 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260165,
            "name": "QUESO GAUDA DESPUNTE 7 KILOS APROX",
            "subcategory_id": 1164
        },
        {
            "code": 10260200,
            "name": "LECHE CONDENSADA PARMALAT 24 X 395 GRS.",
            "subcategory_id": 1164
        },
        {
            "code": 10260205,
            "name": "CREMA DE LECHE 200GR PARMALAT X24",
            "subcategory_id": 1164
        },
        {
            "code": 10262005,
            "name": "SALSA ITALIANA EL VERGEL 36X200 GRS",
            "subcategory_id": 1165
        },
        {
            "code": 10264011,
            "name": "FRUTALISTA DURAZNO S/AZUCAR 12X4X113GR",
            "subcategory_id": 1166
        },
        {
            "code": 10264013,
            "name": "FRUTALISTA DURAZNO 12X4X113GR",
            "subcategory_id": 1166
        },
        {
            "code": 10264015,
            "name": "FRUTALISTA MANZANA 12X4X113GR",
            "subcategory_id": 1166
        },
        {
            "code": 10264017,
            "name": "FRUTALISTA MIX FRUTAS 12X4X113GR",
            "subcategory_id": 1166
        },
        {
            "code": 10266005,
            "name": "JALEA FRAMBUEZA 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10266007,
            "name": "JALEA PIÑA 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10266009,
            "name": "JALEA NARANJA 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10266015,
            "name": "JALEA PIÑA C/TROZO DUR 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10266017,
            "name": "JALEA DURAZNO C/TROZO DUR 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10266019,
            "name": "JALEA FRUTILLA C/TROZO DUR 12X4X113 GRS",
            "subcategory_id": 1167
        },
        {
            "code": 10268011,
            "name": "COMPOTA DURAZNO 8X5X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10268013,
            "name": "COMPOTA MANZANA 8X5X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10268015,
            "name": "COMPOTA PERA 8X5X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10268051,
            "name": "COMPOTA PERA CON AVENA 12X4X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10268053,
            "name": "COMPOTA MANZANA CON AVENA 12X4X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10268055,
            "name": "COMPOTA DURAZNO CON AVENA 12X4X113GR",
            "subcategory_id": 1168
        },
        {
            "code": 10270001,
            "name": "YOGURT SURLAT BATIDO SURTIDO 48X125 GR",
            "subcategory_id": 1169
        },
        {
            "code": 10270002,
            "name": "YOGURT SURLAT BATIDO MORA 48X125GR",
            "subcategory_id": 1169
        },
        {
            "code": 10270003,
            "name": "YOGURT SURLAT BATIDO DAMASCO 48X125 GR",
            "subcategory_id": 1169
        },
        {
            "code": 10270006,
            "name": "YOGURT SURLAT BATIDO VAINILLA 48X125 GR",
            "subcategory_id": 1169
        },
        {
            "code": 10270008,
            "name": "YOGURT SURLAT BATIDO FRUTILLA 48X125 GR",
            "subcategory_id": 1169
        },
        {
            "code": 10270011,
            "name": "YOGURT SURLAT BATIDO FRAMBUESA 48X125 GR",
            "subcategory_id": 1169
        },
        {
            "code": 10271019,
            "name": "QUESO CHANCO SURLAT LAMINADO X 2KL",
            "subcategory_id": 1170
        },
        {
            "code": 10271021,
            "name": "QUESO GOUDA SURLAT LAMINADO X2 KG",
            "subcategory_id": 1170
        },
        {
            "code": 10271025,
            "name": "QUESO GAUDA SURLAT X 10 KILOS",
            "subcategory_id": 1170
        },
        {
            "code": 10272001,
            "name": "LECHE ENTERA SURLAT 12X 1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10272005,
            "name": "LECHE SEMIDESCREMADA SURLAT 12X1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10272007,
            "name": "LECHE ENTERA SURLAT 6X1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10272011,
            "name": "LECHE DESCREMADA SURLAT 12X1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10272031,
            "name": "LECHE SURLAT CHOCOLATE 6X1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10272033,
            "name": "LECHE SURLAT FRUTILLA 6X 1 LT",
            "subcategory_id": 1171
        },
        {
            "code": 10273001,
            "name": "MINIBRIK CHOCOLATE PLUS SURLAT 6X200 CC",
            "subcategory_id": 1172
        },
        {
            "code": 10273003,
            "name": "MINIBRIK VAINILLA PLUS SURLAT 6X200 VENC",
            "subcategory_id": 1172
        },
        {
            "code": 10273006,
            "name": "MINIBRIK FRUTILLA PLUS SURLAT 6X200 CC",
            "subcategory_id": 1172
        },
        {
            "code": 10274001,
            "name": "MANTEQUILLA SURLAT 40X125 GRA",
            "subcategory_id": 1173
        },
        {
            "code": 10275001,
            "name": "LECHE COLUN SIN TAPA 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275003,
            "name": "LECHE COLUN SEMI DESCREMADA 12X1LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275006,
            "name": "LECHE COLUN DESCREMADA 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275009,
            "name": "LECHE COLUN EXTRA CALCIO 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275031,
            "name": "LECHE COLUN CHOCOLATE 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275033,
            "name": "LECHE COLUN VAINILLA 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275036,
            "name": "LECHE COLUN FRUTILLA 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275039,
            "name": "LECHE COLUN PLATANO 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275042,
            "name": "LECHE COLUN MANJAR 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275061,
            "name": "CREMA COLUN 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275081,
            "name": "LECHE ALERCE BOLSA 12X1 LT",
            "subcategory_id": 1174
        },
        {
            "code": 10275083,
            "name": "LECHE ALERCE SEMIDESCREMADA BOLSA 12X1 L",
            "subcategory_id": 1174
        },
        {
            "code": 10275084,
            "name": "PACK LECHE COLUN 12XLT  + ACEITE X 900CC",
            "subcategory_id": 1174
        },
        {
            "code": 10276001,
            "name": "LECHE COLUN CHOCOLATE 24X200 CC",
            "subcategory_id": 1175
        },
        {
            "code": 10276003,
            "name": "LECHE COLUN FRUTILLA 24X200",
            "subcategory_id": 1175
        },
        {
            "code": 10276006,
            "name": "LECHE COLUN PLATANO 24X200 CC",
            "subcategory_id": 1175
        },
        {
            "code": 10276009,
            "name": "LECHE COLUN VAINILLA 24X200 CC",
            "subcategory_id": 1175
        },
        {
            "code": 10276012,
            "name": "LECHE COLUN MANJAR 24X200 CC",
            "subcategory_id": 1175
        },
        {
            "code": 10276020,
            "name": "LECHE CHOCOLATE RIKITO 24X200CC",
            "subcategory_id": 1175
        },
        {
            "code": 10277001,
            "name": "NECTAR COLUN DAMASCO 24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10277003,
            "name": "NECTAR COLUN NARANJA 24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10277006,
            "name": "NECTAR COLUN PINA 24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10277009,
            "name": "NECTAR COLUN DURAZNO 24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10277012,
            "name": "NECTAR  COLUN MANZANA 24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10277041,
            "name": "NECTAR COLUN SURTIDOS  24X200 CC",
            "subcategory_id": 1176
        },
        {
            "code": 10278001,
            "name": "NECTAR COLUN DAMASCO 12X1 LT",
            "subcategory_id": 1177
        },
        {
            "code": 10278003,
            "name": "NECTAR COLUN  NARANJA 12X1 LT",
            "subcategory_id": 1177
        },
        {
            "code": 10278006,
            "name": "NECTAR COLUN PIÑA 12X1 LT",
            "subcategory_id": 1177
        },
        {
            "code": 10278009,
            "name": "NECTAR COLUN DURAZNO 12X1 LT",
            "subcategory_id": 1177
        },
        {
            "code": 10278012,
            "name": "NECTAR COLUN MANZANA 12X1 LT",
            "subcategory_id": 1177
        },
        {
            "code": 10279001,
            "name": "YOGURT PIÑA 1 LT",
            "subcategory_id": 1178
        },
        {
            "code": 10279003,
            "name": "YOGURT FRUTILLA 1 KL",
            "subcategory_id": 1178
        },
        {
            "code": 10279006,
            "name": "YOGURT VAINILLA 1LT",
            "subcategory_id": 1178
        },
        {
            "code": 10279031,
            "name": "YOGURT LOS ALERCES FRUTILLA 48X125 CC",
            "subcategory_id": 1178
        },
        {
            "code": 10279033,
            "name": "YOGURT LOS ALERCES FRAMBUEZA 48X125 CC",
            "subcategory_id": 1178
        },
        {
            "code": 10279036,
            "name": "YOGURT LOS ALERCES DAMASCO 48X125 CC",
            "subcategory_id": 1178
        },
        {
            "code": 10280005,
            "name": "MANTEQUILLA LA VAQUITA 40 X 125 GRS",
            "subcategory_id": 1179
        },
        {
            "code": 10280007,
            "name": "QUESO MANTE. LAM. LA VAQUITA X 250 GR(4)",
            "subcategory_id": 1179
        },
        {
            "code": 10280009,
            "name": "QUESO GAUDA LAM. LA VAQUITA X 250GR(4)",
            "subcategory_id": 1179
        },
        {
            "code": 10280011,
            "name": "QUESO GAUDA BARRA LA VAQUITA X4KL",
            "subcategory_id": 1179
        },
        {
            "code": 10280013,
            "name": "QUESO MANTECOSO BARRA LA VAQUITAX KL",
            "subcategory_id": 1179
        },
        {
            "code": 10283001,
            "name": "MANJAR COLUN POTE 24X200 GR",
            "subcategory_id": 1180
        },
        {
            "code": 10283003,
            "name": "MANJAR COLUN BOLSA 36X250 GR",
            "subcategory_id": 1180
        },
        {
            "code": 10283011,
            "name": "MANJAR COLUN BOLSA 9X1 KL",
            "subcategory_id": 1180
        },
        {
            "code": 10283015,
            "name": "MANJAR COLUN POTE 24 X 400GR",
            "subcategory_id": 1180
        },
        {
            "code": 10283031,
            "name": "MANJAR LOS ALERCES 9X1 KL",
            "subcategory_id": 1180
        },
        {
            "code": 10285001,
            "name": "QUESO RALLADO COLUN 30X40 GR (12)",
            "subcategory_id": 1181
        },
        {
            "code": 10285011,
            "name": "QUESO CREMA NATURAL COLUN 40X100 GR",
            "subcategory_id": 1181
        },
        {
            "code": 10285021,
            "name": "QUESO EDAN T-500 X 1KL",
            "subcategory_id": 1181
        },
        {
            "code": 10285031,
            "name": "QUESO RANCO LAMINADO 2 .5",
            "subcategory_id": 1181
        },
        {
            "code": 10285033,
            "name": "QUESO COLUN GAUDA LAMINADO X 1KL",
            "subcategory_id": 1181
        },
        {
            "code": 10285035,
            "name": "QUESO RANCO LAMINADO X 1KL",
            "subcategory_id": 1181
        },
        {
            "code": 10285040,
            "name": "GAUDA LAMINADO X 500",
            "subcategory_id": 1181
        },
        {
            "code": 10285045,
            "name": "QUESO COLUN RANCO LAMINADO 6 X 1KL",
            "subcategory_id": 1181
        },
        {
            "code": 10285050,
            "name": "QUESO RANCO LAMINADO ESTUCHE 16  X150G",
            "subcategory_id": 1181
        },
        {
            "code": 10285055,
            "name": "QUESO COLUN RANCO LAMINADO BOLSA16 X150G",
            "subcategory_id": 1181
        },
        {
            "code": 10287011,
            "name": "MANI SABU SALADO 24X100 GRS",
            "subcategory_id": 1182
        },
        {
            "code": 10287012,
            "name": "MANI SABU SALADO 24X200 GRS",
            "subcategory_id": 1182
        },
        {
            "code": 10287013,
            "name": "MANI SABU SALADO 20X22 GRS(10)",
            "subcategory_id": 1182
        },
        {
            "code": 10287015,
            "name": "MANI SABU JAPONES 20X30 GR(10)",
            "subcategory_id": 1182
        },
        {
            "code": 10287017,
            "name": "MANI SABU CONFITADO 20X22GRS(10)",
            "subcategory_id": 1182
        },
        {
            "code": 10287031,
            "name": "ALFAJOR 21 DE TRES CAPAS CAFE 20X60GR",
            "subcategory_id": 1182
        },
        {
            "code": 10287035,
            "name": "TORTAZO 21 BISCOCHUELO 20X70GR",
            "subcategory_id": 1182
        },
        {
            "code": 10287039,
            "name": "TORTA 21 SELVA NEGRA 20X65GR",
            "subcategory_id": 1182
        },
        {
            "code": 10287041,
            "name": "MALVAVISCO MINI CLUBBER 20X8GR",
            "subcategory_id": 1182
        },
        {
            "code": 10290002,
            "name": "CAROZZI MARIPOSA 48X250 GR",
            "subcategory_id": 1183
        },
        {
            "code": 10290003,
            "name": "CAROZZI ALFABETO 48X250 GR",
            "subcategory_id": 1183
        },
        {
            "code": 10290006,
            "name": "CAROZZI OJO DE DIUCA 48X250 GR",
            "subcategory_id": 1183
        },
        {
            "code": 10290009,
            "name": "CAROZZI GRANIZO 48X250 GR",
            "subcategory_id": 1183
        },
        {
            "code": 10290012,
            "name": "CAROZZI DEDALITO 48X250 GR",
            "subcategory_id": 1183
        },
        {
            "code": 10290275,
            "name": "FENTIMANS GINGER ALE 24X200CC",
            "subcategory_id": 1183
        },
        {
            "code": 10291001,
            "name": "CAROZZI SPAGHETTI 25X400 GR",
            "subcategory_id": 1184
        },
        {
            "code": 10291002,
            "name": "CAROZZI TALLARIN 87 25X400GRS.",
            "subcategory_id": 1184
        },
        {
            "code": 10291015,
            "name": "CAROZZI  SPAGHETTI  PACK 5X400 GRS",
            "subcategory_id": 1184
        },
        {
            "code": 10291031,
            "name": "CAROZZI TALLARIN 87  PACK 5X400 GRS.",
            "subcategory_id": 1184
        },
        {
            "code": 10291032,
            "name": "CAROZZI ESPIRALES  PACK  5X400 GRS",
            "subcategory_id": 1184
        },
        {
            "code": 10291033,
            "name": "CAROZZI  CORBATA PACK  5X400 GRS",
            "subcategory_id": 1184
        },
        {
            "code": 10291036,
            "name": "CAROZZI CABELLO 30X400 GR",
            "subcategory_id": 1184
        },
        {
            "code": 10291038,
            "name": "CAROZZI CABELLO 5X400 GRS.",
            "subcategory_id": 1184
        },
        {
            "code": 10291039,
            "name": "CAROZZI MOSTACCIOLI 30X400 GR",
            "subcategory_id": 1184
        },
        {
            "code": 10291040,
            "name": "CAROZZI MOSTACHOLI 5X400 GRS.",
            "subcategory_id": 1184
        },
        {
            "code": 10291046,
            "name": "CAROZZI RIGATONI  5X400 GRS.",
            "subcategory_id": 1184
        },
        {
            "code": 10291048,
            "name": "CAROZZI RIGATONI 30X400 GR",
            "subcategory_id": 1184
        },
        {
            "code": 10293001,
            "name": "SALSA SAN REMO 24X200 CC",
            "subcategory_id": 1185
        },
        {
            "code": 10293011,
            "name": "SALSA POMAROLA CAROZZI 24X200 CC",
            "subcategory_id": 1185
        },
        {
            "code": 10293015,
            "name": "SALSA POMAROLA ITALIANA 10X1KG",
            "subcategory_id": 1185
        },
        {
            "code": 10293031,
            "name": "ARROZ  MIRAFLORES PRE-GRAN 10X500 GR",
            "subcategory_id": 1185
        },
        {
            "code": 10293035,
            "name": "ARROZ  MIRAFLORES PRE-GRAN 10X1KG",
            "subcategory_id": 1185
        },
        {
            "code": 10293051,
            "name": "ARROZ  MIRAFLORES G1 10X500 GR",
            "subcategory_id": 1185
        },
        {
            "code": 10293061,
            "name": "ARROZ MIRAFLORES G1 10X1 KL",
            "subcategory_id": 1185
        },
        {
            "code": 10293091,
            "name": "SEMOLA CAROZZI 10X250 GR",
            "subcategory_id": 1185
        },
        {
            "code": 10293093,
            "name": "SEMOLA CAROZZI 20X500 GR",
            "subcategory_id": 1185
        },
        {
            "code": 10295037,
            "name": "GELATINA AMBROSLOLI NARANAJA 8X50GRS.(6)",
            "subcategory_id": 1186
        },
        {
            "code": 10295038,
            "name": "GELATINA AMBROSOLI RAMBUEZA 8X50GRS.(6)",
            "subcategory_id": 1186
        },
        {
            "code": 10295040,
            "name": "GELATINA AMBROSLI  NARANJA 20X100GRS.",
            "subcategory_id": 1186
        },
        {
            "code": 10295042,
            "name": "GELATINA AMBROSOLI CEREZA 20X100GRS.",
            "subcategory_id": 1186
        },
        {
            "code": 10295044,
            "name": "GELATINA AMBROSOLI PIÑA 20X100 GRS.",
            "subcategory_id": 1186
        },
        {
            "code": 10295046,
            "name": "GELATINA AMBROSOLI FRAMBUESA 20X100GRS.",
            "subcategory_id": 1186
        },
        {
            "code": 10295048,
            "name": "GELATINA AMBROSOLI  FRUTILLA 20X100 GRS.",
            "subcategory_id": 1186
        },
        {
            "code": 10297001,
            "name": "CARICIA NARANJA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297003,
            "name": "CARICIA PIÑA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297006,
            "name": "CARICIA GUINDA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297009,
            "name": "CARICIA FRUTILLA  X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297012,
            "name": "CARICIA NARANJA PLATANO X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297015,
            "name": "CARICIA PERA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297018,
            "name": "CARICIA PAPAYA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297021,
            "name": "CARICIA FRAMBUEZA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297023,
            "name": "CARICIA DURAZNO X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297026,
            "name": "CARICIA DAMASCO X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297029,
            "name": "CARICIA MELON TUNA X20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10297032,
            "name": "CARICIA MANGO X 20 UNI",
            "subcategory_id": 1187
        },
        {
            "code": 10299100,
            "name": "SPRIM NARANJA X10 UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299110,
            "name": "SPRIM DAMASCO X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299115,
            "name": "SPRIM DURAZNO X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299120,
            "name": "SPRIM DURAZNO NECTARIN  X10 UNI (8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299125,
            "name": "SPRIM PIÑA X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299130,
            "name": "SPRIM FRUTILLA X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299135,
            "name": "SPRIM FRAMBUEZA X10 UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299140,
            "name": "SPRIM MANZANA FUJI X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299145,
            "name": "SPRIM NARANJA MIX CHIRIMOYA X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299150,
            "name": "SPRIM NARANJA PLATANO X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299155,
            "name": "SPRIM MANGO X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299160,
            "name": "SPRIM MELON TUNA X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299165,
            "name": "SPRIM PAPAYA X10UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299170,
            "name": "SPRIM MULTIFRUTA  X10(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299175,
            "name": "SPRIM LIMON DE PICA  X10UNI (8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299180,
            "name": "SPRIM DURAZNO/HUESILLO X10 UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299185,
            "name": "SPRIM PEPINO DULCE X10 UN (8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299190,
            "name": "SPRIM MANZANA X10 UN(8)",
            "subcategory_id": 1188
        },
        {
            "code": 10299200,
            "name": "SPRIM FRUTILLA 2 X 50 UDS",
            "subcategory_id": 1188
        },
        {
            "code": 10300001,
            "name": "NECTAR VIVO PIÑA 24X190ML",
            "subcategory_id": 1189
        },
        {
            "code": 10300002,
            "name": "NECTAR VIVO MANZANA 24X190ML.",
            "subcategory_id": 1189
        },
        {
            "code": 10300003,
            "name": "NECTAR VIVO BERRIES 24X190 ML.",
            "subcategory_id": 1189
        },
        {
            "code": 10300005,
            "name": "NECTAR VIVO NARANJA 24X190ML",
            "subcategory_id": 1189
        },
        {
            "code": 10300008,
            "name": "NECTAR VIVO DURAZNO 24X190ML.",
            "subcategory_id": 1189
        },
        {
            "code": 10300030,
            "name": "NECTAR VIVO NARANJA 12X 1 LT.",
            "subcategory_id": 1189
        },
        {
            "code": 10300032,
            "name": "NECTAR VIVO PIÑA 12X1 LT.",
            "subcategory_id": 1189
        },
        {
            "code": 10300035,
            "name": "NECTAR VIVO DURAZNO 12X1 LT.",
            "subcategory_id": 1189
        },
        {
            "code": 10301001,
            "name": "VIVO NARANJA X10 UNI(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301003,
            "name": "VIVO DURAZNO X10 UNI(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301005,
            "name": "VIVO BERRIES X 10 UNID(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301008,
            "name": "VIVO MANZANA X10 (8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301009,
            "name": "VIVO PIÑA X10 UNI(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301010,
            "name": "VIVO FRUTILLA X 10 UNI(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301012,
            "name": "VIVO MANGO  X10 (8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301015,
            "name": "VIVO LIMONADA X10 UN(8)",
            "subcategory_id": 1190
        },
        {
            "code": 10301050,
            "name": "VIVO NARANJA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301053,
            "name": "VIVO DURAZNO X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301059,
            "name": "VIVO FRUTOS VERDES X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301062,
            "name": "VIVO MANZANA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301065,
            "name": "VIVO PIÑA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301068,
            "name": "VIVO FRUTILLA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301071,
            "name": "VIVO MANGO X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301074,
            "name": "VIVO ARANDANO CIRUELA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301077,
            "name": "VIVO LIMONADA X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301080,
            "name": "VIVO DURAZNO HUESILLO X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10301083,
            "name": "VIVO SURTIDO X100 UDS",
            "subcategory_id": 1190
        },
        {
            "code": 10302001,
            "name": "VIVO SPAGHETTI 25X350 GRS",
            "subcategory_id": 1191
        },
        {
            "code": 10302003,
            "name": "VIVO ESPIRAL 30X350 GRS",
            "subcategory_id": 1191
        },
        {
            "code": 10302005,
            "name": "VIVO CORBATA 30X350 GRS",
            "subcategory_id": 1191
        },
        {
            "code": 10302007,
            "name": "VIVO RIGATONI 30 X 350 GRS",
            "subcategory_id": 1191
        },
        {
            "code": 10302009,
            "name": "VIVO FARFALLE 30 X 350 GRS",
            "subcategory_id": 1191
        },
        {
            "code": 10303001,
            "name": "NECTAR SPRIM DAMASCO 24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10303003,
            "name": "NECTAR SPRIM DURAZNO 24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10303006,
            "name": "NECTAR SPRIM NARANJA 24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10303009,
            "name": "NECTAR SPRIM PIÑA 24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10303012,
            "name": "NECTAR SPRIM MANZANA 24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10303015,
            "name": "NECTAR SPRIM BERRIES  24X190 CC",
            "subcategory_id": 1192
        },
        {
            "code": 10305001,
            "name": "ACONCAGUA SPAGHETTI 25X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305003,
            "name": "ACONCAGUA TALLARIN 25X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305005,
            "name": "ACONCAGUA CORBATA 30X400 GRS.",
            "subcategory_id": 1193
        },
        {
            "code": 10305021,
            "name": "ACONCAGUA DEDAL 30X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305023,
            "name": "ACONCAGUA CARACOL 30X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305026,
            "name": "ACONCAGUA CABELLO 30X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305029,
            "name": "ACONCAGUA MOSTACCIOLI 30X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10305032,
            "name": "ACONCAGUA ESPIRAL 30X400 GR",
            "subcategory_id": 1193
        },
        {
            "code": 10307001,
            "name": "PARMA SPAGHETTI Nº 5 25X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307003,
            "name": "PARMA TALLARIN Nº87 25X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307006,
            "name": "PARMA TALLARIN Nº97 25X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307009,
            "name": "PARMA CORBATA 25X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307012,
            "name": "PARMA CABELLO LARGO 25X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307031,
            "name": "PARMA CABELLO CORTO 30X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307033,
            "name": "PARMA ESPIRAL 30X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307036,
            "name": "PARMA MOSTACCIOLI 30X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307039,
            "name": "PARMA RIGATINIS 30X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307051,
            "name": "PARMA SPAGHETTI Nº5 10X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307053,
            "name": "PARMA TALLARIN Nº87 10X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307056,
            "name": "PARMA TALLARIN Nº97 10X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307059,
            "name": "PARMA CABELLO LARGO 10X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10307062,
            "name": "PARMA CORBATA 10X400 GR",
            "subcategory_id": 1194
        },
        {
            "code": 10310001,
            "name": "LUCCHETTI CARACOLITO 48X250 GR",
            "subcategory_id": 1195
        },
        {
            "code": 10310003,
            "name": "LUCCHETTI LETRITAS 48X250 GR",
            "subcategory_id": 1195
        },
        {
            "code": 10310006,
            "name": "LUCCHETTI MARIPOSA Nº81 48X250 GR",
            "subcategory_id": 1195
        },
        {
            "code": 10311001,
            "name": "PACK SPAGHETTI LUCCHETTI 5X400 GR+SALSA",
            "subcategory_id": 1196
        },
        {
            "code": 10311003,
            "name": "LUCCHETTI TALLARIN 25X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311021,
            "name": "PACK ESPIRAL LUCCHETTI 5X400GR+ACEITE",
            "subcategory_id": 1196
        },
        {
            "code": 10311023,
            "name": "LUCCHETTI SPAGHETTI  25X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311026,
            "name": "LUCCHETTI MOSTACCIOLI 30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311029,
            "name": "LUCCHETTI QUIFAROS 30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311032,
            "name": "LUCCHETTI CORBATITA 83 30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311035,
            "name": "LUCCHETTI CORBATA 88  30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311038,
            "name": "LUCCHETTI RIGATTI 30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10311041,
            "name": "LUCCHETTI CANUTO 30X400 GR",
            "subcategory_id": 1196
        },
        {
            "code": 10312010,
            "name": "SOPAS NATUREZZA P/FIDEOS 5X70GR.+REG.",
            "subcategory_id": 1197
        },
        {
            "code": 10312012,
            "name": "SOPAS NATUREZZA P/ARROZ 5X70GR.+REG.",
            "subcategory_id": 1197
        },
        {
            "code": 10312014,
            "name": "SOPAS NATUREZZA COSTILLA/F. 5X72GR.+REG.",
            "subcategory_id": 1197
        },
        {
            "code": 10312016,
            "name": "SOPAS NATUREZZA CARACOLITO 5X76 GR.+REG.",
            "subcategory_id": 1197
        },
        {
            "code": 10313001,
            "name": "ROMANO SPAGHETTI 25X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313003,
            "name": "ROMANO TALLARIN 25X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313021,
            "name": "ROMANO ESPIRALES 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313023,
            "name": "ROMANO CABELLITOS 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313026,
            "name": "ROMANO MOSTACCIOLI 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313029,
            "name": "ROMANO QUIFAROS 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313032,
            "name": "ROMANO CARAROL 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313035,
            "name": "ROMANO DEDALITO 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10313038,
            "name": "ROMANO CORBATA 30X400 GR",
            "subcategory_id": 1198
        },
        {
            "code": 10315001,
            "name": "SALSA LUCCHETTI 24X200 CC",
            "subcategory_id": 1199
        },
        {
            "code": 10315010,
            "name": "SALSA DE TOMATE NAPOLI 24X200 GR",
            "subcategory_id": 1199
        },
        {
            "code": 10315031,
            "name": "HARINA LUCCHETTI SIN POLVO 12X1 KL",
            "subcategory_id": 1199
        },
        {
            "code": 10315051,
            "name": "ACEITE ACETO BALSAMICO 12X500 CC",
            "subcategory_id": 1199
        },
        {
            "code": 10317001,
            "name": "MONTERREY 6X40 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317003,
            "name": "MONTERREY 24X50 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317006,
            "name": "MONTERREY GOLD SOBRE  20X2 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317007,
            "name": "GOLD SOBRE 96X2 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317009,
            "name": "MONTERREY 24X170 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317012,
            "name": "MONTERREY GOLD 6X50",
            "subcategory_id": 1200
        },
        {
            "code": 10317031,
            "name": "CAFE GOLD 24X100 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317033,
            "name": "CAFE GOLD 24X170 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317051,
            "name": "TEMPO 24X100 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317053,
            "name": "TEMPO 24X170 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317071,
            "name": "CORONADO 24X50 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317073,
            "name": "CORONADO 24X100 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317076,
            "name": "CORONADO BOLSA 24X170 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317079,
            "name": "CORONADO 24X170 GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317080,
            "name": "CAFE GOLD TENTACION CREMOSSINO 8X15GR",
            "subcategory_id": 1200
        },
        {
            "code": 10317082,
            "name": "CAFE GOLD TENTACION VAINILLA 8X19GR",
            "subcategory_id": 1200
        },
        {
            "code": 10319001,
            "name": "ZUKO NARANJA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319003,
            "name": "ZUKO DAMASCO X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319006,
            "name": "ZUKO DURAZNO X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319009,
            "name": "ZUKO FRUTILLA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319012,
            "name": "ZUKO PINA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319015,
            "name": "ZUKO MANZANA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319018,
            "name": "ZUKO GUARANA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319021,
            "name": "ZUKO ARANDANO ROJO X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319023,
            "name": "ZUKO HUESILLO X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319026,
            "name": "ZUKO MELON TUNA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319029,
            "name": "ZUKO KIWI X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319032,
            "name": "ZUKO NARANJA PLATANO X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319035,
            "name": "ZUKO FRAMBUEZA X10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10319037,
            "name": "ZUKO SANDIA X 10 UNI.",
            "subcategory_id": 1201
        },
        {
            "code": 10319039,
            "name": "ZUKO NARANJA CHIRIMOYA X10",
            "subcategory_id": 1201
        },
        {
            "code": 10319041,
            "name": "GO ZUKO SURTIDO 10 X60 GRS.",
            "subcategory_id": 1201
        },
        {
            "code": 10319043,
            "name": "ZUKO CITRICO DULCE X 10 UNI",
            "subcategory_id": 1201
        },
        {
            "code": 10320001,
            "name": "CHAMPIÑON ENTERO ARUBA 24X184 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320004,
            "name": "CHAMPIÑON  ENTERO ARUBA 24X400 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320008,
            "name": "CHAMPIÑON LAMINADO  ARUBA 24X400 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320010,
            "name": "PLAMITOS ENTERO ARUBA 12X800 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320012,
            "name": "PALMITOS ENTEROS ARUBA 24X400",
            "subcategory_id": 1202
        },
        {
            "code": 10320015,
            "name": "PALMITOS MEDALLONES ARUBA 12X800 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320018,
            "name": "ATUN LOMITOS AL AGUA ARUBA 24X400 GRS.",
            "subcategory_id": 1202
        },
        {
            "code": 10320025,
            "name": "ATUN LOMITOS AL ACEITE  ARUBA 24X567 GRS",
            "subcategory_id": 1202
        },
        {
            "code": 10320036,
            "name": "YERBA MATE ARUBA BOLSA 5 KILOS (5)",
            "subcategory_id": 1202
        },
        {
            "code": 10320040,
            "name": "ACEITE BIDON ARUBA X5 LTS.( 4 )",
            "subcategory_id": 1202
        },
        {
            "code": 10320042,
            "name": "BOLSA BASURA CHACAO 5X80X110 (3)",
            "subcategory_id": 1202
        },
        {
            "code": 10320044,
            "name": "BOLSA  BASURA CHACAO 5X70X90 (5)",
            "subcategory_id": 1202
        },
        {
            "code": 10320046,
            "name": "BOLSA BASURA CHACAO 5X50X70 (10)",
            "subcategory_id": 1202
        },
        {
            "code": 10320050,
            "name": "ARVEJAS PARTIDAS ARUBA 10X1 KILO",
            "subcategory_id": 1202
        },
        {
            "code": 10320055,
            "name": "LENTEJAS 6 MM. ARUBA 10X1 KILO",
            "subcategory_id": 1202
        },
        {
            "code": 10320080,
            "name": "ALPISTE SACO X 25 KILOS",
            "subcategory_id": 1202
        },
        {
            "code": 10320085,
            "name": "LINAZA SACO 25 KILOS",
            "subcategory_id": 1202
        },
        {
            "code": 10320090,
            "name": "MARAVILLA SACO 25 KILOS",
            "subcategory_id": 1202
        },
        {
            "code": 10320095,
            "name": "MIJO SACO 25 KILOS",
            "subcategory_id": 1202
        },
        {
            "code": 10321001,
            "name": "YUPI NARANJA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321003,
            "name": "YUPI DAMASCO X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321006,
            "name": "YUPI DURAZNO X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321009,
            "name": "YUPI PIÑA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321012,
            "name": "YUPI PAPAYA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321015,
            "name": "YUPI FRAMBUESA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321018,
            "name": "YUPI FRUTILLA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321021,
            "name": "YUPI GUINDA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321023,
            "name": "YUPI CHIRIMOYA ALEGRE X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321026,
            "name": "YUPI NARANJA PLATANO X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10321029,
            "name": "YUPI LIMONADA X20 UNI",
            "subcategory_id": 1203
        },
        {
            "code": 10323001,
            "name": "LIVEAN NARANJA X10 UNI",
            "subcategory_id": 1204
        },
        {
            "code": 10323003,
            "name": "LIVEAN DURAZNO X10 UNI",
            "subcategory_id": 1204
        },
        {
            "code": 10323006,
            "name": "LIVEAN PIÑA X10 UNI",
            "subcategory_id": 1204
        },
        {
            "code": 10323009,
            "name": "LIVEAN MANZANA X10 UNI",
            "subcategory_id": 1204
        },
        {
            "code": 10323010,
            "name": "LIVIAN PERA X10 UNI",
            "subcategory_id": 1204
        },
        {
            "code": 10323012,
            "name": "LIVEAN MANGO X10 UNID.",
            "subcategory_id": 1204
        },
        {
            "code": 10323015,
            "name": "LIVEAN FRUTILLA X 10 UNID.",
            "subcategory_id": 1204
        },
        {
            "code": 10324001,
            "name": "NECTAR YUZ NARANJA 24X200 CC",
            "subcategory_id": 1205
        },
        {
            "code": 10324003,
            "name": "NECTAR YUZ PIÑA 24X200 CC",
            "subcategory_id": 1205
        },
        {
            "code": 10324006,
            "name": "NECTAR YUZ DURAZNO 24X200 CC",
            "subcategory_id": 1205
        },
        {
            "code": 10324009,
            "name": "NECTAR YUZ DAMASCO 24X200 CC",
            "subcategory_id": 1205
        },
        {
            "code": 10324012,
            "name": "NECTAR YUZ MANZANA 24X200 CC",
            "subcategory_id": 1205
        },
        {
            "code": 10325001,
            "name": "CHANTILLY 12X250 GR",
            "subcategory_id": 1206
        },
        {
            "code": 10325003,
            "name": "CHANTILLY 12X500 GR",
            "subcategory_id": 1206
        },
        {
            "code": 10325021,
            "name": "PAPAS KRYZPO 6 X 40 GRS",
            "subcategory_id": 1206
        },
        {
            "code": 10325023,
            "name": "PAPAS KRYZPO 24 X 80 GRS",
            "subcategory_id": 1206
        },
        {
            "code": 10325030,
            "name": "PAPAS KRIZPO 14X160 GRS.",
            "subcategory_id": 1206
        },
        {
            "code": 10325035,
            "name": "PAPAS KRYZPO EXIBIDOR 24X40 GRS",
            "subcategory_id": 1206
        },
        {
            "code": 10326001,
            "name": "JUG TURBO PLUS 2 LT DURAZNO 10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326003,
            "name": "JUG TURBO PLUS 2 LT FRUTILLA10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326005,
            "name": "JUG TURBO PLUS 2 LT NARANJA 10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326007,
            "name": "JUG TURBO PLUS 2 LT PIÑA 10X20 GR (16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326009,
            "name": "JUG TURBO PLUS 2 LT HUESILLO10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326011,
            "name": "JUG TURBO PLUS 2 LT DAMASCO 10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326013,
            "name": "JUG TURBO PLUS 2 LT MANGO 10X20 GR (16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326015,
            "name": "JUG TURBO PLUS 2 LT MEL TUN 10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326017,
            "name": "JUG TURBO PLUS 2 LT MANZANA 10X20 GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326019,
            "name": "JUG TURBO PLUS 2 LT TUTTIFRU 10X20GR(16)",
            "subcategory_id": 1207
        },
        {
            "code": 10326023,
            "name": "JUG TURBO PLUS 2 LT SURT 16 X 10 UDS",
            "subcategory_id": 1207
        },
        {
            "code": 10326024,
            "name": "JUG TURBO PLUS 2 LT FRAMBUESA 10X20",
            "subcategory_id": 1207
        },
        {
            "code": 10326025,
            "name": "JUG TURBO PLUS 2 LT SURT 16 X 30 UDS",
            "subcategory_id": 1207
        },
        {
            "code": 10327001,
            "name": "JUG TURBO ZERO DURAZNO 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327003,
            "name": "JUG TURBO ZERO NARANJA 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327005,
            "name": "JUG TURBO ZERO PIÑA 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327007,
            "name": "JUG TURBO ZERO MANZANA 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327009,
            "name": "JUG TURBO ZERO FRESA 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327011,
            "name": "JUG TURBO ZERO PERA D AGUA 10X10 GRS (8)",
            "subcategory_id": 1208
        },
        {
            "code": 10327013,
            "name": "JUG TURBO ZERO SURTIDO (CAJA)",
            "subcategory_id": 1208
        },
        {
            "code": 10327015,
            "name": "JUG TURBO ZERO(4) + 2 GELATINAS REGALO",
            "subcategory_id": 1208
        },
        {
            "code": 10328001,
            "name": "GELATINA TURBO ST NARANJA 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328003,
            "name": "GELATINA TURBO ST FRAMBUESA 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328005,
            "name": "GELATINA TURBO ST FRESA 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328007,
            "name": "GELATINA TURBO ST PIÑA 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328009,
            "name": "GELATINA TURBO ST LIMON 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328011,
            "name": "GELATINA TURBO ST CEREZA 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328015,
            "name": "GELATINA TURBO ST SURTIDO 48X40 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10328020,
            "name": "GELATINA TURBO SIN SABOR 24 X 30 GRS",
            "subcategory_id": 1209
        },
        {
            "code": 10329001,
            "name": "SABORIZANTE TURBO BENNY CHOCOL 12X40O GR",
            "subcategory_id": 1210
        },
        {
            "code": 10329003,
            "name": "SABORIZANTE TURBO BENNY FRUTIL 12X40O GR",
            "subcategory_id": 1210
        },
        {
            "code": 10330001,
            "name": "ACEITE PROTAL 24X250 CC",
            "subcategory_id": 1211
        },
        {
            "code": 10330003,
            "name": "ACEITE MIRAFLORES VEG. 24X500 CC",
            "subcategory_id": 1211
        },
        {
            "code": 10330006,
            "name": "ACEITE PROTAL 15X900 CC",
            "subcategory_id": 1211
        },
        {
            "code": 10330009,
            "name": "ACEITE  MIRAFLORES VEGETAL 15X1 LT",
            "subcategory_id": 1211
        },
        {
            "code": 10330031,
            "name": "ACEITE MIRAFLORES MARAVILLA 15X1LT",
            "subcategory_id": 1211
        },
        {
            "code": 10330050,
            "name": "ACEITE MIRAFLORES MARAV. 24X500",
            "subcategory_id": 1211
        },
        {
            "code": 10330051,
            "name": "ACEITE OLIVA TALLIANI 6X1 LT",
            "subcategory_id": 1211
        },
        {
            "code": 10331001,
            "name": "ARROZ TUCAPEL PREGRANEADO G°1 LAM 10X1",
            "subcategory_id": 1212
        },
        {
            "code": 10331005,
            "name": "ARROZ TUCAPEL PREGRANEADO G°1 10X 500GRS",
            "subcategory_id": 1212
        },
        {
            "code": 10331006,
            "name": "ARROZ TUCAPEL GRAN SELECC Gº1 LAM 10X500",
            "subcategory_id": 1212
        },
        {
            "code": 10331007,
            "name": "ARROZ TUCAPEL GRAN SELECC Gº1 LAM 10X1K",
            "subcategory_id": 1212
        },
        {
            "code": 10331010,
            "name": "ARROZ TUCAPEL GRAN SELECC Gº2 POL 10X1K",
            "subcategory_id": 1212
        },
        {
            "code": 10331012,
            "name": "ARROZ TUCAPEL GRAN SELECC Gº2 POL 10X500",
            "subcategory_id": 1212
        },
        {
            "code": 10331016,
            "name": "ARROZ TUCAPEL GRAN SELECC Gº2 10X900GR",
            "subcategory_id": 1212
        },
        {
            "code": 10331020,
            "name": "ARROZ TUCAPEL BLUE BONNET Gº2 10X1KG",
            "subcategory_id": 1212
        },
        {
            "code": 10331023,
            "name": "ARROZ TUCAPEL BLUE BONNET Gº2 10X500 GRS",
            "subcategory_id": 1212
        },
        {
            "code": 10331025,
            "name": "ARROZ TUCAPEL BLUE BONNET Gº2 20X500 GRS",
            "subcategory_id": 1212
        },
        {
            "code": 10331030,
            "name": "ARROZ TUCAPEL BLUE BONNET G°2 10X900G",
            "subcategory_id": 1212
        },
        {
            "code": 10331040,
            "name": "ARROZ LOS CHINOS G2 LARGO 10X1K",
            "subcategory_id": 1212
        },
        {
            "code": 10331043,
            "name": "ARROZ LOS CHINOS PREGRANEADO Gº2 10X1K",
            "subcategory_id": 1212
        },
        {
            "code": 10331045,
            "name": "ARROZ LOS CHINOS PREGRANEADO Gº2  20X500",
            "subcategory_id": 1212
        },
        {
            "code": 10331050,
            "name": "ARROZ LOS CHINOS PREGRANEADO Gº2  10X500",
            "subcategory_id": 1212
        },
        {
            "code": 10331055,
            "name": "ARROZ TUCAPEL INTEGRAL LAM ROJO G1 10X1K",
            "subcategory_id": 1212
        },
        {
            "code": 10331060,
            "name": "HARINA DE ARROZ TUCAPEL 12 X 500GR",
            "subcategory_id": 1212
        },
        {
            "code": 10335001,
            "name": "NESCAFE 6X100 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335003,
            "name": "NESCAFE TARRO PDQ 6(768X170GRS) 94950",
            "subcategory_id": 1213
        },
        {
            "code": 10335006,
            "name": "NESCAFE 4(6X50 GR)",
            "subcategory_id": 1213
        },
        {
            "code": 10335010,
            "name": "NESCAFE SOBRE 77X172.8GR(5320)",
            "subcategory_id": 1213
        },
        {
            "code": 10335011,
            "name": "NESCAFE SOBRE 180X2 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335013,
            "name": "NESCAFE FINA SELEC. STICK 60X1.8GR.(12)",
            "subcategory_id": 1213
        },
        {
            "code": 10335015,
            "name": "NESCAFE   12X400 GRS.",
            "subcategory_id": 1213
        },
        {
            "code": 10335017,
            "name": "NESCAFE DESCAFEINADO 12X170GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335031,
            "name": "CAFE DOLCA 4(6X170GR)",
            "subcategory_id": 1213
        },
        {
            "code": 10335033,
            "name": "CAFE DOLCA 6X100 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335036,
            "name": "CAFE DOLCA 6X50 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335051,
            "name": "CAFE ECCO 6X170 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335053,
            "name": "CAFE ECCO 24X170 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335056,
            "name": "CAFE ECCO 6X50 GR",
            "subcategory_id": 1213
        },
        {
            "code": 10335060,
            "name": "MIXES CAPPUCHINO 10X14 GRS",
            "subcategory_id": 1213
        },
        {
            "code": 10335062,
            "name": "MIXES VAINILLA 8X18.5 GRS.",
            "subcategory_id": 1213
        },
        {
            "code": 10335067,
            "name": "NESCAFE MOCHA CHOCA 8X23 GRS.",
            "subcategory_id": 1213
        },
        {
            "code": 10335069,
            "name": "NESCAFE DOBLE MOCHA CHOCA  8 X 23GR",
            "subcategory_id": 1213
        },
        {
            "code": 10337001,
            "name": "CREMA NESTLE 24X157 CC",
            "subcategory_id": 1214
        },
        {
            "code": 10337003,
            "name": "CREMA NESTLE 24X236 CC",
            "subcategory_id": 1214
        },
        {
            "code": 10337021,
            "name": "LECHE CONDENSADA NESTLE 24X397",
            "subcategory_id": 1214
        },
        {
            "code": 10339001,
            "name": "NIDO SOBRE 12X130GR (339001)",
            "subcategory_id": 1215
        },
        {
            "code": 10339003,
            "name": "LECHE NIDO 18X400 GR",
            "subcategory_id": 1215
        },
        {
            "code": 10339006,
            "name": "LECHE NIDO 12X800 GR",
            "subcategory_id": 1215
        },
        {
            "code": 10339009,
            "name": "LECHE NIDO 6X1500 GR",
            "subcategory_id": 1215
        },
        {
            "code": 10339031,
            "name": "LECHE SVELTY ACTIFIBRAS 1X800 GR",
            "subcategory_id": 1215
        },
        {
            "code": 10339033,
            "name": "LECHE SVELTY X610 GR",
            "subcategory_id": 1215
        },
        {
            "code": 10339035,
            "name": "LECHE SVELTY LEP DESCREM. 1X800 GRS.",
            "subcategory_id": 1215
        },
        {
            "code": 10339050,
            "name": "ALIM.COLADOS P/VERD. 6X115 GRS.(8)",
            "subcategory_id": 1215
        },
        {
            "code": 10339055,
            "name": "ALIM. COLADOS C/VERD. 6X115 GRS.(8)",
            "subcategory_id": 1215
        },
        {
            "code": 10339060,
            "name": "ALIM. COLADOS P/VERD. 6X215 GRS. (4)",
            "subcategory_id": 1215
        },
        {
            "code": 10339065,
            "name": "ALIM. COLADOS C/ VERD. 6X215 GRS.(4)",
            "subcategory_id": 1215
        },
        {
            "code": 10341001,
            "name": "MILO SOBRE 20X28 GR",
            "subcategory_id": 1216
        },
        {
            "code": 10341005,
            "name": "MILO 36X150 GRS.",
            "subcategory_id": 1216
        },
        {
            "code": 10341006,
            "name": "MILO 15X 1KILO",
            "subcategory_id": 1216
        },
        {
            "code": 10341009,
            "name": "MILO BOLSA 24X210GR",
            "subcategory_id": 1216
        },
        {
            "code": 10341013,
            "name": "MILO 12X700 GRS.",
            "subcategory_id": 1216
        },
        {
            "code": 10341014,
            "name": "MILO 3X1 KILO",
            "subcategory_id": 1216
        },
        {
            "code": 10341015,
            "name": "MILO BOLSA 12X500 GR",
            "subcategory_id": 1216
        },
        {
            "code": 10343001,
            "name": "IMPERIAL SOBRE 50X20 GR",
            "subcategory_id": 1217
        },
        {
            "code": 10343005,
            "name": "IMPERIAL SOBRE 12X100 GRS.",
            "subcategory_id": 1217
        },
        {
            "code": 10345001,
            "name": "SOPA MAGGI POLLO FIDEOS X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345003,
            "name": "SOPA MAGGI POLLO ARROZ X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345006,
            "name": "SOPA MAGGI POLLO SEMOLA X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345007,
            "name": "SOPA MAGGI CARNE /SEMOLA 20X68GRS.",
            "subcategory_id": 1218
        },
        {
            "code": 10345009,
            "name": "SOPA MAGGI CARACOLITOS X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345015,
            "name": "SOPA MAGGI COSTILLA CON FIDEO X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345041,
            "name": "CREMA MAGGI POLLO X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345043,
            "name": "CREMA MAGGI ESPARRAGO X20 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345046,
            "name": "CREMA MAGGI CHOCLO X20UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345081,
            "name": "CALDO MAGGI AVE 36(48X11G) 79480",
            "subcategory_id": 1218
        },
        {
            "code": 10345086,
            "name": "CALDO MAGGI VACUNO X48 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345089,
            "name": "CALDO MAGGI COSTILLA X48 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345092,
            "name": "CALDO MAGGI VERDURA X48 UNI",
            "subcategory_id": 1218
        },
        {
            "code": 10345101,
            "name": "SALSA TUCO CARNE MAGGY 24 X 245 GRS",
            "subcategory_id": 1218
        },
        {
            "code": 10349001,
            "name": "JUGO CONCENTRADO NARANJA 4X5 LITROS",
            "subcategory_id": 1219
        },
        {
            "code": 10349002,
            "name": "JUGO CONCENTRADO DAMASCO 4X5 LITROS",
            "subcategory_id": 1219
        },
        {
            "code": 10349003,
            "name": "JUGO CONCENTRADO DURAZNO 4X5 LITROS",
            "subcategory_id": 1219
        },
        {
            "code": 10349004,
            "name": "JUGO CONCENTRADO PIÑA 4X5 LITROS",
            "subcategory_id": 1219
        },
        {
            "code": 10349012,
            "name": "JUGO CONCENTRADO FRUTILLA 4X5 LTS.",
            "subcategory_id": 1219
        },
        {
            "code": 10349015,
            "name": "JUGO CONCENTRADO FRAMBUEZA 4X5 LTS.",
            "subcategory_id": 1219
        },
        {
            "code": 10349018,
            "name": "JUGO CONCENTRADO MELON TUNA 4X5LTS.",
            "subcategory_id": 1219
        },
        {
            "code": 10349020,
            "name": "JUGO CONCENTRADO MANZANA 4X5 LTS.",
            "subcategory_id": 1219
        },
        {
            "code": 10350001,
            "name": "LIMON FRESCOLIM 48X250 CC",
            "subcategory_id": 1220
        },
        {
            "code": 10350007,
            "name": "LIMON FRESCOLIM 12X500 CC",
            "subcategory_id": 1220
        },
        {
            "code": 10350051,
            "name": "LIMON TRAVERSO 24X250 CC",
            "subcategory_id": 1220
        },
        {
            "code": 10350053,
            "name": "LIMON TRAVERSO 12X500 CC",
            "subcategory_id": 1220
        },
        {
            "code": 10350056,
            "name": "LIMON TRAVERSO 20X1 LT CC",
            "subcategory_id": 1220
        },
        {
            "code": 10350060,
            "name": "LIMON TRAVERSO X 5 LITROS",
            "subcategory_id": 1220
        },
        {
            "code": 10351001,
            "name": "VINAGRE HIGUERAS ROSADO 24X250 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351003,
            "name": "VINAGRE HIGUERAS BLANCO 24X250 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351012,
            "name": "VINAGRE HIGUERAS ROSADO  30X500 C.C.",
            "subcategory_id": 1221
        },
        {
            "code": 10351015,
            "name": "VINAGRE HIGUERAS BLANCO 30X500 C.C.",
            "subcategory_id": 1221
        },
        {
            "code": 10351031,
            "name": "VINAGRE TRAVERSO ROSADO 24X250 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351033,
            "name": "VINAGRE TRAVERSO BLANCO 24X250 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351040,
            "name": "VINAGRE TRAVERSO ROSADO 12X500 C.C",
            "subcategory_id": 1221
        },
        {
            "code": 10351046,
            "name": "VINAGRE TRAVERSO BLANCO 12X500 C.C.",
            "subcategory_id": 1221
        },
        {
            "code": 10351057,
            "name": "VINAGRE MANZANA TRAVERSO 12X500 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351059,
            "name": "VNAGRE MANZANA TRAVERSO 20X1 LTS",
            "subcategory_id": 1221
        },
        {
            "code": 10351061,
            "name": "VINAGRE MANZANA TRAVERSO 24X250 CC",
            "subcategory_id": 1221
        },
        {
            "code": 10351062,
            "name": "VINAGRE ROSADO TRAVERSO X 5 LITROS",
            "subcategory_id": 1221
        },
        {
            "code": 10351065,
            "name": "VINAGRE BLANCO TRAVERSO X 5 LT.",
            "subcategory_id": 1221
        },
        {
            "code": 10353001,
            "name": "AJI CREMA TRAVERSO 18X100 CC",
            "subcategory_id": 1222
        },
        {
            "code": 10353003,
            "name": "AJI SALSA TRAVERSO 18X100 CC",
            "subcategory_id": 1222
        },
        {
            "code": 10353020,
            "name": "SALSA DE SOYA PET 12X500 CC",
            "subcategory_id": 1222
        },
        {
            "code": 10353023,
            "name": "SALSA DE SOYA PET 24X250CC",
            "subcategory_id": 1222
        },
        {
            "code": 10353025,
            "name": "SALSA DE SOYA TRAVERSO 20X1 LT.",
            "subcategory_id": 1222
        },
        {
            "code": 10353031,
            "name": "MOSTAZA TRAVERSO 18X100 CC (12)",
            "subcategory_id": 1222
        },
        {
            "code": 10353036,
            "name": "MOSTAZA TRAVERSO BOLSA  10X1KL",
            "subcategory_id": 1222
        },
        {
            "code": 10353037,
            "name": "KETCHUP TRAVERSO 18X100 GRS.(6)",
            "subcategory_id": 1222
        },
        {
            "code": 10353039,
            "name": "KETCHUP TRAVERSO 10X1.000 GRS.",
            "subcategory_id": 1222
        },
        {
            "code": 10353040,
            "name": "MAYONESA TRAVERSO 10X1 KILO",
            "subcategory_id": 1222
        },
        {
            "code": 10353045,
            "name": "AJI CREMA TRAVERSO BOLSA 10X1 KILO",
            "subcategory_id": 1222
        },
        {
            "code": 10353049,
            "name": "AJI CREMA SACHET TRAVERSO 300X10 GR",
            "subcategory_id": 1222
        },
        {
            "code": 10353080,
            "name": "FIDEOS INSTANT SACHET POROT/TOCINO 50X96",
            "subcategory_id": 1222
        },
        {
            "code": 10354010,
            "name": "JUGO DE LIMÓN DON JUAN 15X250 CC",
            "subcategory_id": 1223
        },
        {
            "code": 10354015,
            "name": "SUCEDANEO JUGO LIMON 12X500 ML",
            "subcategory_id": 1223
        },
        {
            "code": 10354018,
            "name": "MOSTAZA DON JUAN 18X100GRS. (4)",
            "subcategory_id": 1223
        },
        {
            "code": 10354020,
            "name": "KETCHUP DON JUAN 18 UDS. 100 G(4)",
            "subcategory_id": 1223
        },
        {
            "code": 10354022,
            "name": "KETCHUP D. JUAN D/PACK 12X800 GRS.",
            "subcategory_id": 1223
        },
        {
            "code": 10354025,
            "name": "MAYONESA DON JUAN  CLÁSICA 18X100 G(4)",
            "subcategory_id": 1223
        },
        {
            "code": 10354026,
            "name": "MAYONESA DON JUAN CASERA 12X1KL",
            "subcategory_id": 1223
        },
        {
            "code": 10354028,
            "name": "MAYONESA DON JUAN CLASICA D/P 12X750",
            "subcategory_id": 1223
        },
        {
            "code": 10354030,
            "name": "ATUN LOMITOS VAN CAM ACEITE 48X160 GRS.",
            "subcategory_id": 1223
        },
        {
            "code": 10354032,
            "name": "ATUN VAN CAM LOMITOS AL AGUA 48X160 GRS.",
            "subcategory_id": 1223
        },
        {
            "code": 10354035,
            "name": "ATUN DESM. AL AGUA ESMERALDA 48X170 GRS.",
            "subcategory_id": 1223
        },
        {
            "code": 10354040,
            "name": "ATUN DESM.AL ACEITE ESMERALDA 48X170 GRS",
            "subcategory_id": 1223
        },
        {
            "code": 10354045,
            "name": "PAPAS FRITAS MARCO POLO C/AMER.10X200GRS",
            "subcategory_id": 1223
        },
        {
            "code": 10354050,
            "name": "PAPAS FRITAS MARCOPOLO C/AMER. 10X250GRS",
            "subcategory_id": 1223
        },
        {
            "code": 10354052,
            "name": "PAPAS FRITAS MARCOPOLO C/CASERO10X250GRS",
            "subcategory_id": 1223
        },
        {
            "code": 10354060,
            "name": "TE CLUB ORIGINAL (AZUL) 50X20BOLS.",
            "subcategory_id": 1223
        },
        {
            "code": 10354065,
            "name": "TE EMBLEM CEYLAN (AMARILLO) 50X20BOLS.",
            "subcategory_id": 1223
        },
        {
            "code": 10356001,
            "name": "AJI EN SALSA 10 X 100GRS",
            "subcategory_id": 1224
        },
        {
            "code": 10356011,
            "name": "MOSTAZA 10X100GRS",
            "subcategory_id": 1224
        },
        {
            "code": 10357001,
            "name": "MERMELADA PERELLO SURTIDA 24X250",
            "subcategory_id": 1225
        },
        {
            "code": 10357003,
            "name": "MERMELADA PERELLO DAMASCO 24X250",
            "subcategory_id": 1225
        },
        {
            "code": 10357006,
            "name": "MERMELADA PERELLO DURAZNO 24X250",
            "subcategory_id": 1225
        },
        {
            "code": 10357008,
            "name": "MERMELADA PERELLO CIRUELA 24X250 GRS.",
            "subcategory_id": 1225
        },
        {
            "code": 10357009,
            "name": "MERMELADA PERELLO MORA 24X250",
            "subcategory_id": 1225
        },
        {
            "code": 10357012,
            "name": "MERM. PERELLO FRAMBUESA 24X250 GRS.",
            "subcategory_id": 1225
        },
        {
            "code": 10357015,
            "name": "MERM. PERELLO  GUINDA 24X250 GRS.",
            "subcategory_id": 1225
        },
        {
            "code": 10357048,
            "name": "DULCE DE MEMBRILLO PERELLO 10X500",
            "subcategory_id": 1225
        },
        {
            "code": 10357051,
            "name": "DULCE DE MEMBRILLO PERELLO 20X250",
            "subcategory_id": 1225
        },
        {
            "code": 10357060,
            "name": "DURAZNO MITADES PERELLO 24X580 GRS.",
            "subcategory_id": 1225
        },
        {
            "code": 10357065,
            "name": "DURAZNO CUBITO PERELLO 24X580 GRS.",
            "subcategory_id": 1225
        },
        {
            "code": 10363023,
            "name": "PIÑA EN TROCITOS DEYCO 24X840 GR",
            "subcategory_id": 1226
        },
        {
            "code": 10366001,
            "name": "CHAMPINONES ENTERO 24X184 GRS DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366009,
            "name": "CHAMPINON ENTERO 24X400 GRS DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366012,
            "name": "CHAMPINON LAMINADO 24X400 GR DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366021,
            "name": "CHOCLITO COCTAIL 24X425 GR DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366041,
            "name": "PALMITOS RODAJAS 24X410 DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366043,
            "name": "PALMITOS ENTEROS 24X410 GRS DEYCO",
            "subcategory_id": 1227
        },
        {
            "code": 10366051,
            "name": "PIMIENTO MORRON ENTERO DEYCO 24X185 GRS",
            "subcategory_id": 1227
        },
        {
            "code": 10366053,
            "name": "PIMIENTO MORRON ENTERO DEYCO 24X390  GRS",
            "subcategory_id": 1227
        },
        {
            "code": 10370001,
            "name": "BETUN VIRGINIA NEGRO CHICO X 12 UD",
            "subcategory_id": 1228
        },
        {
            "code": 10370002,
            "name": "BETUN VIRGINIA CAFE CHICO X 12",
            "subcategory_id": 1228
        },
        {
            "code": 10370011,
            "name": "BETUN VIRGINIA NEGRO GRANDE X12UD",
            "subcategory_id": 1228
        },
        {
            "code": 10370012,
            "name": "BETUN VIRGINIA CAFE GRANDE X12UNID",
            "subcategory_id": 1228
        },
        {
            "code": 10370050,
            "name": "ESPONJA P/ZAPATO AUTOBRILLO X 6 UNID.",
            "subcategory_id": 1228
        },
        {
            "code": 10371001,
            "name": "CERA LIQUIDA VIRGINIA INCOLORA 10X400",
            "subcategory_id": 1229
        },
        {
            "code": 10371002,
            "name": "CERA LIQUIDA VIRGINIA ROJA 10X400",
            "subcategory_id": 1229
        },
        {
            "code": 10371005,
            "name": "CERA LIQ. ROJA AUTOBRILLO 12X900 CC",
            "subcategory_id": 1229
        },
        {
            "code": 10371007,
            "name": "CERA LIQ. AMARILLA P. PISOS DE MADERA",
            "subcategory_id": 1229
        },
        {
            "code": 10371009,
            "name": "CERA AUTOBRILLO INC. 12X900ML",
            "subcategory_id": 1229
        },
        {
            "code": 10371012,
            "name": "CERA LIQUIDA A/B DOYP.  INCOLOR 10X400",
            "subcategory_id": 1229
        },
        {
            "code": 10371015,
            "name": "CERA LIQUIDA A/B ROJA DOYPACK 10X400 ML.",
            "subcategory_id": 1229
        },
        {
            "code": 10373001,
            "name": "CERA BRILLINA AMARILLA 10X360",
            "subcategory_id": 1230
        },
        {
            "code": 10373002,
            "name": "CERA BRILLINA ROJA 10X360",
            "subcategory_id": 1230
        },
        {
            "code": 10373005,
            "name": "CERA BRILLINA INCOLORA 12X340 GRS.",
            "subcategory_id": 1230
        },
        {
            "code": 10373006,
            "name": "CERA BRILLINA AMARILLA 12X340GRS.",
            "subcategory_id": 1230
        },
        {
            "code": 10373007,
            "name": "CERA BRILLINA ROJA 12X340 GRS.",
            "subcategory_id": 1230
        },
        {
            "code": 10373008,
            "name": "CERA BILLINA ROJA C/TIERRA 12X340 GRS.",
            "subcategory_id": 1230
        },
        {
            "code": 10375001,
            "name": "CHANCACA DELICIOSA 12X225",
            "subcategory_id": 1231
        },
        {
            "code": 10375005,
            "name": "CHANCACA DELICIOSA 24X400 GRS.",
            "subcategory_id": 1231
        },
        {
            "code": 10375020,
            "name": "CHAMPIÑONES ENTEROS DEYCO 24X400",
            "subcategory_id": 1231
        },
        {
            "code": 10375022,
            "name": "CHAMPIÑONES LAMINADOS DEYCO 24X400",
            "subcategory_id": 1231
        },
        {
            "code": 10375026,
            "name": "PALMITOS ENTEROS DEYCO 24X400",
            "subcategory_id": 1231
        },
        {
            "code": 10375028,
            "name": "PALMITOS RODAJAS DEYCO 24X400",
            "subcategory_id": 1231
        },
        {
            "code": 10375040,
            "name": "PIÑAS RODAJAS DEYCO 24X565 GRS.",
            "subcategory_id": 1231
        },
        {
            "code": 10375042,
            "name": "PIÑAS CUBITOS DEYCO  24X565GRS.",
            "subcategory_id": 1231
        },
        {
            "code": 10376001,
            "name": "LUSTRAMUEBLES VIRGINIA 12X250ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376002,
            "name": "LUSTRAMUEBLES VIRGINIA 12X500ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376005,
            "name": "LUSTRAMUEBLE VIRG LAVANDA12X500 ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376008,
            "name": "LUSTRAMUEBLE VIRG LAVANDA12X250ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376031,
            "name": "LIMPIAVIDRIOS VIRGINIA 12X250",
            "subcategory_id": 1232
        },
        {
            "code": 10376050,
            "name": "LIMPIAVIDRIOS C/GATILLO VIRGINIA 12X500",
            "subcategory_id": 1232
        },
        {
            "code": 10376055,
            "name": "LIMP. PISO FLOTANTE  LAVANDA 12X900ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376061,
            "name": "LIMP. P/FLOTANTE DOY PACK 10X400ML.",
            "subcategory_id": 1232
        },
        {
            "code": 10376062,
            "name": "ABRILLANTADOR P/FLOTANTE D/PACK 10X400ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376063,
            "name": "REMOVEDOR DE CERA EMULSIONADA 12X900",
            "subcategory_id": 1232
        },
        {
            "code": 10376065,
            "name": "ABRILLANTADOR PISO FLOTANTE LAV 12X900ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376068,
            "name": "PACK ABRILLANTADOR+LIMPIADOR P. FLOT.",
            "subcategory_id": 1232
        },
        {
            "code": 10376080,
            "name": "LIMP. CLORO GEL IGENIX EUC. 10X900ML",
            "subcategory_id": 1232
        },
        {
            "code": 10376081,
            "name": "LIMP. CLORO GEL IGENIX LAVAND10X900 ML.",
            "subcategory_id": 1232
        },
        {
            "code": 10377005,
            "name": "DESINFECTANTE IGENIX TRADICIONAL 12X360",
            "subcategory_id": 1233
        },
        {
            "code": 10377010,
            "name": "INSECT. KILLER CASA Y JARDIN X 12X390C.C",
            "subcategory_id": 1233
        },
        {
            "code": 10377015,
            "name": "INSECT. KILLER A/BARATAS 12X390C.C.",
            "subcategory_id": 1233
        },
        {
            "code": 10377020,
            "name": "INSECT. KILLER ARAÑ/CUCARA.12X560C.C",
            "subcategory_id": 1233
        },
        {
            "code": 10377028,
            "name": "INSECT. KILLER M/ZANCUDOS 12X390.C.C",
            "subcategory_id": 1233
        },
        {
            "code": 10378002,
            "name": "DES. AMBIENTAL AROM  VAINILLA 12X320",
            "subcategory_id": 1234
        },
        {
            "code": 10378003,
            "name": "DES. AMBIENTAL AROM  LAVANDA 12X320C.C",
            "subcategory_id": 1234
        },
        {
            "code": 10378004,
            "name": "DES. AMBIENTAL AROM CHIR.ALEG 12X320 C.C",
            "subcategory_id": 1234
        },
        {
            "code": 10378015,
            "name": "LIM. SUPERF. AROM LAVANDA 10X900ML",
            "subcategory_id": 1234
        },
        {
            "code": 10378017,
            "name": "LIMP. SUP. LONG  VAINILLA IGIENIX 10X900",
            "subcategory_id": 1234
        },
        {
            "code": 10378020,
            "name": "LIMP. SUP. LONG.FRUTILLA CREMA 10X900ML.",
            "subcategory_id": 1234
        },
        {
            "code": 10378025,
            "name": "LIMP. SUPERF. FLORES CITR.10X900ML.",
            "subcategory_id": 1234
        },
        {
            "code": 10379002,
            "name": "DESODORANTE WC LAVANDA 40X40",
            "subcategory_id": 1235
        },
        {
            "code": 10379003,
            "name": "DESODORANTE WC AROM SURTIDA  20X40",
            "subcategory_id": 1235
        },
        {
            "code": 10379010,
            "name": "DESOD. WC AROM PACK X 3 UNID.X12LAVANDA",
            "subcategory_id": 1235
        },
        {
            "code": 10380000,
            "name": "LAVALOZAS VIRGINIA 18X200 ML.",
            "subcategory_id": 1236
        },
        {
            "code": 10380001,
            "name": "LAVALOZAS VIRGINIA LIMON SOBRE 18X80",
            "subcategory_id": 1236
        },
        {
            "code": 10380004,
            "name": "LAVALOZAS VIRGINIA LIMON 15X500",
            "subcategory_id": 1236
        },
        {
            "code": 10380005,
            "name": "LAVALOZAS VIRGINIA LIMON 12X750",
            "subcategory_id": 1236
        },
        {
            "code": 10380006,
            "name": "LAVALOZAS VIRGINIA LIMON 12X1000",
            "subcategory_id": 1236
        },
        {
            "code": 10380010,
            "name": "LAVALOZAS VIRGINIA LIMON  12X1250ML.",
            "subcategory_id": 1236
        },
        {
            "code": 10381010,
            "name": "BETUN VIRGINIA BURDEO 24X40 ML",
            "subcategory_id": 1237
        },
        {
            "code": 10381025,
            "name": "BETUN VIRGINIA AZUL 12X40ML",
            "subcategory_id": 1237
        },
        {
            "code": 10381035,
            "name": "BETUN LIQUIDO VIRG. NEUTRO 12X60ML",
            "subcategory_id": 1237
        },
        {
            "code": 10381037,
            "name": "BETUN LIQUIDO CAFE 12X60ML.",
            "subcategory_id": 1237
        },
        {
            "code": 10381041,
            "name": "BETUN LIQUIDO VIRG. NEGRO 12X60ML",
            "subcategory_id": 1237
        },
        {
            "code": 10381042,
            "name": "BETUN LIQUIDO VIRG. BLANCO 12X60ML",
            "subcategory_id": 1237
        },
        {
            "code": 10381045,
            "name": "RENOVADOR CUERO GRASO X6 UNID.",
            "subcategory_id": 1237
        },
        {
            "code": 10381055,
            "name": "RENOVADOR VIRG. NOB M/CI 6X120G",
            "subcategory_id": 1237
        },
        {
            "code": 10381065,
            "name": "RENOVADOR VIRG. NOB M/OS 6X120G",
            "subcategory_id": 1237
        },
        {
            "code": 10381250,
            "name": "SHAMPOO PARA AUTOS TEAM 12X250ML.",
            "subcategory_id": 1237
        },
        {
            "code": 10381260,
            "name": "PACK SILICONA+CERA+SH. P/AUTO TEAM X6",
            "subcategory_id": 1237
        },
        {
            "code": 10382001,
            "name": "CERA KRAC CAOBA 10X 500CC.",
            "subcategory_id": 1238
        },
        {
            "code": 10382005,
            "name": "CERA KRAC NATURAL 10X 500CC",
            "subcategory_id": 1238
        },
        {
            "code": 10382009,
            "name": "CERA KRAC T/COLOR 10X 500CC",
            "subcategory_id": 1238
        },
        {
            "code": 10382021,
            "name": "CERA KRAC CAOBA 18X 300CC",
            "subcategory_id": 1238
        },
        {
            "code": 10382025,
            "name": "CERA KRAC NATURAL 18X 300CC",
            "subcategory_id": 1238
        },
        {
            "code": 10382029,
            "name": "CERA KRAC T/COLOR 18X 300CC",
            "subcategory_id": 1238
        },
        {
            "code": 10383001,
            "name": "BOLSA PREPICADO 20X30 X 3.0 KL",
            "subcategory_id": 1239
        },
        {
            "code": 10383003,
            "name": "BOLSA PREPICADO 20X20 X 3.0 KILOS",
            "subcategory_id": 1239
        },
        {
            "code": 10383005,
            "name": "BOLSA PREPICADO 30X40 X 4.0 KL",
            "subcategory_id": 1239
        },
        {
            "code": 10383008,
            "name": "TACO BOLSAS 20X30X5",
            "subcategory_id": 1239
        },
        {
            "code": 10383021,
            "name": "BOLSA DÑA. GABY  ROLLO 50X70 X",
            "subcategory_id": 1239
        },
        {
            "code": 10383025,
            "name": "BOLSA DÑA. GABY  ROLLO 70X90UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10383031,
            "name": "BOLSA DÑA. GABY  ROLLO 80X110 X UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10383050,
            "name": "BOLSA CAMISETA 33X40 NEGRA X500 UNIDADES",
            "subcategory_id": 1239
        },
        {
            "code": 10383051,
            "name": "BOLSA CAMISETAS 33X40 BLANCA X 500 UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10383055,
            "name": "BOLSAS CAMISETAS 42X50 BLANCA X 500 UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10383057,
            "name": "BOLSAS CAMISETAS 42X50 NEGRA X 500 UNID.",
            "subcategory_id": 1239
        },
        {
            "code": 10383061,
            "name": "BOLSAS CAMISETAS 45X55 BLANCAS X UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10383062,
            "name": "BOLSAS CAMISETAS 45X55 X 4000UDS",
            "subcategory_id": 1239
        },
        {
            "code": 10384001,
            "name": "BOLSA BASURA MIRANDA 50X70 10 UN (5)",
            "subcategory_id": 1240
        },
        {
            "code": 10384003,
            "name": "BOLSA BASURA MIRANDA 70X90 10 UN (5)",
            "subcategory_id": 1240
        },
        {
            "code": 10384005,
            "name": "BOLSA BASURA MIRANDA 80X110 10 UN (5)",
            "subcategory_id": 1240
        },
        {
            "code": 10385001,
            "name": "BOLSA DE BASURA CHACAO 5X50X70",
            "subcategory_id": 1241
        },
        {
            "code": 10385003,
            "name": "BOLSA DE BASURA CHACAO 5X70X90",
            "subcategory_id": 1241
        },
        {
            "code": 10385006,
            "name": "BOLSA DE BASURA CHACAO 5X80X110",
            "subcategory_id": 1241
        },
        {
            "code": 10385021,
            "name": "CLORO CHACAO 40X250 CC",
            "subcategory_id": 1241
        },
        {
            "code": 10385031,
            "name": "CLORO CHACAO AMARILLO 20X1 LT",
            "subcategory_id": 1241
        },
        {
            "code": 10385033,
            "name": "CLORO CHACAO VERDE 20X1 LT",
            "subcategory_id": 1241
        },
        {
            "code": 10385035,
            "name": "FOSFORO JET MASCHT X10",
            "subcategory_id": 1202
        },
        {
            "code": 10385037,
            "name": "HIGIENICO VUAL 12X6",
            "subcategory_id": 1202
        },
        {
            "code": 10385050,
            "name": "CLORO PRIMEROS 20X250",
            "subcategory_id": 1241
        },
        {
            "code": 10385055,
            "name": "CLORO PRIMEROS 12X1LT.",
            "subcategory_id": 1241
        },
        {
            "code": 10386003,
            "name": "FOSFOROS COPIHUE X 10 (002)",
            "subcategory_id": 1242
        },
        {
            "code": 10386007,
            "name": "FOSFORO COPIHUITO X 10  (5) (044)",
            "subcategory_id": 1242
        },
        {
            "code": 10386011,
            "name": "FOSFOROS GRAN COPIHUE 10X150 UN (14)",
            "subcategory_id": 1242
        },
        {
            "code": 10386021,
            "name": "FOSFOROS COPIHUE HOGAR 80X250 UNI (022)",
            "subcategory_id": 1242
        },
        {
            "code": 10386051,
            "name": "FOSFOROS ANDES X 10 (5) (001)",
            "subcategory_id": 1242
        },
        {
            "code": 10386061,
            "name": "FOSFOROS GRAN ANDES 10X220 UN (12) (004)",
            "subcategory_id": 1242
        },
        {
            "code": 10386071,
            "name": "FOSFOROS ANDES HOGAR 80X250 UNI (003)",
            "subcategory_id": 1242
        },
        {
            "code": 10386150,
            "name": "FOSFORO COPIHUE BIG MATCH 100X50 UNI",
            "subcategory_id": 1242
        },
        {
            "code": 10388001,
            "name": "BOLSA BASURA VIRUTEX 10X80X120+PAÑO AMAR",
            "subcategory_id": 1243
        },
        {
            "code": 10388003,
            "name": "BOLSA BASURA VIRUTEX 5X110X120",
            "subcategory_id": 1243
        },
        {
            "code": 10388006,
            "name": "BOLSA BASURA MAS  VIRUTEX 5X80X110",
            "subcategory_id": 1243
        },
        {
            "code": 10388011,
            "name": "BOLSA BASURA VIRUTEX ROLLO 5X50X70",
            "subcategory_id": 1243
        },
        {
            "code": 10388013,
            "name": "BOLSA BASURA VIRUTEX ROLLO 5X70X90",
            "subcategory_id": 1243
        },
        {
            "code": 10388016,
            "name": "BOLSA BASURA VIRUTEX ROLLO 5X80X110",
            "subcategory_id": 1243
        },
        {
            "code": 10389002,
            "name": "PAÑO M/USO DESINF. VIRUTEX 14X30 UNIDS.",
            "subcategory_id": 1244
        },
        {
            "code": 10389006,
            "name": "LAVALOZAS IMPEKE 12X750 ML.(2099)",
            "subcategory_id": 1244
        },
        {
            "code": 10389007,
            "name": "CLORO IMPEKE CONCENT. 15X1 LT.(2887)",
            "subcategory_id": 1244
        },
        {
            "code": 10389008,
            "name": "CLORO IMPEKE CONCENTRADO  6X2 LTS.(2888)",
            "subcategory_id": 1244
        },
        {
            "code": 10389009,
            "name": "CLORO IMPEKE  CONCENTRADO 4X4 LTS.(4585)",
            "subcategory_id": 1244
        },
        {
            "code": 10389011,
            "name": "CLORO TRAD. AROMA LAVANDA IMPEKE 15X1LT",
            "subcategory_id": 1244
        },
        {
            "code": 10389012,
            "name": "CLOROGEL AROMA LIMON 10X900ML.(2218)",
            "subcategory_id": 1244
        },
        {
            "code": 10389013,
            "name": "CLORO FORTE 5% 15X1LT. (2894)",
            "subcategory_id": 1244
        },
        {
            "code": 10389015,
            "name": "CLORO GEL IMPEKE TRAD. 10X900GRS(2217).",
            "subcategory_id": 1244
        },
        {
            "code": 10389016,
            "name": "CLORO R/ BLANCA IMPEKE 15X1000LT.(2900)",
            "subcategory_id": 1244
        },
        {
            "code": 10389017,
            "name": "CLORO R/BLANCAIMPEKE 6X2000 LT.(2901)",
            "subcategory_id": 1244
        },
        {
            "code": 10389019,
            "name": "CLORO TRAD. ARO. LAVAN IMPEKE 6X2000 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389020,
            "name": "CLORO R/COLOR IMPEKE 15X930 C.C(2905)",
            "subcategory_id": 1244
        },
        {
            "code": 10389022,
            "name": "CLORO ESPUMA VIRUTEX 12X500 ML(1630)",
            "subcategory_id": 1244
        },
        {
            "code": 10389028,
            "name": "CLORO GEL A/CITRUS IMPEKE 10X900ML.(5029",
            "subcategory_id": 1244
        },
        {
            "code": 10389030,
            "name": "LIMP. DESINF. IMPEKE LAVANDA 12X900 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389032,
            "name": "LIMP. DESINF.  IMPEKE  FLORAL 12X900 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389060,
            "name": "LIMP. DESINF. VITUTEX LAVANDA 12X900 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389062,
            "name": "LIMP. DESINF. VIRUTEX PRIMAV 12X900 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389064,
            "name": "LIMP, DESINF. VIRUTEX CITRICO 12X900 C.C",
            "subcategory_id": 1244
        },
        {
            "code": 10389082,
            "name": "LIMP. PISO IMPEKE LAVANDA 2X4 LT.",
            "subcategory_id": 1244
        },
        {
            "code": 10389095,
            "name": "LIMP. SUP. VIRUTEX CITRICO BOT. 10X1.2LT",
            "subcategory_id": 1244
        },
        {
            "code": 10389100,
            "name": "CLORO PISCINA IMPEKE  2X10 LTS",
            "subcategory_id": 1244
        },
        {
            "code": 10389117,
            "name": "PAÑO DESINFECT. VIRUT. CART. LAV.24X12",
            "subcategory_id": 1244
        },
        {
            "code": 10390001,
            "name": "VIRUTILLA MEDIANA Nº2 X12 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390003,
            "name": "VIRUTILLA MEDIANA  Nº4 X12 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390006,
            "name": "VIRUTILLA MEDIANA  Nº6 X12 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390021,
            "name": "VIRUTILLA GRANDE Nº2 X10 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390023,
            "name": "VIRUTILLA GRANDE Nº4 X10 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390025,
            "name": "ESPONJA  METAL INOX. IMPEKE X12 UN(12)",
            "subcategory_id": 1245
        },
        {
            "code": 10390030,
            "name": "ESPONJA  ESPUNITA  IMPEKE  X12 UN (12)",
            "subcategory_id": 1245
        },
        {
            "code": 10390031,
            "name": "ESP.ESPUNITA VIRUTEX X1 (72)",
            "subcategory_id": 1245
        },
        {
            "code": 10390033,
            "name": "MAGO PAD C/JABON TIRA X 6 UDS (10)229",
            "subcategory_id": 1245
        },
        {
            "code": 10390034,
            "name": "MAGO PADS C/JABON BOLSA 9 PAQ X 4 UDS(8)",
            "subcategory_id": 1245
        },
        {
            "code": 10390041,
            "name": "MAGO PAD SIN JABON 10 X 6 UNI(10)",
            "subcategory_id": 1245
        },
        {
            "code": 10390043,
            "name": "MAGO PAD S/JABON 12PAQTS.X12 UNI(4)",
            "subcategory_id": 1245
        },
        {
            "code": 10390051,
            "name": "ESPONJA DE ACERO TIRA X 6 UNIDS.(10)",
            "subcategory_id": 1245
        },
        {
            "code": 10390055,
            "name": "ESP. ACERO VIRUTEX PACK 120PAQX3UNID.",
            "subcategory_id": 1245
        },
        {
            "code": 10390056,
            "name": "ESPONJA DE ACERO P/OLLA X 25",
            "subcategory_id": 1245
        },
        {
            "code": 10390059,
            "name": "OROTEX TIRA X6 ( 20 TIRAS X CAJA )233",
            "subcategory_id": 1245
        },
        {
            "code": 10390061,
            "name": "BONOBRIL LISA TIRA X6 (10)(226)",
            "subcategory_id": 1245
        },
        {
            "code": 10390066,
            "name": "BONOBRIL VIRUT. GDE LISA 12X4 UN (4)(430",
            "subcategory_id": 1245
        },
        {
            "code": 10390069,
            "name": "BONOBRIL VIRUT GDE.  ACAN 3X4 UN (4(420)",
            "subcategory_id": 1245
        },
        {
            "code": 10390071,
            "name": "PAÑO SPONGGI VIRUTEX 10 PAQ X 3UN (5)",
            "subcategory_id": 1245
        },
        {
            "code": 10390073,
            "name": "PAÑO ESPONJA  NAT. 10 PAQ X 6 UNID(5)",
            "subcategory_id": 1245
        },
        {
            "code": 10390076,
            "name": "PAÑO SPONGI VIRUTEX  10 PAQ X 1 UN(12)",
            "subcategory_id": 1245
        },
        {
            "code": 10390079,
            "name": "PAÑO MULTIUSO AMA. 34X34CM.X10(30)",
            "subcategory_id": 1245
        },
        {
            "code": 10390120,
            "name": "PAÑO ESPONJA NAT.AMAR. 48X6(1100544)",
            "subcategory_id": 1245
        },
        {
            "code": 10390125,
            "name": "PAÑO ESPONJA NAT. CELESTE 48X6(1100545)",
            "subcategory_id": 1245
        },
        {
            "code": 10390135,
            "name": "PAÑO ESPONJA NAT. ROSADO 48X6(4)(10543)",
            "subcategory_id": 1245
        },
        {
            "code": 10390220,
            "name": "PAÑO ESPONJA NAT. VERDE 48X6(1100546)",
            "subcategory_id": 1245
        },
        {
            "code": 10391020,
            "name": "LIMP.INODORO TZ CANAST. OXIPOWER 24X1",
            "subcategory_id": 1243
        },
        {
            "code": 10391035,
            "name": "LIMP. INODORO ESTANQUE BLOCK 24X1",
            "subcategory_id": 1243
        },
        {
            "code": 10391037,
            "name": "LIPM. INODORO ESTANQUE BLOCK 12X3",
            "subcategory_id": 1243
        },
        {
            "code": 10393030,
            "name": "PALA C/MANGO FIJO VIRUTEX X 20",
            "subcategory_id": 1246
        },
        {
            "code": 10393031,
            "name": "PALA  CON MANGO FIJO IMPEKE  X 12",
            "subcategory_id": 1246
        },
        {
            "code": 10393033,
            "name": "LIMPIAVIDRIOS MANGO LARGO X40CM.X6/301",
            "subcategory_id": 1246
        },
        {
            "code": 10393053,
            "name": "GUANTE CONVENIENTE  TALLA  S X24",
            "subcategory_id": 1246
        },
        {
            "code": 10393054,
            "name": "GUANTE LATEX  C/P. BCO.L X100X10(1101771",
            "subcategory_id": 1246
        },
        {
            "code": 10393059,
            "name": "GUANTE TRAD. ECON. IMPEKE  L X 12 UNIDS.",
            "subcategory_id": 1246
        },
        {
            "code": 10393061,
            "name": "GUANTE TRAD, ECON. IMPEKE  M X12 UNIDS.",
            "subcategory_id": 1246
        },
        {
            "code": 10393063,
            "name": "GUANTE TRAD. ECON. IMPEKE TALLA S X12",
            "subcategory_id": 1246
        },
        {
            "code": 10393067,
            "name": "GUANTE MULTIUSO TALLA M X24 UNID.",
            "subcategory_id": 1246
        },
        {
            "code": 10393072,
            "name": "ESC. ITALIANO  A/GOLPE VIRUT.  X 12(1026",
            "subcategory_id": 1246
        },
        {
            "code": 10393073,
            "name": "ESC. ECOL.RECICLADO CAF MGO.MAD 12(1113)",
            "subcategory_id": 1246
        },
        {
            "code": 10393078,
            "name": "ESC. S. GRANDE VER/AZUL   X 10(1101135)",
            "subcategory_id": 1246
        },
        {
            "code": 10393080,
            "name": "ESC. AZUL  ECON. MANG. MAD X 12 (1133)",
            "subcategory_id": 1246
        },
        {
            "code": 10393081,
            "name": "ESC. ECONOMICO IMPEKE X12(1101387)",
            "subcategory_id": 1246
        },
        {
            "code": 10393093,
            "name": "CEPILLO L/SANITARIO T/EUROPEO X12",
            "subcategory_id": 1246
        },
        {
            "code": 10393100,
            "name": "ROLLO PAPEL ALUMINIO 5X7.5 MTS. (5)",
            "subcategory_id": 1246
        },
        {
            "code": 10393101,
            "name": "ROLLO PVC  (FILM) 5X100 MTS.(5)",
            "subcategory_id": 1246
        },
        {
            "code": 10393102,
            "name": "ROLLO PVC (FILM) 5X20  MTS. (5)",
            "subcategory_id": 1246
        },
        {
            "code": 10393106,
            "name": "TRAP. SIMP. BLCO S/OJAL 50X70 X6(C901400",
            "subcategory_id": 1246
        },
        {
            "code": 10393110,
            "name": "TRAP. SIMP. C/O VIRUTEX 6X50X50(RDO)",
            "subcategory_id": 1246
        },
        {
            "code": 10393113,
            "name": "TRAP. ALGODON DOBLE C/O 6X50X45(8)",
            "subcategory_id": 1246
        },
        {
            "code": 10393116,
            "name": "TRAP.SIMPLE CONVENIENTE C/OJAL X6(8)",
            "subcategory_id": 1246
        },
        {
            "code": 10393121,
            "name": "TRAP. HUMEDO DESINF. LIMON VIRUT X12",
            "subcategory_id": 1246
        },
        {
            "code": 10393122,
            "name": "TRAPERO HUMEDO  LAVANDA 12X10UNID.",
            "subcategory_id": 1246
        },
        {
            "code": 10393125,
            "name": "TRAPERO HUMEDO P/FLOTANTE 12X10U/ 776",
            "subcategory_id": 1246
        },
        {
            "code": 10393128,
            "name": "TRAP. M/FIBRA VERDE C/OJAL X 24( 50X70)",
            "subcategory_id": 1246
        },
        {
            "code": 10393129,
            "name": "TRAP. M/FIBRA AMARIL C/O X24(50X70)",
            "subcategory_id": 1246
        },
        {
            "code": 10393130,
            "name": "TRAP. M/FIBRA AZUL C/OJAL X 24(50X70)",
            "subcategory_id": 1246
        },
        {
            "code": 10393131,
            "name": "PINZAS VIRUTEX MADERA 60X24 UNID.",
            "subcategory_id": 1246
        },
        {
            "code": 10393135,
            "name": "PINZAS PLASTICAS 60X24 UNID",
            "subcategory_id": 1246
        },
        {
            "code": 10393142,
            "name": "ESCOBILLA DE RPA PLASTICA X12",
            "subcategory_id": 1246
        },
        {
            "code": 10393150,
            "name": "BOL BASURA ROLLO IMPEKE 30 X 80 X 110",
            "subcategory_id": 1246
        },
        {
            "code": 10393155,
            "name": "BOL BASURA ROLLO IMPEKE 30X70X90",
            "subcategory_id": 1246
        },
        {
            "code": 10393160,
            "name": "BOL BASURA ROLLO  IMPEKE 50 X 50 X70",
            "subcategory_id": 1246
        },
        {
            "code": 10393205,
            "name": "BOL BASURA VIRUTEX BIORROLLO 24X70X90",
            "subcategory_id": 1246
        },
        {
            "code": 10393210,
            "name": "BOL BASURA VIRUTEX  BIORROLLO 24X80X110",
            "subcategory_id": 1246
        },
        {
            "code": 10393220,
            "name": "BOL. BAS. BIORO. VIRUT. 50X70 18X30UND",
            "subcategory_id": 1246
        },
        {
            "code": 10393231,
            "name": "BOL. BAS. BIOR.VIRUT. 20X70X90(CAJX12)",
            "subcategory_id": 1246
        },
        {
            "code": 10393250,
            "name": "BOL. BAS. BIORROLLO VIRUTEX 50X70X50ROLL",
            "subcategory_id": 1246
        },
        {
            "code": 10393260,
            "name": "BOL. BASURA BIORROLLO 80X110X30 RROLLOS",
            "subcategory_id": 1246
        },
        {
            "code": 10393265,
            "name": "BOL. BASURA BIORROLLO 70X90X30 ROLLOS",
            "subcategory_id": 1246
        },
        {
            "code": 10393275,
            "name": "BOL. BAS. BIORROLLO 80X110X5 CLAS. VTX",
            "subcategory_id": 1246
        },
        {
            "code": 10393280,
            "name": "BOL. BAS. BIORROLLO 70X90X5 VTX PRO",
            "subcategory_id": 1246
        },
        {
            "code": 10393285,
            "name": "BOL. BAS. BIORROLLO 80X120X10 UNIDADES",
            "subcategory_id": 1246
        },
        {
            "code": 10393290,
            "name": "BOL. BAS. BIORROLLO 100X120X5 UNIDADES",
            "subcategory_id": 1246
        },
        {
            "code": 10393295,
            "name": "BOL BAS BIORROLLO 110X120X5 UNIDADES",
            "subcategory_id": 1246
        },
        {
            "code": 10394001,
            "name": "TANAX AEROSOL ARA.Y BAR S/OLOR 12X221CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394002,
            "name": "TANAX AEROSOL MOS.Y ZAN. S/OLOR 12X222CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394003,
            "name": "TANAX AEROSOL CASA Y JARDIN 12X220CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394005,
            "name": "TANAX AEROSOL MOSCA Y ZANCUDO 12X220CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394006,
            "name": "TANAX AEROSOL TODO INSECTO 12X220CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394007,
            "name": "TANAX AEROSOL PULGAS Y GARRAPATAS 12X220",
            "subcategory_id": 1247
        },
        {
            "code": 10394010,
            "name": "TANAX AEROSOL ARAÑAS Y BARATAS 12X220CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394011,
            "name": "TANAX AEROSOL HORMIGUICIDA 12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394013,
            "name": "TANAX AEROSOL TODO INSECTO S/OLOR 12X220",
            "subcategory_id": 1247
        },
        {
            "code": 10394014,
            "name": "TANAX TRIPACK C/J+A/BAR +ANTIBACK REG(4)",
            "subcategory_id": 1247
        },
        {
            "code": 10394015,
            "name": "PACK ALFAKILL ARA/BAR + T. INSEC 2X6X360",
            "subcategory_id": 1247
        },
        {
            "code": 10394017,
            "name": "ALFAKILL TODO INSEC 12 X360",
            "subcategory_id": 1247
        },
        {
            "code": 10394069,
            "name": "INSECT. ALFAKILL T/INSECTO12X220CC+1/4",
            "subcategory_id": 1247
        },
        {
            "code": 10394073,
            "name": "INSECT. ALFA  KILL ARAÑ/ BARAT. 12X360CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394082,
            "name": "LIQUIDO INSECTICIDA  24X500CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394085,
            "name": "PACK AEROSOL A/B+TANAX POLVO HORMIG 125G",
            "subcategory_id": 1247
        },
        {
            "code": 10394195,
            "name": "TANAX AEROSOL PULGAS Y GARRAPATA 12X440C",
            "subcategory_id": 1247
        },
        {
            "code": 10394200,
            "name": "TANAX AEROSOL TODO INSECTO 12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394250,
            "name": "TANAX AEROSOL MOSCA Y ZANCUDO 12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394255,
            "name": "TANAX AEROSOL MOS/ZAN S/OLOR  12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394260,
            "name": "TANAX AEROSOL ARAÑAS Y BARATAS 12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394265,
            "name": "TANAX AEROSOL CASA Y JARDIN 12X440CC",
            "subcategory_id": 1247
        },
        {
            "code": 10394282,
            "name": "TANAX PACK AB/CJ X 440 CC+ALCOHOL SPRAY",
            "subcategory_id": 1247
        },
        {
            "code": 10395145,
            "name": "TANAX POLVO EN SOBRE 10X25GR (5)",
            "subcategory_id": 1248
        },
        {
            "code": 10395150,
            "name": "TANAX POLVO FRASCO HORMIGUICIDA 10X100GR",
            "subcategory_id": 1248
        },
        {
            "code": 10395152,
            "name": "TANAX POLVO INSECTICIDA  10X100GRS",
            "subcategory_id": 1248
        },
        {
            "code": 10395155,
            "name": "TANAX RATICIDA RATANAX EN PELLETS 24X50G",
            "subcategory_id": 1248
        },
        {
            "code": 10395160,
            "name": "TANAX RATICIDA RATANAX EN BLOQUE 12X100G",
            "subcategory_id": 1248
        },
        {
            "code": 10395165,
            "name": "TANAX RATICIDA RATANAX EN PELLETS 24X100",
            "subcategory_id": 1248
        },
        {
            "code": 10396001,
            "name": "DESINF. ANTI BAC. LAVANDA 12X400CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396002,
            "name": "DESINF. ANTIBACT. ORIGINAL 12X400C.C",
            "subcategory_id": 1249
        },
        {
            "code": 10396003,
            "name": "DESINF. ANTI BACT LAVANDA 12X220CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396005,
            "name": "DESINF. ANTI BACT ORIGINAL 12X220CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396006,
            "name": "DESINF. ANTI BAC. FLOR DE CAMPO 12X400CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396007,
            "name": "DESINF. ANTI BACT BEBE 12X220CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396009,
            "name": "TANAX FRESKITO AMBIENTAL LAVANDA 12X360C",
            "subcategory_id": 1249
        },
        {
            "code": 10396011,
            "name": "TANAX FRESKITO AMBIENTAL VAINILL 12X360C",
            "subcategory_id": 1249
        },
        {
            "code": 10396015,
            "name": "TANAX FRESKITO AMBIENTAL BERRIES 12X360C",
            "subcategory_id": 1249
        },
        {
            "code": 10396017,
            "name": "TANAX FRESKITO AMBIENTAL  LIMON  12X360",
            "subcategory_id": 1249
        },
        {
            "code": 10396019,
            "name": "TANAX FRESKITO AMBIENTAL ROSAS 12X360",
            "subcategory_id": 1249
        },
        {
            "code": 10396020,
            "name": "PACK SILICONA + RENOVADOR 2X 6X1200CC",
            "subcategory_id": 1249
        },
        {
            "code": 10396040,
            "name": "CONO GEL LIMON 12X193 GRS.",
            "subcategory_id": 1249
        },
        {
            "code": 10396042,
            "name": "CONO GEL VAINILLA 12X193 GRS.",
            "subcategory_id": 1249
        },
        {
            "code": 10396044,
            "name": "CONO GEL MANZ/CANELA 12X193 GRS.",
            "subcategory_id": 1249
        },
        {
            "code": 10396046,
            "name": "CON GEL BERRIES 12X193 GRS.",
            "subcategory_id": 1249
        },
        {
            "code": 10397050,
            "name": "TANAX ENCHUFE ELECTRICO+ 6 TABLETAS",
            "subcategory_id": 1250
        },
        {
            "code": 10397055,
            "name": "TANAX TABLETAS TERMOEVAPORABLES X 24 UND",
            "subcategory_id": 1250
        },
        {
            "code": 10397060,
            "name": "ANTIGRASA DESINFECTANTE GATILLO 12X500ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397065,
            "name": "ANTIGRASA DESINFECTANTE DOYPACK 12X450ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397070,
            "name": "MULTIUSO DESINFECTANTE GATILLO 12X500ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397080,
            "name": "MULTIUSO DESINFECTANTE DOYPACK 12X450ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397085,
            "name": "MULTIUSO DESINFECTANTE BOTELLA 12X900ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397101,
            "name": "JABON EN BARRA CARBON X 10UND 100GR",
            "subcategory_id": 1250
        },
        {
            "code": 10397110,
            "name": "LIMPIA VIDRIOS CON GATILLO POR 12X500 ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397115,
            "name": "DETER. LIQUI. BIODEGRADABLE 4X3LTS",
            "subcategory_id": 1250
        },
        {
            "code": 10397120,
            "name": "DETER. LIQUI. HIPOALERGENICO BIO 4X3LTS",
            "subcategory_id": 1250
        },
        {
            "code": 10397123,
            "name": "LAVALOZA ANTIBAC. LIMON 12X500ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397125,
            "name": "LAVALOZA BIODEGRADABLE 14X500ML",
            "subcategory_id": 1250
        },
        {
            "code": 10397130,
            "name": "LIMPIA VIDRIOS SUPERFICIES 12X450CC",
            "subcategory_id": 1250
        },
        {
            "code": 10397140,
            "name": "BIDON LAVANDA ANTIBAC.L MUTIUSO 2UNDX5 L",
            "subcategory_id": 1250
        },
        {
            "code": 10405001,
            "name": "PAÑAL CHICOLASTIC T-2 CHICO X 40 UNI (6)",
            "subcategory_id": 1251
        },
        {
            "code": 10405003,
            "name": "PAÑAL CHICOLASTIC T-3 MEDIANO X 36 (6)",
            "subcategory_id": 1251
        },
        {
            "code": 10405006,
            "name": "PAÑAL CHICOLASTIC T-4 GRANDE X 32 (6)",
            "subcategory_id": 1251
        },
        {
            "code": 10405009,
            "name": "PAÑAL CHICOLASTIC T-5 XG X 28 (6)",
            "subcategory_id": 1251
        },
        {
            "code": 10405012,
            "name": "PAÑAL CHICOLASTIC T-6 XXG X 40 UNI (4)",
            "subcategory_id": 1251
        },
        {
            "code": 10405013,
            "name": "PAÑAL CHICOLASTIC T-1 RN X 14 UNI (12)",
            "subcategory_id": 1251
        },
        {
            "code": 10407004,
            "name": "HIG D/HOJA MI HOGAR12 X 25 MT( 2705) X 4",
            "subcategory_id": 1252
        },
        {
            "code": 10407006,
            "name": "HIG D/HOJA  MI HOGAR 4X50MTS X 8",
            "subcategory_id": 1252
        },
        {
            "code": 10407010,
            "name": "TOALLA MI HOGAR D /HOJ 8 X3  12 MT (130",
            "subcategory_id": 1252
        },
        {
            "code": 10407038,
            "name": "PH SWAN U/BLA D/H 400 HOJAS  4 UND X 8",
            "subcategory_id": 1252
        },
        {
            "code": 10407046,
            "name": "PH SWAN U/BLA D/H 30MT 4 UND X 10(13001)",
            "subcategory_id": 1252
        },
        {
            "code": 10407051,
            "name": "PH SWAN DH 24 UND X  25MTS (22712)X3PQT",
            "subcategory_id": 1252
        },
        {
            "code": 10407059,
            "name": "PH SWAN D/BLA D/H 22 MT 6UND X 8 (2203)",
            "subcategory_id": 1252
        },
        {
            "code": 10407061,
            "name": "PH SWAN D/BLA D/H 22MT 4UND X 12(12202)",
            "subcategory_id": 1252
        },
        {
            "code": 10407062,
            "name": "TOALLA SWAN  BLAN Y ABS D/H 45M X 12 NIV",
            "subcategory_id": 1252
        },
        {
            "code": 10407065,
            "name": "SERVILLETA SWAN 24X23CM 12PAQ X 300 UND",
            "subcategory_id": 1252
        },
        {
            "code": 10407068,
            "name": "TOALLA SWAN HOJA SIMPLE 100MX6U (BURDEO)",
            "subcategory_id": 1252
        },
        {
            "code": 10407071,
            "name": "TOALLA SWAN MULTIUSO D/HOJA 6 X 100MTS",
            "subcategory_id": 1252
        },
        {
            "code": 10407080,
            "name": "PH SWAN D/BLAN 24 UX22 MTS X3PQT",
            "subcategory_id": 1252
        },
        {
            "code": 10410001,
            "name": "PRET APORTE CHAMPAM 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410003,
            "name": "PRET APORTE CHAMPAN 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410006,
            "name": "PRET APORTE CHAMPAN 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410008,
            "name": "PRET A PORTE ALMENDRA 2 X 10",
            "subcategory_id": 1253
        },
        {
            "code": 10410009,
            "name": "PRET A PORTE ALMENDRA  3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410010,
            "name": "PRET APORTE ALMENDRA  4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410011,
            "name": "PRET APORTE COÑAG 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410013,
            "name": "PRET APORTE COÑAG 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410016,
            "name": "PRET APORTE COÑAG 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410021,
            "name": "PRET APORTE APRICOT 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410023,
            "name": "PRET APORTE APRICOT 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410026,
            "name": "PRET APORTE APRICOT 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410031,
            "name": "PRET APORTE AMBAR 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410033,
            "name": "PRET APORTE AMBAR 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410036,
            "name": "PRET APORTE AMBAR 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410041,
            "name": "PRET APORTE NEGRO 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410043,
            "name": "PRET APORTE NEGRO 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410046,
            "name": "PRET APORTE NEGRO 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410051,
            "name": "PRET APORTE GRAFITO 4X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410053,
            "name": "PRET APORTE GRAFITO 3X10",
            "subcategory_id": 1253
        },
        {
            "code": 10410056,
            "name": "PRET APORTE GRAFITO 2X10",
            "subcategory_id": 1253
        },
        {
            "code": 10411001,
            "name": "PANT MUSS CHAMP 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411003,
            "name": "PANT MUSS CHAMP 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411006,
            "name": "PANT MUSS CHAMP 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411007,
            "name": "PANT MUSS ALMENDRA 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411008,
            "name": "PANT. MUSS ALMENDRA 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411010,
            "name": "PANT MUSS ALMENDRA 4X10 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411011,
            "name": "PANT MUSS COÑAG 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411013,
            "name": "PANT MUSS COÑAG 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411016,
            "name": "PANT MUSS COÑAG 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411017,
            "name": "PANT MUSS SURT. Nª2  COÑ/AM/GR/CHAM",
            "subcategory_id": 1254
        },
        {
            "code": 10411019,
            "name": "PANT MUSS SURT. Nª3 COÑ/AM/GR/CHAM",
            "subcategory_id": 1254
        },
        {
            "code": 10411020,
            "name": "PANT MUSS SURT.Nª 4 COÑ/AM/GR/CHAM",
            "subcategory_id": 1254
        },
        {
            "code": 10411021,
            "name": "PANT MUSS APRICOT 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411023,
            "name": "PANT MUSS APRICOT 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411026,
            "name": "PANT MUSS APRICOT 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411031,
            "name": "PANT MUSS AMBAR 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411033,
            "name": "PANT MUSS AMBAR 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411036,
            "name": "PANT MUSS AMBAR 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411041,
            "name": "PANT MUSS NEGRO 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411043,
            "name": "PANT MUSS NEGRO 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411046,
            "name": "PANT MUSS NEGRO 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411051,
            "name": "PANT MUSS GRAFITO 4X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411053,
            "name": "PANT MUSS GRAFITO 3X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10411056,
            "name": "PANT MUSS GRAFITO 2X15 ROJA",
            "subcategory_id": 1254
        },
        {
            "code": 10412001,
            "name": "PANTY TRANSP. DESNUDA CHAMPAN 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412003,
            "name": "PANTY TRANSP.DESNUDA CHAMPAN 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412006,
            "name": "PANTY TRANSP. DESNUDA CHAMPAN 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412011,
            "name": "PANTY TRANSP. DESNUDA COÑAG 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412013,
            "name": "PANTY TRANSP. DESNUDA COÑAG 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412016,
            "name": "PANTY TRANSP. DESNUDA COÑAG 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412021,
            "name": "PANTY TRANSP. DESNUDA APRICOT 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412023,
            "name": "PANTY TRANSP. DESNUDA APRICOT 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412026,
            "name": "PANTY TRANSP. DESNUDA APRICOT 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412031,
            "name": "PANTY TRANSP. DESNUDA AMBAR 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412033,
            "name": "PANTY TRANSP. DESNUDA AMBAR 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412036,
            "name": "PANTY TRANSP. DESNUDA AMBAR 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412041,
            "name": "PANTY TRANSP. DESNUDA NEGRO 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412043,
            "name": "PANTY TRANSP. DESNUDA NEGRO 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412046,
            "name": "PANTY TRANSP. DESNUDA NEGRO 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412051,
            "name": "PANTY TRANSP. DESNUDA GRAFITO 4X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412053,
            "name": "PANTY TRANSP. DESNUDA GRAFITO 3X10",
            "subcategory_id": 1255
        },
        {
            "code": 10412056,
            "name": "PANTY TRANSP. DESNUDA GRAFITO 2X10",
            "subcategory_id": 1255
        },
        {
            "code": 10413001,
            "name": "PRET ELASTICADA CHAMPAN 4X10 SOBRE",
            "subcategory_id": 1256
        },
        {
            "code": 10413003,
            "name": "PRET ELASTICADA CHAMPAN 3X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413006,
            "name": "PRET ELASTICADA CHAMPAN 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413011,
            "name": "PRET ELASTICADA COÑAG 4X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413013,
            "name": "PRET ELASTICADA COÑAG 3X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413016,
            "name": "PRET ELASTICADA COÑAG 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413021,
            "name": "PRET ELASTICADA APRICOT 4X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413023,
            "name": "PRET ELASTICADA APRICOT 3X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413026,
            "name": "PRET ELASTICADA APRICOT 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413031,
            "name": "PRET ELASTICADA AMBAR 4X10 SOBRE",
            "subcategory_id": 1256
        },
        {
            "code": 10413033,
            "name": "PRET ELASTICADA AMBAR 3X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413036,
            "name": "PRET ELASTICADA AMBAR 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413041,
            "name": "PRET ELASTICADA NEGRO 4X10 SOBRE",
            "subcategory_id": 1256
        },
        {
            "code": 10413043,
            "name": "PRET ELASTICADA NEGRO 3X10 SOBRE",
            "subcategory_id": 1256
        },
        {
            "code": 10413046,
            "name": "PRET ELASTICADA NEGRO 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413051,
            "name": "PRET ELASTICADA GRAFITO 4X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413053,
            "name": "PRET ELASTICADA GRAFITO 3X10",
            "subcategory_id": 1256
        },
        {
            "code": 10413056,
            "name": "PRET ELASTICADA GRAFITO 2X10",
            "subcategory_id": 1256
        },
        {
            "code": 10414001,
            "name": "MEDIA PAN.VERDE MUS ELAST. CHAMPAN X10",
            "subcategory_id": 1257
        },
        {
            "code": 10414003,
            "name": "MEDIA PANT. VERDE MUS ELAST. COÑAG X10",
            "subcategory_id": 1257
        },
        {
            "code": 10414006,
            "name": "MEDIA PANT. VERDE MUS ELAST. APRICOT X10",
            "subcategory_id": 1257
        },
        {
            "code": 10414009,
            "name": "MEDIA PANT. VERDE MUS ELAST. AMBAR X10",
            "subcategory_id": 1257
        },
        {
            "code": 10414011,
            "name": "MEDIA PANT. VERDE MUS ELAST. NEGRO X10",
            "subcategory_id": 1257
        },
        {
            "code": 10414013,
            "name": "MEDIA PANT. VERDE MUS ELAST GRAFITO  X10",
            "subcategory_id": 1257
        },
        {
            "code": 10415001,
            "name": "MEDIA PANTALON CAFARENA CHAMPAN 2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10415003,
            "name": "MEDIA PANTALON CAFARENA CONAG  2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10415006,
            "name": "MEDIA PANTALON CAFARENA APRICOT 2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10415009,
            "name": "MEDIA PANTALON CAFARENA AMBAR 2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10415011,
            "name": "MEDIA PANTALON CAFARENA NEGRO 2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10415013,
            "name": "MEDIA PANTALON CAFARENA GRAFITO 2X10 UNI",
            "subcategory_id": 1258
        },
        {
            "code": 10418001,
            "name": "SHAMPOO ELVIVE OLEO EXTR. 12X400ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418004,
            "name": "SHAMPOO ELVIVE ARCILLA PURA 12X400 ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418006,
            "name": "SHAMPOO ELVIVE COLOR VIVE 12X400 ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418010,
            "name": "ACONDIC. ELVIVE OLEO EXTRAOR. 12X400 ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418013,
            "name": "ACONDIC. ELVIVE COLOR VIVE 12X400 ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418015,
            "name": "ACONDIC. ELVIVE ARCILLA PUR. 12X400 ML.",
            "subcategory_id": 1259
        },
        {
            "code": 10418030,
            "name": "SHAMPOO ELVIVE OLEO EXTR. 12X200 GRS.",
            "subcategory_id": 1259
        },
        {
            "code": 10420001,
            "name": "NIVEA SOFT CREMA  12 X 50 ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420002,
            "name": "CREMA ATRIX 12 X 60ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420003,
            "name": "CREMA NIVEA LATA 24 X 30 ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420004,
            "name": "NIVEA LATA 12 X 60 ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420006,
            "name": "NIVEA LATA 12 X 150 ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420007,
            "name": "NIVEA BODY Q10 12 X 125ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420008,
            "name": "NIVEA BODY SOFT 12 X 125",
            "subcategory_id": 1260
        },
        {
            "code": 10420010,
            "name": "NIVEA SUN FACTOR 50 12X200ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420011,
            "name": "NIVEA SUN LIGHT FACTOR 50 12X125",
            "subcategory_id": 1260
        },
        {
            "code": 10420012,
            "name": "NIVEA SUN KIDS BABY FACTOR 50 12X200ML",
            "subcategory_id": 1260
        },
        {
            "code": 10420013,
            "name": "NIVEA BRONCEADOR FACTOR 6 12X200ML",
            "subcategory_id": 1260
        },
        {
            "code": 10421010,
            "name": "KADUS SHAMPOO ALMENDRA DP 900 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421020,
            "name": "KADUS SHAMPOO MANZANA DP 900 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421030,
            "name": "KADUS SHAMPOO VAINILLA COCO DP 900 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421040,
            "name": "KADUS SHAMPOO MIEL DP 900 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421050,
            "name": "KADUS SHAMPOO ROSADO FCO 750 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421060,
            "name": "KADUS SHAMPOO ALMENDRA FCO 750 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421070,
            "name": "KADUS SHAMPOO VAINILLA COCO FCO 750 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10421080,
            "name": "KADUS SHAMPOO FINAS HIERBAS FCO 750 ML",
            "subcategory_id": 1261
        },
        {
            "code": 10422010,
            "name": "KADUS BALSAMO ROSADO DP 900 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422020,
            "name": "KADUS BALSAMO FINAS HIERBAS DP 900 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422030,
            "name": "KADUS BALSAMO MIEL DP 900 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422040,
            "name": "KADUS BALSAMO ALMENDRA DP 900 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422050,
            "name": "KADUS BALSAMO VAINILLA COCO DP 900 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422060,
            "name": "KADUS BALSAMO ROSADO FCO 750 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10422070,
            "name": "KADUS BALSAMO FINAS HIERBAS FCO 750 ML",
            "subcategory_id": 1262
        },
        {
            "code": 10423005,
            "name": "KADUS JABON LIQUIDO ALMENDRA DP 900 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10423015,
            "name": "KADUS JABON LIQ  MANZANA MIEL DP 900 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10423025,
            "name": "KADUS JABON LIQUIDO MIEL 900 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10423035,
            "name": "KADUS JABON LIQ VAINILLA COCO DP 900 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10423045,
            "name": "KADUS JABON MANZANA MIEL FCO 750 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10423055,
            "name": "KADUS JABON VAINILLA COCO FCO 750 ML",
            "subcategory_id": 1263
        },
        {
            "code": 10424001,
            "name": "SHAMP. BALL. MIX 50X60GRS",
            "subcategory_id": 1264
        },
        {
            "code": 10424005,
            "name": "ACOND. BALL. MIX 50X60GRS",
            "subcategory_id": 1264
        },
        {
            "code": 10425100,
            "name": "SHAMP. BALL FCO PALTA 10X410CC",
            "subcategory_id": 1265
        },
        {
            "code": 10425105,
            "name": "SHAMP. BALL FCO MANZANILLA 10X410ML",
            "subcategory_id": 1265
        },
        {
            "code": 10425110,
            "name": "SHAMP. BALL FCO MICELAR 10X410ML",
            "subcategory_id": 1265
        },
        {
            "code": 10426200,
            "name": "SHAMP. BALL DP MICELAR 12X750ML",
            "subcategory_id": 1266
        },
        {
            "code": 10426205,
            "name": "SHAMP. BALL DP HIPOALERGENICO 12X750 ML",
            "subcategory_id": 1266
        },
        {
            "code": 10426210,
            "name": "SHAMP. BALL DP MANZANILLA 12X750ML",
            "subcategory_id": 1266
        },
        {
            "code": 10426215,
            "name": "SHAMP. BALL DP PALTA 12X750ML",
            "subcategory_id": 1266
        },
        {
            "code": 10426220,
            "name": "SHAMP. BALL DP FUERZA 12X750ML",
            "subcategory_id": 1266
        },
        {
            "code": 10426225,
            "name": "SHAMP. BALL. DP. COCO/JAZM 12X750",
            "subcategory_id": 1266
        },
        {
            "code": 10426230,
            "name": "SHAMP. BALL. GARNADA. 12X750ML.",
            "subcategory_id": 1266
        },
        {
            "code": 10426235,
            "name": "SHAMP. BALL. ONDAS Y RIZOS 12X750ML.",
            "subcategory_id": 1266
        },
        {
            "code": 10427300,
            "name": "ACON. BALL FCO MANZANILLA 10X410ML",
            "subcategory_id": 1267
        },
        {
            "code": 10427305,
            "name": "ACON. BALL FCO PALTA 10X410ML",
            "subcategory_id": 1267
        },
        {
            "code": 10427310,
            "name": "ACON. BALL FCO HIERBA 10X410ML",
            "subcategory_id": 1267
        },
        {
            "code": 10428200,
            "name": "ACONDIC. BALL DP MICELAR 12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428205,
            "name": "ACONDIC. BALL DP MANZANILLA 12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428210,
            "name": "ACONDIC. BALL DP  COCO JAZMIN  12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428215,
            "name": "ACONDIC. BALL DP MAQUI/ACAI 12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428220,
            "name": "ACONDIC. BALL DP LARGO INCREIBL 12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428225,
            "name": "ACONDIC. BALL DP ONDAS Y RIZOS 12X750ML",
            "subcategory_id": 1268
        },
        {
            "code": 10428230,
            "name": "ACONDIC. BALL. HIPOALERG. 12X750",
            "subcategory_id": 1268
        },
        {
            "code": 10428235,
            "name": "ACONDIC. BALL.ONDAS Y RIZOS 12X750ML.",
            "subcategory_id": 1268
        },
        {
            "code": 10428240,
            "name": "ACONDIC. BALL. PALTA 12X750",
            "subcategory_id": 1268
        },
        {
            "code": 10429053,
            "name": "JABON LIQ BALL FCO AVENA ALM 12X350 ML.",
            "subcategory_id": 1269
        },
        {
            "code": 10429055,
            "name": "JABON LIQ BALL FCO HIPOALERGENICO 12X350",
            "subcategory_id": 1269
        },
        {
            "code": 10429058,
            "name": "JABON LIQ BALL FCO CREMA HUMECTAN 12X350",
            "subcategory_id": 1269
        },
        {
            "code": 10429200,
            "name": "JABON LIQ. BALL HIPOALERGENICO 12X750CC",
            "subcategory_id": 1269
        },
        {
            "code": 10429205,
            "name": "LABON LIQ. BALL. VIOL/SILV. 12X750ML",
            "subcategory_id": 1269
        },
        {
            "code": 10429210,
            "name": "JABON LIQ. BALL ENERGY 12X750CC",
            "subcategory_id": 1269
        },
        {
            "code": 10429215,
            "name": "JABON LIQ. BALL YOG ARANDANOS 12X750CC",
            "subcategory_id": 1269
        },
        {
            "code": 10429220,
            "name": "JABON LIQ. BALL. VAINILLA /COCO 12X750CC",
            "subcategory_id": 1269
        },
        {
            "code": 10429225,
            "name": "JABON LIQ. BALL.  YOGOU/ARAND. 12X750ML",
            "subcategory_id": 1269
        },
        {
            "code": 10429230,
            "name": "JABON LIQ. BALL. AVENA/ALM. 12X750 ML.",
            "subcategory_id": 1269
        },
        {
            "code": 10429235,
            "name": "JABON LIQ. BALL. CREMA HUMECT. 12X750ML.",
            "subcategory_id": 1269
        },
        {
            "code": 10430003,
            "name": "SUAV  ACONDIC  HERBAL FCO 10X1LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430004,
            "name": "SUAV  ACONDIC PLACENTA  FCO 10X1LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430006,
            "name": "SUAV  ACONDIC MANZANILLA FCO 10X1LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430021,
            "name": "SUAV  SHAMPOO  BABY  FCO  10 X 1 LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430022,
            "name": "SUAV  SHAMPOO HERBAL  FCO   10 X 1 LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430023,
            "name": "SUAV  SHAMPOO  QUILLAY  FCO   10 X 1 LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430026,
            "name": "SUAV  SHAMPO  MANZANILL  FCO   10 X 1 LT",
            "subcategory_id": 1270
        },
        {
            "code": 10430027,
            "name": "SUAV  SHAMPOO PLACENTA  FCO   10 X 1 LT",
            "subcategory_id": 1270
        },
        {
            "code": 10431480,
            "name": " NOBLE DOBLE HOJA 10X6X22MTS",
            "subcategory_id": 1271
        },
        {
            "code": 10431485,
            "name": "CONFORT D/H  2 X 24 X 25 MTS (50825)",
            "subcategory_id": 1271
        },
        {
            "code": 10431486,
            "name": "NOBLE ORQUIDIA 12X4 ALMACENERO",
            "subcategory_id": 1271
        },
        {
            "code": 10431501,
            "name": "CONFORT D/ HOJA  12X4  X 30 MTS (50501)",
            "subcategory_id": 1271
        },
        {
            "code": 10431570,
            "name": "CONFORT 50 MTS ALMACENERO 12X4",
            "subcategory_id": 1271
        },
        {
            "code": 10431582,
            "name": "CONFORT DOBLE HOJA X 22 MTS. 12X4",
            "subcategory_id": 1271
        },
        {
            "code": 10431583,
            "name": "CONFORT DOBLE HOJA X 22 MT 6X8 (50764)",
            "subcategory_id": 1271
        },
        {
            "code": 10431592,
            "name": "CONFORT 50 MTS  8X 6",
            "subcategory_id": 1271
        },
        {
            "code": 10431674,
            "name": "CONFORT D/HOJA    8X6 30 MTS",
            "subcategory_id": 1271
        },
        {
            "code": 10431676,
            "name": "CONFORT D/HOJA  24 X1 30 MTS",
            "subcategory_id": 1271
        },
        {
            "code": 10431685,
            "name": "CONFORT DUO D/HOJA  8 X 6 X30 MTS.",
            "subcategory_id": 1271
        },
        {
            "code": 10431784,
            "name": "NOBLE DOBLE HOJA + ROLLITO 12 X 4",
            "subcategory_id": 1271
        },
        {
            "code": 10431786,
            "name": "NOBLE 50 MTS 12X4 ALMACENERO",
            "subcategory_id": 1271
        },
        {
            "code": 10431792,
            "name": "NOBLE D/HOJA  6 X 6 25 MTS",
            "subcategory_id": 1271
        },
        {
            "code": 10431796,
            "name": "NOBLE DOBLE HOJA 10X4X23MT (50877)",
            "subcategory_id": 1271
        },
        {
            "code": 10431814,
            "name": "P. HIGIENICO ELITE MINI 12X4",
            "subcategory_id": 1271
        },
        {
            "code": 10431861,
            "name": "ELITE ULTRA  12 X 4",
            "subcategory_id": 1271
        },
        {
            "code": 10432110,
            "name": "SERV ELITE COCTEL BLANCA 120 X50",
            "subcategory_id": 1272
        },
        {
            "code": 10432141,
            "name": "SERVILLETA NOVA CLASICA 50X140 PQT(24141",
            "subcategory_id": 1272
        },
        {
            "code": 10432149,
            "name": "SERVILLETA ABOLENGO MINI  70X 40",
            "subcategory_id": 1272
        },
        {
            "code": 10432155,
            "name": "SERVILLETA MINI ABOLENGO 80X40 UN (24150",
            "subcategory_id": 1272
        },
        {
            "code": 10432215,
            "name": "PAÑUELOS ELITE NORMAL PACK X 18X6 (17215",
            "subcategory_id": 1272
        },
        {
            "code": 10432220,
            "name": "SERV ELITE GOLD MESA DISEÑO NAVIDAD X20.",
            "subcategory_id": 1272
        },
        {
            "code": 10433140,
            "name": "TOALLA  NOVA CLASICA 1 X 24 (40648)",
            "subcategory_id": 1273
        },
        {
            "code": 10433171,
            "name": "TOALLA  NOVA EXTRA DISEÑO   8  X 3 VERDE",
            "subcategory_id": 1273
        },
        {
            "code": 10433172,
            "name": "TOALLA  NOVA ULTRA 10  X 3 AZUL(40564)",
            "subcategory_id": 1273
        },
        {
            "code": 10433473,
            "name": "TOALLA ABOLENGO MINI X3 (40473)",
            "subcategory_id": 1273
        },
        {
            "code": 10433483,
            "name": "TOALLA ABOLENGO MINI 24 X 1 (40483)",
            "subcategory_id": 1273
        },
        {
            "code": 10434107,
            "name": "BABYSEC PREMIUM XXG X 14(8) (79950)",
            "subcategory_id": 1274
        },
        {
            "code": 10434109,
            "name": "BABYSEC PREMIUM XG X 14 (8) (79949)",
            "subcategory_id": 1274
        },
        {
            "code": 10434110,
            "name": "BABYSEC PREMIUM G X 18(8) (79948)",
            "subcategory_id": 1274
        },
        {
            "code": 10434112,
            "name": "BABYSEC PREMIUM M X 20(8) (79916)",
            "subcategory_id": 1274
        },
        {
            "code": 10434115,
            "name": "BABYSEC PREMIUM PEQUEÑ  X 20(8) (79915)",
            "subcategory_id": 1274
        },
        {
            "code": 10434120,
            "name": "BABYSEC SUPER PREMIUM G X 18 UN",
            "subcategory_id": 1274
        },
        {
            "code": 10434362,
            "name": "BABYSEC PLUS XXG  X4",
            "subcategory_id": 1274
        },
        {
            "code": 10434365,
            "name": "BABYSEC PLUS XG  X4",
            "subcategory_id": 1274
        },
        {
            "code": 10434383,
            "name": "BABYSEC PLUS G  X4",
            "subcategory_id": 1274
        },
        {
            "code": 10435105,
            "name": "COTIDIAN PREDOBLADO X8",
            "subcategory_id": 1275
        },
        {
            "code": 10435108,
            "name": "COTIDIAN APOSITOS X40",
            "subcategory_id": 1275
        },
        {
            "code": 10435121,
            "name": "COTIDIAN APOSITOS  X20",
            "subcategory_id": 1275
        },
        {
            "code": 10435124,
            "name": "COTIDIAN APOSITOS LARGOS X 20",
            "subcategory_id": 1275
        },
        {
            "code": 10435132,
            "name": "COTIDIAN PANTS G X18",
            "subcategory_id": 1275
        },
        {
            "code": 10435133,
            "name": "COTIDIAN PANTS M X20",
            "subcategory_id": 1275
        },
        {
            "code": 10435342,
            "name": "COTIDIAN CLASICO X 8 M (77342)",
            "subcategory_id": 1275
        },
        {
            "code": 10435361,
            "name": "COTIDIAN CLASICO  GDE X 8 (77361)",
            "subcategory_id": 1275
        },
        {
            "code": 10435415,
            "name": "COTIDIAN CLASICO G X36",
            "subcategory_id": 1275
        },
        {
            "code": 10435480,
            "name": "COTIDIAN PLUS M X24",
            "subcategory_id": 1275
        },
        {
            "code": 10435485,
            "name": "COTIDIAN PLUS M X36",
            "subcategory_id": 1275
        },
        {
            "code": 10435495,
            "name": "COTIDIAN PLUS G X36",
            "subcategory_id": 1275
        },
        {
            "code": 10435501,
            "name": "COTIDIAN PLUS GDE  X 24 (77501)",
            "subcategory_id": 1275
        },
        {
            "code": 10435546,
            "name": "COTIDIAN PREMIUM M X8",
            "subcategory_id": 1275
        },
        {
            "code": 10435548,
            "name": "PL COTIDIAN PREMIUM M X24",
            "subcategory_id": 1275
        },
        {
            "code": 10435549,
            "name": "COTIDIAN PREMIUM G X 8",
            "subcategory_id": 1275
        },
        {
            "code": 10435568,
            "name": "COTIDIAN PREMIUM GDE 2 X 22(77580)",
            "subcategory_id": 1275
        },
        {
            "code": 10436051,
            "name": "TOA HUM BPREMIUM 10X45 UD MORADA(73117)",
            "subcategory_id": 1276
        },
        {
            "code": 10436073,
            "name": "TOA. HUM. BABYS. PREM. PACK 8X3X45(MORAD",
            "subcategory_id": 1276
        },
        {
            "code": 10436097,
            "name": "TOA. HUM BABY ULTRA 8X3X45 CELESTE(73119",
            "subcategory_id": 1276
        },
        {
            "code": 10437041,
            "name": "LADYSOFT ROSADA C/A 24X7 (96041)",
            "subcategory_id": 1277
        },
        {
            "code": 10437049,
            "name": "LADYSOFT  NOCTURNA 24X7 (96049)",
            "subcategory_id": 1277
        },
        {
            "code": 10437051,
            "name": "LADYSOFT NORMAL VERDE C/A 24X (96051)",
            "subcategory_id": 1277
        },
        {
            "code": 10437061,
            "name": "LADYSOFT MORADA  SUAVE 24X8 (96240)",
            "subcategory_id": 1277
        },
        {
            "code": 10437175,
            "name": "LADYSOFT BASICA SIN ALAS X8 (96173)X 40",
            "subcategory_id": 1277
        },
        {
            "code": 10437177,
            "name": "LADYSOFT BASICA CON ALAS X8 (40)",
            "subcategory_id": 1277
        },
        {
            "code": 10437233,
            "name": "PROTEC DIARIOS LADYSOFT  30X20 UNID.",
            "subcategory_id": 1277
        },
        {
            "code": 10437244,
            "name": "PROTECTORES DIARIOS LADYSOFT  10X200",
            "subcategory_id": 1277
        },
        {
            "code": 10437328,
            "name": "PROTECTOR DIARIO CLASICO   60X20",
            "subcategory_id": 1277
        },
        {
            "code": 10437332,
            "name": "PROTECTOR DIARIO CLASICO   8X200",
            "subcategory_id": 1277
        },
        {
            "code": 10440031,
            "name": "PAÑAL HUGGIES  ACT.SEC. XXG  X 40 UND",
            "subcategory_id": 1278
        },
        {
            "code": 10440035,
            "name": "PAÑAL HUGGIES ACT. SEC DISNEY  XG  X 44",
            "subcategory_id": 1278
        },
        {
            "code": 10440037,
            "name": "PAÑAL HUGGIES ACT.SEC DISNEY G X50 UNI",
            "subcategory_id": 1278
        },
        {
            "code": 10442002,
            "name": "PH SCOTT SUPREME CARE 12X4 ALGODON",
            "subcategory_id": 1279
        },
        {
            "code": 10442004,
            "name": "PH SCOTT RINDEMAX ASTRO 12X4  22 MTS",
            "subcategory_id": 1279
        },
        {
            "code": 10442006,
            "name": "PH SCOTT RINDEMAX ASTRO 8X6 SMART",
            "subcategory_id": 1279
        },
        {
            "code": 10442008,
            "name": "TOA/PAPEL  SCOTT 8X3 12 MT",
            "subcategory_id": 1279
        },
        {
            "code": 10444001,
            "name": "PAÑAL ADULT PLE PROTECT M X8 (10)",
            "subcategory_id": 1280
        },
        {
            "code": 10444003,
            "name": "PAÑAL ADULT PLE PROTECT G X8 (10)",
            "subcategory_id": 1280
        },
        {
            "code": 10444005,
            "name": "PAÑAL ADULT PLE PROTECT XG X8 (10)",
            "subcategory_id": 1280
        },
        {
            "code": 10446004,
            "name": "TOA FEM KOTEX ULTRA FINA SUAVE 12 X 8",
            "subcategory_id": 1281
        },
        {
            "code": 10446006,
            "name": "TOA  KOTEX U/ FINA DIA/NOCH SUAVE 12X8 C",
            "subcategory_id": 1281
        },
        {
            "code": 10446008,
            "name": "TOA FEM KOTEX ULTR FINA NOCT XL SUAV12X7",
            "subcategory_id": 1281
        },
        {
            "code": 10446010,
            "name": "TOA FEM KOTEX NORMAL MALLA C/A 12X16",
            "subcategory_id": 1281
        },
        {
            "code": 10446014,
            "name": "TOA FEM KOTEX NORMAL TELA C/A 48X8",
            "subcategory_id": 1281
        },
        {
            "code": 10446015,
            "name": "T.  KOTEX  NOCT. TELA  SUAVE C/A 12X8",
            "subcategory_id": 1281
        },
        {
            "code": 10446020,
            "name": "PROTEC/ DIARIO KOTEX NORMAL TELA 24X40",
            "subcategory_id": 1281
        },
        {
            "code": 10450050,
            "name": "SCHICK XTREME PS X12 (VERDE)(12)(800)",
            "subcategory_id": 1282
        },
        {
            "code": 10450051,
            "name": "SCHICK XTREME PN X12 (AZUL)(12)(500)",
            "subcategory_id": 1282
        },
        {
            "code": 10450052,
            "name": "SCHIK XTREME P/SENSIBLE X 18(VERDE.CJAX8",
            "subcategory_id": 1282
        },
        {
            "code": 10450053,
            "name": "SCHICK XTREME PD X12 (FLOREADA)(12)(700)",
            "subcategory_id": 1282
        },
        {
            "code": 10450054,
            "name": "SCHICK XTREME 3 ECOLOGICA X12(12)",
            "subcategory_id": 1282
        },
        {
            "code": 10450057,
            "name": "HOJA SUPERCHROMIUM X30",
            "subcategory_id": 1282
        },
        {
            "code": 10450059,
            "name": "MAQUINA AFEITAR EXACTA PS X12",
            "subcategory_id": 1282
        },
        {
            "code": 10450061,
            "name": "MAQ AFEITAR EXACTA PD (MUJER) X 12 UND",
            "subcategory_id": 1282
        },
        {
            "code": 10450065,
            "name": "MAQ. AFEI. QUATRO TITANIUM X 10(8)(600)",
            "subcategory_id": 1282
        },
        {
            "code": 10450066,
            "name": "MAQ. AFEITAR QUATRO TIT. MUJER X 10 (6)",
            "subcategory_id": 1282
        },
        {
            "code": 10451020,
            "name": "PRESTOBARBA 3 HOJAS X 24 UND",
            "subcategory_id": 1283
        },
        {
            "code": 10451422,
            "name": "PRESTOBARBA ULTRAGRIP X 28",
            "subcategory_id": 1283
        },
        {
            "code": 10452015,
            "name": "PAÑAL PAMPERS CONFORT SEC M X 24 (6)",
            "subcategory_id": 1284
        },
        {
            "code": 10452020,
            "name": "PAÑAL PAMPERS CONFORT SEC G X 20 (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452025,
            "name": "PAÑAL PAMPERS CONFORT SEC XG X 16 (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452030,
            "name": "PAÑAL PAMPERS CONFORT SEC XXG X 16 (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452035,
            "name": "PAÑAL JUEGOS Y SUEÑOS XG X22 UND (6)",
            "subcategory_id": 1284
        },
        {
            "code": 10452040,
            "name": "PAÑAL JUEGO Y SUEÑO XXG X22 UND (6)",
            "subcategory_id": 1284
        },
        {
            "code": 10452045,
            "name": "PAÑAL PAMPERS PREMIUM CARE G X20 (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452050,
            "name": "PAÑAL PAMPERS PREMIUM CARE XG X16  (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452055,
            "name": "PAÑAL PAMPERS PREMIUM CARE XXG X16  (8)",
            "subcategory_id": 1284
        },
        {
            "code": 10452065,
            "name": "TH PAMPERS BABY WIPES 12 X 48 UND",
            "subcategory_id": 1284
        },
        {
            "code": 10453066,
            "name": "TOALLA FEM NATURELLA DIA X8U (12D)",
            "subcategory_id": 1285
        },
        {
            "code": 10453070,
            "name": "TOALLA FEM NATURELLA NOCHE X8 UND (24)",
            "subcategory_id": 1285
        },
        {
            "code": 10453075,
            "name": "TOALLA FEM ALWAYS DIA X8 (24)",
            "subcategory_id": 1285
        },
        {
            "code": 10453080,
            "name": "TOALLA FEM ALWAYS NOCHE X 8 (24)",
            "subcategory_id": 1285
        },
        {
            "code": 10454085,
            "name": "SH HEAD&SHOULDERS LIMP RENOV 6X400 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454090,
            "name": "ACONDICIONADOR HEAD SH.  12X180 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454095,
            "name": "SH PANTENE RESTAURACION 24X100ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454100,
            "name": "SH HEAD & SHOULDERS LIMP RENOV 24X90 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454105,
            "name": "SH HEAD & SHOULDERS LIMP RENOV 6X180 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454107,
            "name": "SH HEAD & SHOULDERS 2 EN 1   ( 6X180 ML)",
            "subcategory_id": 1286
        },
        {
            "code": 10454110,
            "name": "SH PANTENE RESTAURACION 12X180ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454113,
            "name": "ACONDICIONADOR  PANTENE 12X180 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454115,
            "name": "SH HEAD & SHOULDERS LIMP RENOV 24X10 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454120,
            "name": "SH HEAD & SHOULDERS 2 EN 1  24X10 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454121,
            "name": "SH HEAD SHOULDERS 3 EN 1 24 X10ML MEN",
            "subcategory_id": 1286
        },
        {
            "code": 10454123,
            "name": "SH HEAD SHOULDERS HUMECTANTE 24X10ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454125,
            "name": "SH PANTENE RESTAURACION 24 X10 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454127,
            "name": "ACONDIC PANTENE RESTAURAC 24 X10 ML (25)",
            "subcategory_id": 1286
        },
        {
            "code": 10454128,
            "name": "ACONDIC PANTENE 3 MM 12 X10 ML (25)",
            "subcategory_id": 1286
        },
        {
            "code": 10454130,
            "name": "SH. PANTENE  LISO 24 X10 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454150,
            "name": "SH HEAD SHOULDERS  LIMP RENOV 6X90 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454155,
            "name": "SH HEAD SHOULDERS 2 EN 1 6X90 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10454160,
            "name": "SH PANTENE RESTAURACION  6X100 ML",
            "subcategory_id": 1286
        },
        {
            "code": 10455135,
            "name": "DETERG  ARIEL POLVO 24X350 GRS + ENCEND",
            "subcategory_id": 1287
        },
        {
            "code": 10455140,
            "name": "DETERG ACE POLVO 24X350 GRS",
            "subcategory_id": 1287
        },
        {
            "code": 10455145,
            "name": "DETERG ACE NAT. ( VERDE) 30X200 GRS",
            "subcategory_id": 1287
        },
        {
            "code": 10455150,
            "name": "DETERG ARIEL MB POWER LIQUIDO 6X1.9LT",
            "subcategory_id": 1287
        },
        {
            "code": 10455155,
            "name": "DETERG ARIEL MB POWER LIQUIDO 6 X 1.2LT",
            "subcategory_id": 1287
        },
        {
            "code": 10455160,
            "name": "ARIEL LIQ CONCENTRAD SACHET 6X40 ML (12)",
            "subcategory_id": 1287
        },
        {
            "code": 10456160,
            "name": "CEPILLO 123 X6 DISPLAY",
            "subcategory_id": 1288
        },
        {
            "code": 10456165,
            "name": "DESOD OLD SPICE SOL DEO FRESH 12X50 GRS",
            "subcategory_id": 1288
        },
        {
            "code": 10456170,
            "name": "DESOD OLD SPICE  SURTIDO 12X50 GRS",
            "subcategory_id": 1288
        },
        {
            "code": 10456175,
            "name": "DESOD OLD SPICE VIP12X50 GRS",
            "subcategory_id": 1288
        },
        {
            "code": 10456180,
            "name": "DESOD OLD SPICE SPRAY VIP 12X150 ML",
            "subcategory_id": 1288
        },
        {
            "code": 10456185,
            "name": "DESOD OLD SPICE SPRAY FRESH 12X150 ML",
            "subcategory_id": 1288
        },
        {
            "code": 10456190,
            "name": "DESOD OLD SPICE SPRAY PURESPORT 12X150ML",
            "subcategory_id": 1288
        },
        {
            "code": 10457195,
            "name": "LAVALOZA MAGISTRAL LIMON 21X300 ML",
            "subcategory_id": 1289
        },
        {
            "code": 10460001,
            "name": "ENCENDEDOR MOON TRANSPARENTE X25",
            "subcategory_id": 1030
        },
        {
            "code": 10460003,
            "name": "ENCENDEDOR MOON SOLIDO X20",
            "subcategory_id": 1030
        },
        {
            "code": 10460004,
            "name": "ENCENDEDOR NEON TRANSPARENTE X20",
            "subcategory_id": 1030
        },
        {
            "code": 10460006,
            "name": "ENCENDEDORES NEON SOLIDO X20",
            "subcategory_id": 1030
        },
        {
            "code": 10460008,
            "name": "ENCENDEDOR NEON ELECTROLITE X 25",
            "subcategory_id": 1030
        },
        {
            "code": 10460010,
            "name": "ENCENDEDOR MINI NEON ACINTURADO X25",
            "subcategory_id": 1030
        },
        {
            "code": 10460012,
            "name": "ENCENDEDOR RONSON ELECTROLITE X15",
            "subcategory_id": 1030
        },
        {
            "code": 10460014,
            "name": "ENCENDEDOR RONSON SOLIDO CLASICO X25",
            "subcategory_id": 1030
        },
        {
            "code": 10460016,
            "name": "PACK 2 ENC. MOON SOLID X20 + FOSFOROS",
            "subcategory_id": 1030
        },
        {
            "code": 10460018,
            "name": "FOSFOROS SAUCE X 10 UNI",
            "subcategory_id": 1030
        },
        {
            "code": 10460025,
            "name": "ENCENDEDOR BIC BX7  X20",
            "subcategory_id": 1030
        },
        {
            "code": 10460029,
            "name": "PACK ENCENDEDOR BIC BX7+ FOSFOROS SAUCE",
            "subcategory_id": 1030
        },
        {
            "code": 10460040,
            "name": "PAPELILLO RONSON  X50 LIBRILLOS",
            "subcategory_id": 1030
        },
        {
            "code": 10460042,
            "name": "PAPELILLO OCB PREMIUN 1.1/4  X25 (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10460044,
            "name": "PAPELILLO OCB ORGANICO 1.1/4 X 25 (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10460046,
            "name": "PAPELILLO OCB XPERT 1.1/4  X25 (40)",
            "subcategory_id": 1030
        },
        {
            "code": 10461001,
            "name": "BIO FRESCURA LIQ BOSQUE NATIVO 6X1.5 LT",
            "subcategory_id": 1290
        },
        {
            "code": 10461004,
            "name": "BIO FRES. LIQ DES. FLORIDO 6X1.5 NARANJO",
            "subcategory_id": 1290
        },
        {
            "code": 10461010,
            "name": "BIO FRESCURA LIQUIDO 6X3 LT. VERDE",
            "subcategory_id": 1290
        },
        {
            "code": 10461015,
            "name": "BIO FRES. LIQ DE. FLORIDO 6X3LT NARANJO",
            "subcategory_id": 1290
        },
        {
            "code": 10461020,
            "name": "BIO FRES. LIQ CAMPOS DE HIELO 6X3LT AZUL",
            "subcategory_id": 1290
        },
        {
            "code": 10462009,
            "name": "BIO FRESC POLVO CAMPOS DE HIELO 7 X2.5KG",
            "subcategory_id": 1291
        },
        {
            "code": 10462020,
            "name": "BIO FRES.POLVO TRADICIONAL 20X800G VERDE",
            "subcategory_id": 1291
        },
        {
            "code": 10462025,
            "name": "BIO FRES.POLVO DES.FLO. 20X800GR NARANJO",
            "subcategory_id": 1291
        },
        {
            "code": 10462030,
            "name": "BIO FRES.POLVO CAMPO HIELO 20X800G AZUL",
            "subcategory_id": 1291
        },
        {
            "code": 10462038,
            "name": "BIO FRESCURA POLVO  24X400GRS",
            "subcategory_id": 1291
        },
        {
            "code": 10462040,
            "name": "BIO FRESC.POLVO DES. FLOR 24X400G NARANJ",
            "subcategory_id": 1291
        },
        {
            "code": 10462050,
            "name": "BIO FRES. POLVO TRADICIONAL 4 X 4.5 KG",
            "subcategory_id": 1291
        },
        {
            "code": 10463001,
            "name": "WYN LAVALOZAS 6X1.5 LTS RTS",
            "subcategory_id": 1292
        },
        {
            "code": 10463005,
            "name": "WYN CREMA 8 X 750 GRS RTS",
            "subcategory_id": 1292
        },
        {
            "code": 10463009,
            "name": "WYN LAVALOZAS 6 X 750 ML   RST",
            "subcategory_id": 1292
        },
        {
            "code": 10463014,
            "name": "WYN LIMPIAVIDRIOS 6 X 750 ML  RST",
            "subcategory_id": 1292
        },
        {
            "code": 10463019,
            "name": "WYN ANTIGRASA 6 X 750 ML   RST",
            "subcategory_id": 1292
        },
        {
            "code": 10463024,
            "name": "WYN ANTIGRASA DOYPACK 15 X 400 ML",
            "subcategory_id": 1292
        },
        {
            "code": 10463030,
            "name": "WYN LIMPIAVIDRIOS DOY PACK 15 X 450 ML",
            "subcategory_id": 1292
        },
        {
            "code": 10463035,
            "name": "ALCOHOL GEL CLEANER PROFESS 12 X 500ML",
            "subcategory_id": 1292
        },
        {
            "code": 10463040,
            "name": "ALCOHOL GEL CLEANER PROFESS 24 X 250ML",
            "subcategory_id": 1292
        },
        {
            "code": 10464010,
            "name": "BIO POLVO DESIERTO FLORIDO MANGA 6 X 2.5",
            "subcategory_id": 1293
        },
        {
            "code": 10464020,
            "name": "BIO POLVO CAMPOS DE HIELO MANGA 6 X2.5KG",
            "subcategory_id": 1293
        },
        {
            "code": 10464025,
            "name": "TRIPACK BIO 18 X 2.5 KLS",
            "subcategory_id": 1293
        },
        {
            "code": 10464030,
            "name": "BIO POLVO DES FLORIDO MANGA 4X4.5 KG",
            "subcategory_id": 1293
        },
        {
            "code": 10464050,
            "name": "BIO POLVO CAMPOS DE HIELO MANGA 4X4.5 KG",
            "subcategory_id": 1293
        },
        {
            "code": 10464100,
            "name": "BIO POLVO BOSQUE NATIVO MANGA 4 X 4.5 KG",
            "subcategory_id": 1293
        },
        {
            "code": 10465003,
            "name": "ENCENDEDOR BIC MAXI X20 UNI (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10465005,
            "name": "ENCENDEDOR BX7  X 20 UNI (10)",
            "subcategory_id": 1294
        },
        {
            "code": 10465007,
            "name": "ENCENDEDOR BX7 SOLIDO  X 50 UNI (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10465008,
            "name": "ENCENDEDOR BIC MINI X12 UND",
            "subcategory_id": 1294
        },
        {
            "code": 10465009,
            "name": "ENCENDEDOR BIC MAXI X12 UNI",
            "subcategory_id": 1294
        },
        {
            "code": 10465015,
            "name": "MAQ.BIC COMFORT3  NORMAL AZUL X 12 (40)",
            "subcategory_id": 1294
        },
        {
            "code": 10465017,
            "name": "MAQ.BIC COMFORT3 SENSIBL VERD X 12 (40)",
            "subcategory_id": 1294
        },
        {
            "code": 10465019,
            "name": "MAQ.BIC HYBRID ADVANC 6+1   X6 UNI (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10465021,
            "name": "MAQUINA BIC 2  X 24 UNI",
            "subcategory_id": 1294
        },
        {
            "code": 10465023,
            "name": "SENSITIVE BIC X 24",
            "subcategory_id": 1294
        },
        {
            "code": 10465025,
            "name": "MAQUINA HOMBRE CONFORT 2",
            "subcategory_id": 1294
        },
        {
            "code": 10465026,
            "name": "TRIPACK BIO 18 X 2.5KLS",
            "subcategory_id": 1294
        },
        {
            "code": 10465029,
            "name": "MAQUINA FEMENINA SOLEIL",
            "subcategory_id": 1294
        },
        {
            "code": 10465035,
            "name": "LAPIZ BIC AZUL X 50 UNI (24)",
            "subcategory_id": 1294
        },
        {
            "code": 10465037,
            "name": "LAPIZ BIC NEGRO X 50 UNI (24)",
            "subcategory_id": 1294
        },
        {
            "code": 10465039,
            "name": "LAPIZ BIC ROJO X 50 UNI (24)",
            "subcategory_id": 1294
        },
        {
            "code": 10465041,
            "name": "LAPIZ BIC VERDE X 50 UNI (24)",
            "subcategory_id": 1294
        },
        {
            "code": 10465043,
            "name": "LAPIZ BIC CRISTAL FINO AZUL X50 UNI (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10465045,
            "name": "LAPIZ BIC CRISTAL FINO NEGRO X50 UN (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10465047,
            "name": "LAPIZ BIC CRISTAL FINO ROJO X50 UNI (12)",
            "subcategory_id": 1294
        },
        {
            "code": 10470050,
            "name": "TE LIPTON YELLOW LABEL 48CAJAS X20BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470055,
            "name": "TE LIPTON YELLOW LABEL 16CAJ X100BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470060,
            "name": "TE LIPTON ROYAL CEYLON 48CAJAS X20BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470065,
            "name": "TE LIPTON ROYAL CEYLON 16CAJ X 100BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470070,
            "name": "TE LIPTON VERDE  48CAJAS X20BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470075,
            "name": "TE LIPTON VERDE BERRIES 48CAJ X20BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470080,
            "name": "TE LIPTON MANZANILLA 24 CAJ X20BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470085,
            "name": "TE LIPTON FRUTOS ROJOS 12CAJAS X10BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10470090,
            "name": "TE LIPTON LIMON JENGIBRE 12CAJ X10BOLSAS",
            "subcategory_id": 1295
        },
        {
            "code": 10476001,
            "name": "PAÑAL HUPPY BABY GRANDE 6X20",
            "subcategory_id": 1296
        },
        {
            "code": 10476002,
            "name": "PAÑAL HUPPY BABY PEQUEÑO 6X30",
            "subcategory_id": 1296
        },
        {
            "code": 10476005,
            "name": "PAÑAL HUPPY BABY MEDIANO 6X24",
            "subcategory_id": 1296
        },
        {
            "code": 10476010,
            "name": "PAÑAL HUPPY BABY EXTRA GRANDE 6X18",
            "subcategory_id": 1296
        },
        {
            "code": 10476015,
            "name": "PAÑAL NIÑO NB NOCTURNA EXTRA GRANDE 6X20",
            "subcategory_id": 1296
        },
        {
            "code": 10476020,
            "name": "PAÑAL NIÑO NB NOCTURNA GRANDE 6X24",
            "subcategory_id": 1296
        },
        {
            "code": 10476025,
            "name": "PAÑAL NIÑO NB NOCTURNA MEDIANO 6X28",
            "subcategory_id": 1296
        },
        {
            "code": 10476030,
            "name": "PAÑAL ADULTO GERIAMAX GRANDE 8X8",
            "subcategory_id": 1296
        },
        {
            "code": 10476035,
            "name": "PAÑAL ADULTO GERIAMAX MEDIANO 8X9",
            "subcategory_id": 1296
        },
        {
            "code": 10476040,
            "name": "PAÑAL ADULTO GERIAMAX EXTRA GRANDE 7X8",
            "subcategory_id": 1296
        },
        {
            "code": 10476045,
            "name": "TOALLAS HUMEDAS NAT MASTER CORPUS 10X40",
            "subcategory_id": 1296
        },
        {
            "code": 10476051,
            "name": "TOALLA FEMENINA GERIAMAX 6X20",
            "subcategory_id": 1296
        },
        {
            "code": 10476056,
            "name": "TOALLA HIG NAT GEL MAIS 6 X 8 UN",
            "subcategory_id": 1296
        },
        {
            "code": 10476061,
            "name": "PROTECTOR DIARIO NAT DAILY 8 X 20 UN",
            "subcategory_id": 1296
        },
        {
            "code": 10478010,
            "name": "PAÑAL CHIKOOL ADULTO PANTS G X 16 UNID",
            "subcategory_id": 1297
        },
        {
            "code": 10478020,
            "name": "PAÑAL CHIKOOL ADULTO PANTS XG X 16 UNID",
            "subcategory_id": 1297
        },
        {
            "code": 10478030,
            "name": "PAÑAL CHIKOOL ADULTO G X 20 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478040,
            "name": "PAÑAL CHIKOOL ADULTO XG X 20 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478050,
            "name": "PAÑAL CHIKOOL COOL M X 18 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478060,
            "name": "PAÑAL CHIKOOL COOL G X 18 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478070,
            "name": "PAÑAL CHIKOOL COOL XG X 14 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478080,
            "name": "PAÑAL CHIKOOL COOL XXG X 14 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478090,
            "name": "PAÑAL CHIKOOL COOL XXXG X 14 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478100,
            "name": "CHIKOOL PROTECTOR CAMA  X 8 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478110,
            "name": "CHIKOOL TOALLAS X 50 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478120,
            "name": "CHIKOOL TOALLA GOLD X 80 UNIDADES",
            "subcategory_id": 1297
        },
        {
            "code": 10478130,
            "name": "CHIKOOL TOALLA DESINFECTANTE X 80 UNIDAD",
            "subcategory_id": 1297
        },
        {
            "code": 10478200,
            "name": "EXHIBIDOR CHIKOOL COLOR VERDE",
            "subcategory_id": 1297
        },
        {
            "code": 10478201,
            "name": "EXHIBIDOR CHIKOOL COLOR AMARILLO",
            "subcategory_id": 1297
        },
        {
            "code": 10479005,
            "name": "TOALLAS HUMEDAS COTTONSEC 12 PAC X 50 UN",
            "subcategory_id": 1298
        },
        {
            "code": 10479010,
            "name": "TOALLA HIGIENICA NORMAL C/ALAS 16P X 8UN",
            "subcategory_id": 1298
        },
        {
            "code": 10479015,
            "name": "TOALLA HIGIE NOCTURNA C/ALAS 16P X 8UN",
            "subcategory_id": 1298
        },
        {
            "code": 10479025,
            "name": "PAÑAL ADULTO PROACTIVE TALLA G 6B X 8U",
            "subcategory_id": 1298
        },
        {
            "code": 10479035,
            "name": "PAÑAL ADULTO PROACTIVE TALLA M 6B X 8U",
            "subcategory_id": 1298
        },
        {
            "code": 10480003,
            "name": "PAPEL HIG REGIO SUPER CLASS 4X25MTS  X12",
            "subcategory_id": 1299
        },
        {
            "code": 10480004,
            "name": "PAPEL HIG REGIO SUPER CLASS 6X25MTS  X8",
            "subcategory_id": 1299
        },
        {
            "code": 10480005,
            "name": "PAPEL HIG REGIO MAXIMO 4X50MTS  X12",
            "subcategory_id": 1299
        },
        {
            "code": 10480009,
            "name": "PAPEL HIG REGIO SUPER CLASS 24X25MT  X2",
            "subcategory_id": 1299
        },
        {
            "code": 10480011,
            "name": "PAPEL HIG INSTITUCIONAL 6 ROLL X 300 MTS",
            "subcategory_id": 1299
        },
        {
            "code": 10480013,
            "name": "PAPEL HIG JUMBO EXT BCO 4 ROLL X 500 MTS",
            "subcategory_id": 1299
        },
        {
            "code": 10481001,
            "name": "TOALLA COCINA REGIO 3X12.6 MTS X8",
            "subcategory_id": 1300
        },
        {
            "code": 10481006,
            "name": "TOALLA D/H P/PICADA VERDE 2X80MT",
            "subcategory_id": 1300
        },
        {
            "code": 10481012,
            "name": "TOALLA IMP ITALIANA MAXIMA REGIO 3X100 M",
            "subcategory_id": 1300
        },
        {
            "code": 10481017,
            "name": "SERVILLETA REGIO COCTEL 24X24 300UX12PQ",
            "subcategory_id": 1300
        },
        {
            "code": 10481021,
            "name": "SERVILLETA COKTAIL REGIO 24X24 200UX15PQ",
            "subcategory_id": 1300
        },
        {
            "code": 10481026,
            "name": "TOA. JUMBO EXBCA 2X250MT DISP TECNOROLL",
            "subcategory_id": 1300
        },
        {
            "code": 10481028,
            "name": "TOALLA INTERFOLIADA 18X250 UND",
            "subcategory_id": 1300
        },
        {
            "code": 10481032,
            "name": "TOALLA TREBOL U/H PREPICADA 9 X 100MTS",
            "subcategory_id": 1300
        },
        {
            "code": 10481033,
            "name": "TOALLA ECOROLL HS 2 X 190 MTS",
            "subcategory_id": 1300
        },
        {
            "code": 10481040,
            "name": "TOALLA IMP ITALIANA MAXIMA REGIO 6X100 M",
            "subcategory_id": 1300
        },
        {
            "code": 10482001,
            "name": "AEROSOL HO WIESE MANZ/CANEL 12 X 226GR",
            "subcategory_id": 1301
        },
        {
            "code": 10482002,
            "name": "AEROSOL HO WIESE TAHITI 12 X 226GR",
            "subcategory_id": 1301
        },
        {
            "code": 10482003,
            "name": "AEROSOL HO WIESE HAWA/GINGER 12 X 226GR",
            "subcategory_id": 1301
        },
        {
            "code": 10482004,
            "name": "AEROSOL HO WIESE LAVANDA 12 X 226GR",
            "subcategory_id": 1301
        },
        {
            "code": 10482005,
            "name": "AEROSOL HO WIESE PARAISO FLORAL 12 X 226",
            "subcategory_id": 1301
        },
        {
            "code": 10482007,
            "name": "AEROSOL HO WIESE FRUTAS ROJAS 12X226 GR",
            "subcategory_id": 1301
        },
        {
            "code": 10483200,
            "name": "TOALLAS HUMEDAS ADULTO FEEL CLEAN  24X40",
            "subcategory_id": 1302
        },
        {
            "code": 10483205,
            "name": "TOALLAS HUMEDAS HIG REGIO BEBE 48X48 UNI",
            "subcategory_id": 1302
        },
        {
            "code": 10483210,
            "name": "TOALLA HUMEDAS INTIMA FEEL CLEAN  16X24",
            "subcategory_id": 1302
        },
        {
            "code": 10483215,
            "name": "TOALLA HUM DESMAQUILLANTES FEEL CLEAN X",
            "subcategory_id": 1302
        },
        {
            "code": 10484001,
            "name": "TOALLA HIGIENICA U/FINA DIA C/ALAS 8UX36",
            "subcategory_id": 1303
        },
        {
            "code": 10484002,
            "name": "TOA. HIG. CARE UP NOCT. U/FINA 12X16UNI.",
            "subcategory_id": 1303
        },
        {
            "code": 10484003,
            "name": "TOA. HIG. CARE UP DIA U/FINA 12X16 UNID.",
            "subcategory_id": 1303
        },
        {
            "code": 10484005,
            "name": "TOALLA HIGIENICA U/FINA NOC C/ALAS 8UX36",
            "subcategory_id": 1303
        },
        {
            "code": 10484010,
            "name": "PROTECTOR DIARIO U/FINA 60X20UNID.",
            "subcategory_id": 1303
        },
        {
            "code": 10484012,
            "name": "COTONITOS DE ALGODON CARE UP X 6(20)",
            "subcategory_id": 1303
        },
        {
            "code": 10484015,
            "name": "PASTA DENTAL FRESH UP 3X90GR (24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484018,
            "name": "PASTA DENTAL FRESH UP  6X130GR (6)",
            "subcategory_id": 1303
        },
        {
            "code": 10484020,
            "name": "PASTA DENTAL FRESH UP 12X50GR (12)",
            "subcategory_id": 1303
        },
        {
            "code": 10484022,
            "name": "PASTA DENTAL FRESH TRIPL ACC.6X150GR (8)",
            "subcategory_id": 1303
        },
        {
            "code": 10484023,
            "name": "PASTA DENTAL FRESH UP KIDS  12X75GR (12)",
            "subcategory_id": 1303
        },
        {
            "code": 10484025,
            "name": "PASTA DENTAL WHITENING  3X90GR (24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484026,
            "name": "PAS. DENT WHITENING 180GRS+CEPIL.X6(7)",
            "subcategory_id": 1303
        },
        {
            "code": 10484028,
            "name": "PASTA DENTAL SENSITIVE 6X100 GRS.(8)",
            "subcategory_id": 1303
        },
        {
            "code": 10484030,
            "name": "PASTA DENT. 3/1+ CEPILLO E HILO 6X125(8)",
            "subcategory_id": 1303
        },
        {
            "code": 10484032,
            "name": "ENJUAGUE BUCAL MTA. ZERO 24X250ML",
            "subcategory_id": 1303
        },
        {
            "code": 10484040,
            "name": "CEP. DENTAL ADULT MASSAGE  DISP.X 12(24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484045,
            "name": "CEP. DENTAL ADULT SILICON  DISP X 12(24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484050,
            "name": "CEP. DENTAL ADULT UNIVERS DISP.X 12 (24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484055,
            "name": "CEP. DENTAL KIDS PENGUIN  DISP.X 12 (24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484058,
            "name": "CEPILLO DENTAL  UNIV. SUAVE X12",
            "subcategory_id": 1303
        },
        {
            "code": 10484060,
            "name": "TOALLA HUMEDA X50 UNIDADES SIN TAPA (48)",
            "subcategory_id": 1303
        },
        {
            "code": 10484065,
            "name": "TOALLA HUMEDA X80 UNIDADES CON TAPA (24)",
            "subcategory_id": 1303
        },
        {
            "code": 10484070,
            "name": "MASCARILLA BIO MASK X 50 UNIDADES",
            "subcategory_id": 1303
        },
        {
            "code": 10484072,
            "name": "ALCOHOL GEL WINKLER 12UNI X 1LT",
            "subcategory_id": 1303
        },
        {
            "code": 10485002,
            "name": "ATUN BUSCAO LOMITO ACEITE 48X184 GRS.",
            "subcategory_id": 1304
        },
        {
            "code": 10485005,
            "name": "ATUN  BUSCAO  LOMITO  AGUA 48X 184GRS",
            "subcategory_id": 1304
        },
        {
            "code": 10485008,
            "name": "ATUN BARQUITO DESM. ACEITE 170G X 48",
            "subcategory_id": 1304
        },
        {
            "code": 10485010,
            "name": "ATUN  BARQUITO DESM. AGUA 48X170 GRS.",
            "subcategory_id": 1304
        },
        {
            "code": 10485012,
            "name": "SARDINA ACEITE TOMATE BARQUITO 50X125 GR",
            "subcategory_id": 1304
        },
        {
            "code": 10485015,
            "name": "SARDINA  ACEITE TOMATE BARQUITO 24X425GR",
            "subcategory_id": 1304
        },
        {
            "code": 10485020,
            "name": "SARDINA ACEITE CLUB BARQUITO 50X125GRS",
            "subcategory_id": 1304
        },
        {
            "code": 10485022,
            "name": "SARDINA ACEITE CLUB BARQUITO 10X125GRS",
            "subcategory_id": 1304
        },
        {
            "code": 10485025,
            "name": "SARDINA  ACEITE BARQUITO 24X425GR",
            "subcategory_id": 1304
        },
        {
            "code": 10485051,
            "name": "JUREL C/ TOMATE BARQUITO 24 X 425 GRS",
            "subcategory_id": 1304
        },
        {
            "code": 10485055,
            "name": "JUREL BARQUITO 24 X 425 GRS",
            "subcategory_id": 1304
        },
        {
            "code": 10486014,
            "name": "DURAZNO NAC. TROC. NOVAFRUTA 6X3 K.",
            "subcategory_id": 1305
        },
        {
            "code": 10486020,
            "name": "DURAZNO IMP. MITAD. EL JARDIN 24X425 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486022,
            "name": "DURAZNO IMP. TROC. EL JARDIN 24X425 GRS.",
            "subcategory_id": 1305
        },
        {
            "code": 10486024,
            "name": "DURAZNO IMP. MITAD. EL JARDIN 24X567 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486026,
            "name": "DURAZNO IMP. TROC. EL JARDIN 24X567 GRS.",
            "subcategory_id": 1305
        },
        {
            "code": 10486028,
            "name": "DURAZNO IMP. MITAD. EL JARDIN 24X820 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486030,
            "name": "DURAZNO IMP. TROC. EL JARDIN 24X820 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486032,
            "name": "DURAZNO IMP.TROC EL JARDIN 6 X 3 KG.",
            "subcategory_id": 1305
        },
        {
            "code": 10486034,
            "name": "DURAZNO IMP MITAD EL JARDIN 6X3KL",
            "subcategory_id": 1305
        },
        {
            "code": 10486035,
            "name": "DURAZNO IMP. MITAD. PURAVIDA 24X425 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486037,
            "name": "DURAZNO IMP. CUBITO. PURAVIDA 24X425GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486040,
            "name": "DURAZNO IMP. MITAD PURA VIDA 6X3 K.",
            "subcategory_id": 1305
        },
        {
            "code": 10486043,
            "name": "DURAZNO IMP. MITAD. PURAVIDA 24X567 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486044,
            "name": "DURAZNO IMP.TROC.  PURAVIDA 24X567 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486045,
            "name": "DURAZNO IMP.MITAD PURA VIDA 6 X 3 KG",
            "subcategory_id": 1305
        },
        {
            "code": 10486046,
            "name": "DURAZNO IMP.TROC. PURA VIDA 6 X 3 KG",
            "subcategory_id": 1305
        },
        {
            "code": 10486047,
            "name": "FRUTILLA AL JUGO IMPORT EL JARDIN 6X3KG",
            "subcategory_id": 1305
        },
        {
            "code": 10486049,
            "name": "FRUTILLA AL JUGO IMPORT EL JARDIN 24X425",
            "subcategory_id": 1305
        },
        {
            "code": 10486050,
            "name": "FRUTILLA  AL JUGO IMP. EL JARDIN 12X800",
            "subcategory_id": 1305
        },
        {
            "code": 10486051,
            "name": "FRUTILLA AL JUGO IMPORT EL JARDIN 24X567",
            "subcategory_id": 1305
        },
        {
            "code": 10486052,
            "name": "FRUTILLA AL JUGO IMPORT EL JARDIN 24X820",
            "subcategory_id": 1305
        },
        {
            "code": 10486054,
            "name": "COCTAIL DE FRUTA NAC. NOVAFRUTA 24X425GR",
            "subcategory_id": 1305
        },
        {
            "code": 10486055,
            "name": "COCTAIL DE FRUTA NAC. NOVAFRUTA 24X567GR",
            "subcategory_id": 1305
        },
        {
            "code": 10486056,
            "name": "COCTAIL DE FRUTA NAC. NOVAFRUTA 24X820GR",
            "subcategory_id": 1305
        },
        {
            "code": 10486058,
            "name": "COCTAIL DE FRUTA EL VERGEL 6X3 K",
            "subcategory_id": 1305
        },
        {
            "code": 10486060,
            "name": "PIÑA RODAJAS NOVAFRUTA 24X567 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486062,
            "name": "PIÑA TROCITO NOVAFRUTA 24X567 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486064,
            "name": "PIÑA RODAJAS NOVAFRUTA 24X850 GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10486066,
            "name": "PIÑA TROCITO NOVAFRUTA 24X850 GRS.",
            "subcategory_id": 1305
        },
        {
            "code": 10486068,
            "name": "PIÑA RODAJAS NOVAFRUTA 6X3 K.",
            "subcategory_id": 1305
        },
        {
            "code": 10486070,
            "name": "PIÑA TROCITOS NOVAFRUTA 6X3 K.",
            "subcategory_id": 1305
        },
        {
            "code": 10486110,
            "name": "PERAS TROCITOS NOVAFRUTA 24X820GRS",
            "subcategory_id": 1305
        },
        {
            "code": 10487001,
            "name": "PALMITOS ENTEROS MAKAO 24X400 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487005,
            "name": "PALMITOS RODAJAS MAKAO 24X400 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487007,
            "name": "PALMITOS TROZOS MAKAO 24X400 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487008,
            "name": "PALMITOS ENTEROS MAKAO 12X800 GRS",
            "subcategory_id": 1306
        },
        {
            "code": 10487009,
            "name": "PALMITOS LAMINADOS MAKAO 12X800 GRS",
            "subcategory_id": 1306
        },
        {
            "code": 10487010,
            "name": "CHAMPIÑONES ENTEROS MAKAO 24X425 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487012,
            "name": "CHAMPIÑONES  LAMINADOS MAKAO 24X425 GRS",
            "subcategory_id": 1306
        },
        {
            "code": 10487015,
            "name": "CHAMPIÑONES ENTEROS MAKAO 24X820 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487018,
            "name": "CHAMPIÑONES LAMINADOS MAKAO 24X820 GRS",
            "subcategory_id": 1306
        },
        {
            "code": 10487020,
            "name": "CHAMPIÑONES ENTERO MAKAO 24X184 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487022,
            "name": "CHAMPIÑONES LAMINADO MAKAO 24X184 GRS.",
            "subcategory_id": 1306
        },
        {
            "code": 10487030,
            "name": "ARVEJITAS EL JARDIN 48X310 GR",
            "subcategory_id": 1306
        },
        {
            "code": 10487035,
            "name": "CHOCLO EN GRANO MAKAO 24X425 GR",
            "subcategory_id": 1306
        },
        {
            "code": 10487040,
            "name": "CHOCLITO COCTAIL MAKAO 24X425 GR",
            "subcategory_id": 1306
        },
        {
            "code": 10487100,
            "name": "SALSA DE TOMATE EL JARDIN 48X200",
            "subcategory_id": 1306
        },
        {
            "code": 10487105,
            "name": "SALSA DE TOMATE LATA MAKAO 48 X 210 GRS",
            "subcategory_id": 1306
        },
        {
            "code": 10488001,
            "name": "ARVEJAS PARTIDAS INNOVA X 25 KILOS",
            "subcategory_id": 1307
        },
        {
            "code": 10488005,
            "name": "LENTEJA IMPORTADA N6 INNOVA X 25KILOS",
            "subcategory_id": 1307
        },
        {
            "code": 10488010,
            "name": "POROTO HALLADO ALEMAN INPORT  X 25 KILOS",
            "subcategory_id": 1307
        },
        {
            "code": 10488015,
            "name": "GARBANZO IMPOR SIN PIEL INNOVA X 25KILOS",
            "subcategory_id": 1307
        },
        {
            "code": 10488020,
            "name": "POROTOS (PINTO) ALLAO ALEMAN AMERICANO",
            "subcategory_id": 1307
        },
        {
            "code": 10488040,
            "name": "POROTO BLANCO VILLA MARIA 10X1 KG",
            "subcategory_id": 1307
        },
        {
            "code": 10488045,
            "name": "ARVEJA PARTIDA VILLA MARIA 10X1 KG",
            "subcategory_id": 1307
        },
        {
            "code": 10488050,
            "name": "LENTEJA 5MM VILLA MARIA 10X1 KG",
            "subcategory_id": 1307
        },
        {
            "code": 10488055,
            "name": "POROTO NEGRO VILLA MARIA 10X1 KG",
            "subcategory_id": 1307
        },
        {
            "code": 10488800,
            "name": "LEVADURA PASHA 36X125 GRS",
            "subcategory_id": 1307
        },
        {
            "code": 10488810,
            "name": "LEVADURA PASHA 20 X 500",
            "subcategory_id": 1307
        },
        {
            "code": 10489001,
            "name": "TE CEYLAN 24 X 20 BOLSAS",
            "subcategory_id": 1308
        },
        {
            "code": 10489003,
            "name": "TE CEYLAN ANY TYME  12 X  100 GRS",
            "subcategory_id": 1308
        },
        {
            "code": 10489004,
            "name": "TE CEYLAN ANY TYME 24 X 20 X 2GR",
            "subcategory_id": 1308
        },
        {
            "code": 10489005,
            "name": "TE CEYLAN QUALITEA 24 X 20 BOLSITAS",
            "subcategory_id": 1308
        },
        {
            "code": 10489006,
            "name": "TE EBRIDEY 24 X 20 BOLSITAS",
            "subcategory_id": 1308
        },
        {
            "code": 10489007,
            "name": "TE CEYLAN QUALITEA 12 X 100 X 2 GRS BOL",
            "subcategory_id": 1308
        },
        {
            "code": 10489008,
            "name": "TE QUALITEA 6 SABORES 6 X 10 BOLSA",
            "subcategory_id": 1308
        },
        {
            "code": 10489010,
            "name": "TE CEYLAN ROSITA  24 X 20 BOLSITAS",
            "subcategory_id": 1308
        },
        {
            "code": 10489012,
            "name": "TE QUALITEA VERDE 24 X 25 BOLSAS X 2 GRS",
            "subcategory_id": 1308
        },
        {
            "code": 10489013,
            "name": "TE QUALITEA VERDE 12 X 100 BOLSAS X 2GRS",
            "subcategory_id": 1308
        },
        {
            "code": 10495007,
            "name": "ATUN SAN JOSE LOMITO EN AGUA 48X160",
            "subcategory_id": 1309
        },
        {
            "code": 10495016,
            "name": "ATUN SAN JOSE LOMITO EN ACEITE 48X160 G",
            "subcategory_id": 1309
        },
        {
            "code": 10495025,
            "name": "JUREL SAN JOSE MEDALLON 24X425GR",
            "subcategory_id": 1309
        },
        {
            "code": 10495065,
            "name": "JUREL NATURAL SAN JOSE 24X425GR",
            "subcategory_id": 1309
        },
        {
            "code": 10495071,
            "name": "LOMOS DE JUREL AHUMADO SANJOSE 48X160G",
            "subcategory_id": 1309
        },
        {
            "code": 10495076,
            "name": "LOMOS DE JUREL AL ACEITE SANJOSE 48X160G",
            "subcategory_id": 1309
        },
        {
            "code": 10495079,
            "name": "LOMOS DE JUREL ALNATURALSAN JOSE 48X160G",
            "subcategory_id": 1309
        },
        {
            "code": 10495089,
            "name": "CABALLA COLORADO24 X 425 GRS",
            "subcategory_id": 1309
        },
        {
            "code": 10495200,
            "name": "CHORITO ENTERO NATURAL 48X190GR",
            "subcategory_id": 1309
        },
        {
            "code": 10495205,
            "name": "CHORITOS ENTERO AL ACEITE 48X190GR",
            "subcategory_id": 1309
        },
        {
            "code": 10496001,
            "name": "CHORITO NATURAL  SAN LAZARO  24 X170GR",
            "subcategory_id": 1310
        },
        {
            "code": 10496010,
            "name": "CHORITO EN ACEITE  SAN LAZARO  24 X170GR",
            "subcategory_id": 1310
        },
        {
            "code": 10496015,
            "name": "CHORITO AHUMADO SAN LAZARO  24 X170GR",
            "subcategory_id": 1310
        },
        {
            "code": 10496125,
            "name": "CHORITO SURTIDO SAN LAZARO  24 X170GR",
            "subcategory_id": 1310
        },
        {
            "code": 10496200,
            "name": "JUREL SAN LAZARO 24X425G",
            "subcategory_id": 1310
        },
        {
            "code": 10497005,
            "name": "SOPA INSTAN. ANGELMO FIDEO/POLLO X24X65G",
            "subcategory_id": 1311
        },
        {
            "code": 10497010,
            "name": "SOPA INSTAN. ANGELMO FIDEO/CARNE X24X65G",
            "subcategory_id": 1311
        },
        {
            "code": 10497015,
            "name": "SOPA INSTAN.ANGELMO FIDEO/VEGETAL 24X65G",
            "subcategory_id": 1311
        },
        {
            "code": 10498001,
            "name": "ATUN DESMEN ACEITE  ANGELMO  48 X160 GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498003,
            "name": "ATUN DESMEN  NATURAL ANGELMO 48X160GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498010,
            "name": "ATUN LOMITO ACEITE ANGELMO 48X160 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498013,
            "name": "ATUN LOMITO NATURAL ANGELMO 48X160 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498022,
            "name": "CHORITOS ACEITE RO ANGELMO 24X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498028,
            "name": "CHORITOS NATURAL RO ANGELMO 24X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498032,
            "name": "CHORITOS SALS PICA RO ANGELMO 24X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498034,
            "name": "CHORITOS AHUM ACEI RO ANGELMO 24X190 GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498042,
            "name": "CHOLGAS ACEITE RO ANGELMO 24X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498047,
            "name": "CHOLGAS NATURAL  RO ANGELMO 24X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498090,
            "name": "PICADI MARIS ACEITE   ANGELMO 48X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498092,
            "name": "PICADI MARIS ACEITE   ANGELMO 24X425 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498094,
            "name": "PICADI MARIS NATURAL  ANGELMO 48X190 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498096,
            "name": "PICADI MARIS NATURAL  ANGELMO 24X454 GRS",
            "subcategory_id": 1312
        },
        {
            "code": 10498505,
            "name": "CHAMPIÑONES ENTEROS ANGELMO 24X400GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498510,
            "name": "CHAMPIÑONES ENTEROS  ANGELMO 24X184 GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498515,
            "name": "CHAMPIÑONES LAMINADOS ANGELMO 24X400GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498520,
            "name": "CHAMPIÑONES LAMINADOS ANGELO 24X184 GR",
            "subcategory_id": 1312
        },
        {
            "code": 10498525,
            "name": "JIBIA NATURAL ANGELMO 24X425GR",
            "subcategory_id": 1312
        },
        {
            "code": 10499005,
            "name": "PALMITOS ENTERO ANGELMO 24X400 GR",
            "subcategory_id": 1313
        },
        {
            "code": 10499010,
            "name": "PALMITOS RODAJA ANGELMO 24X400 GR",
            "subcategory_id": 1313
        },
        {
            "code": 10499015,
            "name": "PALMITOS ENTERO ANGELMO 12X800 GR",
            "subcategory_id": 1313
        },
        {
            "code": 10499020,
            "name": "PALMITOS RODAJA ANGELMO 12X800 GR",
            "subcategory_id": 1313
        },
        {
            "code": 10499025,
            "name": "DURAZNO MITAL ALMIB ANGELMO 12X820 GR",
            "subcategory_id": 1313
        },
        {
            "code": 10500002,
            "name": "COOL DOG HUESO 25 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500004,
            "name": "COOL DOG CROQUETA 25 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500006,
            "name": "COOL DOG MIX 25 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500012,
            "name": "AS KAT ALIMENTO GATO X 2OKL",
            "subcategory_id": 1314
        },
        {
            "code": 10500022,
            "name": "COOLD DOG CROQUETA X 10KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500025,
            "name": "COOL DOG MIX X10 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500031,
            "name": "MASTIN ADULTO MALLA P.P 22 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500036,
            "name": "MASTIN MADRE CACHORRO BOLSA 15 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500051,
            "name": "ALIM. GATO BIO CAT ADULTO X 25 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10500500,
            "name": "ALIMENTO MAL ESTADO MOLINO CAUPOLICAN",
            "subcategory_id": 1314
        },
        {
            "code": 10500505,
            "name": "REGAL PET ADULTO BOLSA 18 KL",
            "subcategory_id": 1314
        },
        {
            "code": 10501005,
            "name": "ALI. DE PERRO ECONOMICAN CROQUETA 25 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10501010,
            "name": "ALI. DE PERRO ECONOMICAN  HUESO 25 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10501515,
            "name": "ALIMENTO  DE PERRO TOQUI CROQUETA 25 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10501520,
            "name": "ALI. DE PERRO ECONOMICAN HUESO 10 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10501525,
            "name": "ALI. GATO ECONOMICAT SALMON ADULTO 15 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10501530,
            "name": "ALI. DE PERRO ECONOMICAN GUAU GUAU 25 KG",
            "subcategory_id": 1315
        },
        {
            "code": 10505005,
            "name": "ACOMER PREMIUM ADULTO X 10 KG",
            "subcategory_id": 1316
        },
        {
            "code": 10505021,
            "name": "TRIGONO CACHORRO X10",
            "subcategory_id": 1316
        },
        {
            "code": 10505023,
            "name": "TRIGONO CAT X 10",
            "subcategory_id": 1316
        },
        {
            "code": 10505501,
            "name": "ALIMENTO MASCOTA BALANCEAR X 15 KLS",
            "subcategory_id": 1316
        },
        {
            "code": 10509001,
            "name": "ALIMENTO FREE GO X 10KL",
            "subcategory_id": 1317
        },
        {
            "code": 10510002,
            "name": "PEDIGREE CARNE-POLLO-CEREALES X 21K.",
            "subcategory_id": 1318
        },
        {
            "code": 10510003,
            "name": "PEDIGREE  CACHORRO SANO CRECIMIENTO 21KL",
            "subcategory_id": 1318
        },
        {
            "code": 10510005,
            "name": "PEDIGREE ADULTO NUTRI COMPLETA 21KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510006,
            "name": "PEDIGREE RAZA PEQUEÑA 21KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510008,
            "name": "PEDIGREE SENIOR X 21 KL",
            "subcategory_id": 1318
        },
        {
            "code": 10510012,
            "name": "PEDIGRE SOBRE ADULTO SABOR CARNE 12X100G",
            "subcategory_id": 1318
        },
        {
            "code": 10510015,
            "name": "WHISKAS ARC PESCADO 10KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510020,
            "name": "WHISKAS POUCH CARNE 12X85GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510026,
            "name": "WHISKAS POUCH GATITO 24X85GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510032,
            "name": "WHISKAS POUCH POLLO 12X85GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510038,
            "name": "WHISKAS POUCH SARDINA 12X85GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510044,
            "name": "PEDIGREE POUCH ADULTO/POLLO 12X100GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510050,
            "name": "PEDIGREE POUCH CACH CARNE 12X85GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510055,
            "name": "PEDIGREE POUCH ADULTO R/P CARNE 12X100GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510060,
            "name": "PEDIGREE POUCH AD SENIOR CARNE 12X100GR",
            "subcategory_id": 1318
        },
        {
            "code": 10510105,
            "name": "WHISKAS GATITOS 10 KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510110,
            "name": "WHISKAS CARNE 10 KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510115,
            "name": "WHISKAS POLLO 10 KG",
            "subcategory_id": 1318
        },
        {
            "code": 10510120,
            "name": "WHISKAS PESCADO 10 KG",
            "subcategory_id": 1318
        },
        {
            "code": 10512001,
            "name": "MASTER DOG ADULTO VEJET X 18 KL",
            "subcategory_id": 1319
        },
        {
            "code": 10512003,
            "name": "MASTER DOG ADULTO CARNE X 18 KL",
            "subcategory_id": 1319
        },
        {
            "code": 10512010,
            "name": "MASTER DOG CACHORRO X 18 KL",
            "subcategory_id": 1319
        },
        {
            "code": 10512021,
            "name": "MASTER CAT SALMON SARDINA X 20 KL",
            "subcategory_id": 1319
        },
        {
            "code": 10512025,
            "name": "MASTER CAT ADULTO CARNE X 20 KL",
            "subcategory_id": 1319
        },
        {
            "code": 10515002,
            "name": "CHAMPION DOG ADULTO M&G SALMON POLLO 18K",
            "subcategory_id": 1320
        },
        {
            "code": 10515005,
            "name": "CHAMPION DOG CACHORRO MEDIANO C&P X18 KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515009,
            "name": "CHAMPION DOG ADULTO MINIS C&PX18KG",
            "subcategory_id": 1320
        },
        {
            "code": 10515010,
            "name": "CHAMPION DOG ADULTO M&G CARNE POLLO X18K",
            "subcategory_id": 1320
        },
        {
            "code": 10515013,
            "name": "CHAMPION DOG SENIOR CARNE Y POLLO X18KG",
            "subcategory_id": 1320
        },
        {
            "code": 10515021,
            "name": "CHAMPION CAT POLLO  X 20 KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515023,
            "name": "CHAMPION CAT PESCADO 20KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515024,
            "name": "CHAMPION CAT CARNE 20KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515025,
            "name": "CHAMPION CAT GATITOS X20KG",
            "subcategory_id": 1320
        },
        {
            "code": 10515027,
            "name": "SABRO CAT X 20 KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515035,
            "name": "SABRO KAN X 25 KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515039,
            "name": "SABRO CAT X 8 KL",
            "subcategory_id": 1320
        },
        {
            "code": 10515040,
            "name": "CHAMPION  DOG CARNE/VERD.24X100 GRS",
            "subcategory_id": 1320
        },
        {
            "code": 10515041,
            "name": "CHAMPION DOG AD. SABOR POLLO 24X100GRS.",
            "subcategory_id": 1320
        },
        {
            "code": 10515042,
            "name": "CHAMPION DOG  CACH. POLLO 24X100 GRS",
            "subcategory_id": 1320
        },
        {
            "code": 10515043,
            "name": "CHAMPION DOG R/PEQ. SABOR PAVO 24X100GRS",
            "subcategory_id": 1320
        },
        {
            "code": 10515044,
            "name": "CHAMPION POUCH DOG CORDERO 24X100 G",
            "subcategory_id": 1320
        },
        {
            "code": 10515045,
            "name": "CHAMPION DOG LATA C&C 24 X 315 GR",
            "subcategory_id": 1320
        },
        {
            "code": 10515046,
            "name": "CHAMPION CAT  POUCH  POLL/PAVO 24X100",
            "subcategory_id": 1320
        },
        {
            "code": 10515047,
            "name": "CHAMPION CAT POUCH CARNE 24X100 GRS.",
            "subcategory_id": 1320
        },
        {
            "code": 10515048,
            "name": "CHAMPION CAT POUCH  ATUN/SALM. 24X100 GR",
            "subcategory_id": 1320
        },
        {
            "code": 10515050,
            "name": "CHAMPION CAT POUCH GATITOS 24X100GR",
            "subcategory_id": 1320
        },
        {
            "code": 10515055,
            "name": "CHAMPION CAT POUCH POLLO 24X100GR",
            "subcategory_id": 1320
        },
        {
            "code": 10515059,
            "name": "CHAMPION CAT POUCH SALM/SARD 24X100GR",
            "subcategory_id": 1320
        },
        {
            "code": 10515071,
            "name": "CHAMPION CAT  FILLET SALMON 24X56 GRS",
            "subcategory_id": 1320
        },
        {
            "code": 10515075,
            "name": "PLATO METALICO CHAMPION DOG",
            "subcategory_id": 1320
        },
        {
            "code": 10515080,
            "name": "CORTA VIENTOS CHC",
            "subcategory_id": 1320
        },
        {
            "code": 10515530,
            "name": "TRIPACK 3  CHARLY + 1 POUCH REGALO",
            "subcategory_id": 1320
        },
        {
            "code": 10516005,
            "name": "CANNES ADULT CAR/CER X18",
            "subcategory_id": 1321
        },
        {
            "code": 10516010,
            "name": "CANNES CACHORRO X 18 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516011,
            "name": "CANNES ADULT CAR/CER X 9KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516013,
            "name": "CANNES CACHORRO X 8 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516015,
            "name": "CANNES CACHORRO 6X3 KL",
            "subcategory_id": 1321
        },
        {
            "code": 10516020,
            "name": "DINO HUESO X25 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516025,
            "name": "CHARLY ADULTO CARNE POLLO Y CEREAL 25 KL",
            "subcategory_id": 1321
        },
        {
            "code": 10516026,
            "name": "CHARLY SABOR CARNE ASADA 25 KG (1105)",
            "subcategory_id": 1321
        },
        {
            "code": 10516100,
            "name": "FELINNES POUCH SABOR CARNE 2X12X85GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516105,
            "name": "FELINNES POUCH SABOR SALMON 2X12X85GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516110,
            "name": "FELINNES POUCH SABOR GATITO 2X12X85GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516200,
            "name": "POUCH CANNES ADULTO SABOR CARNE 24X100GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516205,
            "name": "POUCH CANNES CACHORRO SAB. CARNE24X100G",
            "subcategory_id": 1321
        },
        {
            "code": 10516210,
            "name": "POUCH CANNES ADULTO SABOR POLLO 24X100G",
            "subcategory_id": 1321
        },
        {
            "code": 10516215,
            "name": "LATA CANNES ADULTO CARNE 12X375GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516220,
            "name": "LATA CANNES ADULTO POLLO 12X375GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516225,
            "name": "LATA CANNES CACHORRO CARNE 12X375GR",
            "subcategory_id": 1321
        },
        {
            "code": 10516300,
            "name": "MINNINOS CAT X8KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516305,
            "name": "MINNINOS CAT X20KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516310,
            "name": "FELINNES  ADULTO SALMON X20 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516316,
            "name": "FELINNES MADRES ADULTO CARNE X20 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516317,
            "name": "FELINNES  ADULTO POLLO X20 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516320,
            "name": "FELINNES  GATITO SABOR POLLO 20KLS",
            "subcategory_id": 1321
        },
        {
            "code": 10516325,
            "name": "FELINNES  ADULTO SABOR SALMON 10X1 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516330,
            "name": "FELINNES  ADULTO SABOR POLLO 10X1 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516335,
            "name": "FELINNES  GATITO SABOR POLLO 10X1 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516340,
            "name": "FELINNES ADULTO SABOR POLLO 6X3 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516345,
            "name": "FELINNES ADULTO SABOR SALMON 6X3 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516350,
            "name": "FELINNES GATITO SABOR POLLO 8 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516355,
            "name": "FELINNES ADULTO SABOR POLLO 8 KG",
            "subcategory_id": 1321
        },
        {
            "code": 10516600,
            "name": "BASUREROS MASCOTAS 40 LT KENDY",
            "subcategory_id": 1321
        },
        {
            "code": 10516601,
            "name": "TAMBOR MASCOTAS 40 LT KENDY",
            "subcategory_id": 1321
        },
        {
            "code": 10516602,
            "name": "PRUEBA CAMBIADO DESDE",
            "subcategory_id": 1321
        },
        {
            "code": 10517005,
            "name": "FELINNES ADULTO SABOR SALMON X3 KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517010,
            "name": "CANNES CACHORRO X3 KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517015,
            "name": "CANNES CACHORRO X18 KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517050,
            "name": "BIOMASTER CACHORRO SABOR CARNE X3KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517060,
            "name": "BIOMASTER CACHORRO SABOR CARNE X9KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517070,
            "name": "BIOMASTER ADULTO SABOR CARNE X3KG",
            "subcategory_id": 1322
        },
        {
            "code": 10517080,
            "name": "BIOMASTERA ADULTO SABOR CARNE X15KG",
            "subcategory_id": 1322
        },
        {
            "code": 10518010,
            "name": "TRIPACK 3 DINO HUESO + 1 POUCH REGALO",
            "subcategory_id": 1323
        },
        {
            "code": 10518015,
            "name": "TRIPACK 3 CHARLY ADUL CAR POL + 1 POUCH",
            "subcategory_id": 1323
        },
        {
            "code": 10518020,
            "name": "TRIPACK 3 CHARLY CARNE ASADA + 1 POUCH R",
            "subcategory_id": 1323
        },
        {
            "code": 10518025,
            "name": "PACK 2 FELINNES ADUL SALMON + 1 POUCH RE",
            "subcategory_id": 1323
        },
        {
            "code": 10518030,
            "name": "PACK 2 FELINNES MADRE ADULT CARN + 1 POU",
            "subcategory_id": 1323
        },
        {
            "code": 10518035,
            "name": "PACK 2 FELINNES GATITO POLLO + 1 POUCH R",
            "subcategory_id": 1323
        },
        {
            "code": 10518040,
            "name": "PACK 2 FELINNES ADULTO POLLO + 1 POUCH R",
            "subcategory_id": 1323
        },
        {
            "code": 10518045,
            "name": "PACK 2 FELINNES ADUL SALMON + 1 POUCH RE",
            "subcategory_id": 1323
        },
        {
            "code": 10518050,
            "name": "PACK 2 FELINNES ADUL POLLO + 1 POUCH REG",
            "subcategory_id": 1323
        },
        {
            "code": 10518055,
            "name": "PACK 2 FELINNES GATITO POLLO + 1 POUCH R",
            "subcategory_id": 1323
        },
        {
            "code": 10518070,
            "name": "DINO HUESO X 25 KLS",
            "subcategory_id": 1323
        },
        {
            "code": 10518080,
            "name": "CANNES ADULTO X 18 KLS + 3 KL CACHORRO",
            "subcategory_id": 1323
        },
        {
            "code": 10518085,
            "name": "CANNES CACHORRO X 18 KLS + 3 KLS CACHORR",
            "subcategory_id": 1323
        },
        {
            "code": 10518100,
            "name": "BONIFICACION POUCH X 24 UDS",
            "subcategory_id": 1323
        },
        {
            "code": 10520001,
            "name": "CAN CAN CACHORRO 18 KL",
            "subcategory_id": 1324
        },
        {
            "code": 10520010,
            "name": "CAN CAN ADULTO CARNE X18 KL",
            "subcategory_id": 1324
        },
        {
            "code": 10520013,
            "name": "CAN CAN ADULTO POLLO X 18 KL",
            "subcategory_id": 1324
        },
        {
            "code": 10520030,
            "name": "CAN CAN CACHORRO LECHE LATAS 24X380",
            "subcategory_id": 1324
        },
        {
            "code": 10520033,
            "name": "CAN CAN AD. CARNE Y VEGETALE LATA 24X380",
            "subcategory_id": 1324
        },
        {
            "code": 10520036,
            "name": "CAN CAN AD.POLLO Y VEGETALES LATA 1X380",
            "subcategory_id": 1324
        },
        {
            "code": 10520041,
            "name": "PLATO PARA MASCOTA",
            "subcategory_id": 1324
        },
        {
            "code": 10525001,
            "name": "CAN  ADULTO X 18KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525003,
            "name": "CAN  ADULTO 6X3 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525004,
            "name": "CAN  ADULTO X 10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525005,
            "name": "CAN  CACHORRO X 18 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525006,
            "name": "CAN  CACHORRO 6X3 KG",
            "subcategory_id": 1325
        },
        {
            "code": 10525007,
            "name": "CAN  ADULTO RAZAS PEQUEÑAS 6X3 KG",
            "subcategory_id": 1325
        },
        {
            "code": 10525008,
            "name": "CAN  CANCHORRO X 10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525011,
            "name": "LITE BUFFET 18 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525015,
            "name": "LITE BUFFET X 10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525021,
            "name": "FULL CAT FISH X 10KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525024,
            "name": "LITE BUFFET 6X3 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525025,
            "name": "DOG BUFFET ADULTO X 25 KG",
            "subcategory_id": 1325
        },
        {
            "code": 10525026,
            "name": "LITE BUFFET CAT CAMPESTRE 6X3 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525030,
            "name": "FULL DOG HUESO X 10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525033,
            "name": "FULL DOG MIX  X 25 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525037,
            "name": "FULL DOG HUESO X 25 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525040,
            "name": "FULL DOG CROQUETA X 25 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525041,
            "name": "FULL DOG 6X2.5 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525051,
            "name": "FULL CAT FISH 25 KGRS",
            "subcategory_id": 1325
        },
        {
            "code": 10525053,
            "name": "FULL CAT 10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525080,
            "name": "CATRIX 10 X 1 KG",
            "subcategory_id": 1325
        },
        {
            "code": 10525091,
            "name": "CATRIX X10 KL",
            "subcategory_id": 1325
        },
        {
            "code": 10525101,
            "name": "CUÑETES (TAMBORES PARA ALIMENTO)",
            "subcategory_id": 1325
        },
        {
            "code": 10525106,
            "name": "PORUÑAS PARA ALIMENTOS",
            "subcategory_id": 1325
        },
        {
            "code": 10530101,
            "name": "ARENA GATO LAVANDA 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530103,
            "name": "ARENA GATO MANZANA 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530107,
            "name": "ARENA GATO ROSAS 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530110,
            "name": "ARENA GATO LIMON 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530115,
            "name": "ARENA GATO VAINILLA 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530120,
            "name": "ARENA GATO TALCO BEBE 10 X 2 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530122,
            "name": "ARENA GATO ROSAS 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530124,
            "name": "ARENA GATO VAINILLA 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530125,
            "name": "ARENA GATO BOSQUES SUREÑOS 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530127,
            "name": "ARENA GATO  LAVANDA 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530129,
            "name": "ARENA GATO CAFE MOKA 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530130,
            "name": "ARENA GATO BRISA MARINA 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530133,
            "name": "ARENA GATO LIMON 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530135,
            "name": "ARENA GATO DESIERTO FLORIDO 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530137,
            "name": "ARENA GATO TALCO BEBE 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530139,
            "name": "ARENA GATO MANZANA 10KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530140,
            "name": "ARENA GATO LAVANDA 25 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530145,
            "name": "ARENA GATO LIMON 25 KG",
            "subcategory_id": 1326
        },
        {
            "code": 10530150,
            "name": "TOALLITAS HUMEDAS TOPK9 100PACK X 20UND",
            "subcategory_id": 1326
        },
        {
            "code": 10530160,
            "name": "TOALLITAS HUMEDAS TOPK9 60 PACK X 60UND",
            "subcategory_id": 1326
        },
        {
            "code": 10530170,
            "name": "TOALLITAS HUMEDAS TOPK9 TUBO 30PAC X 60U",
            "subcategory_id": 1326
        },
        {
            "code": 10530180,
            "name": "SABANILL CARBON TOPK9 10X30UND (60X60)",
            "subcategory_id": 1326
        },
        {
            "code": 10530190,
            "name": "SABANILL CARBON TOPK9 20X10UND (60X60)",
            "subcategory_id": 1326
        },
        {
            "code": 10530195,
            "name": "ARENA TURBO CLEAN AGLU CAFE MOKA 10X2",
            "subcategory_id": 1326
        },
        {
            "code": 10530196,
            "name": "ARENA TURBO CLEAN AGLU LAVANDA 10X2",
            "subcategory_id": 1326
        },
        {
            "code": 10530197,
            "name": "ARENA TURBO CLEAN AGLU LIMON 10X2",
            "subcategory_id": 1326
        },
        {
            "code": 10530198,
            "name": "ARENA TURBO CLEAN AGLU MANZANA 10X2",
            "subcategory_id": 1326
        },
        {
            "code": 10530199,
            "name": "ARENA TURBO CLEAN AGLU TACO DE BEBE 10X2",
            "subcategory_id": 1326
        },
        {
            "code": 10600001,
            "name": "CHICLE DOS EN UNO MENTA X64",
            "subcategory_id": 1327
        },
        {
            "code": 10600003,
            "name": "CHICLE DOS EN UNO FRUTILLA X64",
            "subcategory_id": 1327
        },
        {
            "code": 10600010,
            "name": "CHICLE GROSSO TUTTIFRUTTI X100",
            "subcategory_id": 1327
        },
        {
            "code": 10600011,
            "name": "CHICLE GROSSO SPEARMINT X100",
            "subcategory_id": 1327
        },
        {
            "code": 10600013,
            "name": "CHICLE GROSSO CRUNCH TUTIFRUTI X40",
            "subcategory_id": 1327
        },
        {
            "code": 10600016,
            "name": "CHICLE GROSSO SANDIA X100",
            "subcategory_id": 1327
        },
        {
            "code": 10600018,
            "name": "CHICLE GROSSO MELON X 100 UDS",
            "subcategory_id": 1327
        },
        {
            "code": 10600020,
            "name": "CHICLE GROSSO LIMON X 100 UDS",
            "subcategory_id": 1327
        },
        {
            "code": 10600031,
            "name": "PACK GROSSO TUTIFRUTI + MENTA + BUBBLE B",
            "subcategory_id": 1327
        },
        {
            "code": 10600061,
            "name": "CHICLE GROSSO CRUNCH MENTA X40",
            "subcategory_id": 1327
        },
        {
            "code": 10600081,
            "name": "MITIMITI MANZ/MELON X60",
            "subcategory_id": 1327
        },
        {
            "code": 10600083,
            "name": "MITIMITI FRUTILLA/ CREMA X42 (18)",
            "subcategory_id": 1327
        },
        {
            "code": 10600085,
            "name": "MITIMITI FRUTILLA  X 28",
            "subcategory_id": 1327
        },
        {
            "code": 10600090,
            "name": "MITIMITI MENTA X42 (18)",
            "subcategory_id": 1327
        },
        {
            "code": 10600097,
            "name": "CHICLE LARGUILUCHO X 12 UDS",
            "subcategory_id": 1327
        },
        {
            "code": 10600098,
            "name": "CHICLE BUBBLE BOLITAS X 280 GRS",
            "subcategory_id": 1327
        },
        {
            "code": 10600099,
            "name": "CHICLE KRIPTONITA ACIDO X 60UDS",
            "subcategory_id": 1327
        },
        {
            "code": 10601001,
            "name": "BIGTIME MENTA X 20 UNI(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601003,
            "name": "BIGTIME TOUCH & GO MENTA X 20 UNI",
            "subcategory_id": 1328
        },
        {
            "code": 10601006,
            "name": "BIGTIME REFRESCANTE X 20 UNI(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601009,
            "name": "BIGTIME  FRUTILLA X 20",
            "subcategory_id": 1328
        },
        {
            "code": 10601012,
            "name": "BIGTIME TUTTIFRUTI X 20(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601015,
            "name": "BIGTIME STRONG X 20(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601018,
            "name": "BIGTIME AQUA X 20",
            "subcategory_id": 1328
        },
        {
            "code": 10601021,
            "name": "BIGTIME MANZANA VERDE X 20(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601023,
            "name": "BIGTIME SANDIA X 20(12)",
            "subcategory_id": 1328
        },
        {
            "code": 10601026,
            "name": "BIGTIME MAGNETIX NIT X20",
            "subcategory_id": 1328
        },
        {
            "code": 10601041,
            "name": "BIGTIME SPRITE X 20",
            "subcategory_id": 1328
        },
        {
            "code": 10601052,
            "name": "PACK BIGTIME X3 + ENCENDEDOR REGALO",
            "subcategory_id": 1328
        },
        {
            "code": 10601055,
            "name": "PACK BIGTIME X 2 + HVO.BANDEJA REGALO",
            "subcategory_id": 1328
        },
        {
            "code": 10602001,
            "name": "BIG TIME SEVEN MENTA X16 UNI",
            "subcategory_id": 1329
        },
        {
            "code": 10602003,
            "name": "BIG TIME SEVEN STRONG X 16 UNI",
            "subcategory_id": 1329
        },
        {
            "code": 10602006,
            "name": "BIG TIME SEVEN FRUTAL X 16 UNI",
            "subcategory_id": 1329
        },
        {
            "code": 10603001,
            "name": "CARAMELO ALKA X100 UNI BOLSA",
            "subcategory_id": 1330
        },
        {
            "code": 10603003,
            "name": "ALKA ICE X 100 UNI BOLSA",
            "subcategory_id": 1330
        },
        {
            "code": 10603006,
            "name": "CARAMELO ALKA FRUT X100 UNI",
            "subcategory_id": 1330
        },
        {
            "code": 10603009,
            "name": "CARAMELO ALKA STRONG BOLSA X450 GR",
            "subcategory_id": 1330
        },
        {
            "code": 10603010,
            "name": "PACK ALKA+ ALKA ICE+ALKA STRONG + VASO",
            "subcategory_id": 1330
        },
        {
            "code": 10603011,
            "name": "ALKA DISPLEY MENTOL  X 12 UNI",
            "subcategory_id": 1330
        },
        {
            "code": 10603013,
            "name": "ALKA DISPLEY STRONG  X 12 UNI",
            "subcategory_id": 1330
        },
        {
            "code": 10603015,
            "name": "PACK 2ALKA MENTHOL+2ALKA STRONG+1VITAFRE",
            "subcategory_id": 1330
        },
        {
            "code": 10603021,
            "name": "BUTTER AND CREAM X 935 GRS 180 UN",
            "subcategory_id": 1330
        },
        {
            "code": 10603023,
            "name": "VITAFRESH MENTA/FRIA",
            "subcategory_id": 1330
        },
        {
            "code": 10603025,
            "name": "VITAFRESH MENTA/MENTHOL",
            "subcategory_id": 1330
        },
        {
            "code": 10603027,
            "name": "VITAFRESH SPEARMINT",
            "subcategory_id": 1330
        },
        {
            "code": 10605001,
            "name": "TURRON DE MANI X 28 UN",
            "subcategory_id": 1331
        },
        {
            "code": 10605006,
            "name": "TURRON GALLETA X 50 UD",
            "subcategory_id": 1331
        },
        {
            "code": 10605021,
            "name": "MASTICABLE FRUTA ARCOR 1X800GR (242 UNI)",
            "subcategory_id": 1331
        },
        {
            "code": 10605025,
            "name": "CARAMELO RELLENO FRUTALES  500 GRS",
            "subcategory_id": 1331
        },
        {
            "code": 10607001,
            "name": "CHUBI CARAMELO 24X26GRAMO(12)",
            "subcategory_id": 1332
        },
        {
            "code": 10607003,
            "name": "TIFANYS MANI 12X20X22 GRAM.",
            "subcategory_id": 1332
        },
        {
            "code": 10607021,
            "name": "ROCKLETS MANI X 18 UNI AMARILLO",
            "subcategory_id": 1332
        },
        {
            "code": 10607023,
            "name": "ROCKLETS CONFITADO X18 UNI NEGRO",
            "subcategory_id": 1332
        },
        {
            "code": 10607026,
            "name": "ROCKLETS ALMENDRA  X18 UNI",
            "subcategory_id": 1332
        },
        {
            "code": 10607030,
            "name": "PACK ROCLET MANI + GLAM + VASO",
            "subcategory_id": 1332
        },
        {
            "code": 10609001,
            "name": "CHOCOLATE NICOLO COUCHE 20X32 GR",
            "subcategory_id": 1333
        },
        {
            "code": 10609009,
            "name": "CHOCOLATE PRIVILEGIO ALMENDRA X 24",
            "subcategory_id": 1333
        },
        {
            "code": 10609010,
            "name": "BON O BON LECHE  X 30 UNID.",
            "subcategory_id": 1333
        },
        {
            "code": 10609011,
            "name": "BON O BON CHOCOLATE X 30 UNID",
            "subcategory_id": 1333
        },
        {
            "code": 10609012,
            "name": "BON O BON BLANCO X 30 UNID.",
            "subcategory_id": 1333
        },
        {
            "code": 10609015,
            "name": "BON O BON AVELLANA X 30 UNI",
            "subcategory_id": 1333
        },
        {
            "code": 10609021,
            "name": "BOMBOM PRIVILEGIO BOL MIX 1X356GR 48 UNI",
            "subcategory_id": 1333
        },
        {
            "code": 10609050,
            "name": "HOBBY 22X 40 GR",
            "subcategory_id": 1333
        },
        {
            "code": 10611001,
            "name": "MARSHMALLOW BAÑADO 1X660 GR",
            "subcategory_id": 1334
        },
        {
            "code": 10611003,
            "name": "MORF BAÑADO X30 UNI",
            "subcategory_id": 1334
        },
        {
            "code": 10611011,
            "name": "GOLPE X 30 UNI",
            "subcategory_id": 1334
        },
        {
            "code": 10611021,
            "name": "TROPICAL COCO CAJA X 1470 GR",
            "subcategory_id": 1334
        },
        {
            "code": 10612001,
            "name": "HVO BANDEJA MACIZO X22 UN 112 GRS",
            "subcategory_id": 1335
        },
        {
            "code": 10612002,
            "name": "HVO  BANDEJA MACIZO X45 UN 229 GR",
            "subcategory_id": 1335
        },
        {
            "code": 10612010,
            "name": "HVO  CARITAS X22 UD MACIZOS X 112 GRS",
            "subcategory_id": 1335
        },
        {
            "code": 10613001,
            "name": "MASTICABLE PINTA LENGUA X 330 GRS 100 UN",
            "subcategory_id": 1336
        },
        {
            "code": 10613003,
            "name": "CARAMELOS CALABAZA X400 GRS 100 UNI",
            "subcategory_id": 1336
        },
        {
            "code": 10613006,
            "name": "CARAMELO CICLOPE X400 GRS 100 UNI",
            "subcategory_id": 1336
        },
        {
            "code": 10613009,
            "name": "GOMITAS MOGUL HORROR X 150 GRS",
            "subcategory_id": 1336
        },
        {
            "code": 10615001,
            "name": "GALLETAS MINI SELZ X40 UNI",
            "subcategory_id": 1337
        },
        {
            "code": 10615003,
            "name": "GALLETAS SELZ JAMON X40 UNI",
            "subcategory_id": 1337
        },
        {
            "code": 10615006,
            "name": "GALLETAS MINI SELZ QUESO X40 UNI",
            "subcategory_id": 1337
        },
        {
            "code": 10615007,
            "name": "GALL. MINI DOS EN UNO CHOCOKISS 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615010,
            "name": "GALL. MINI DOS EN UNO CONQUISTA 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615013,
            "name": "GALL. MINI DOS EN UNO FESTIDULCE 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615016,
            "name": "GALL. MINI DOS EN UNO DINOSAURIO 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615019,
            "name": "GALL. MINI DOS EN UNO LIMON 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615022,
            "name": "GALL. MINI DOS EN UNO COCO 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615025,
            "name": "GALL. MINI DOS EN UNO CHOCOLATE 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615029,
            "name": "GALL. MINI DOS EN UNO SURTIDOS 40X40",
            "subcategory_id": 1337
        },
        {
            "code": 10615031,
            "name": "GALL RELL CARTOON VAINILLA 52X80 GRS",
            "subcategory_id": 1337
        },
        {
            "code": 10615033,
            "name": "GALL CARTOON CHOCOLATE VAINILLA 52 X80G",
            "subcategory_id": 1337
        },
        {
            "code": 10615036,
            "name": "GALLETA RELL CARTOON SURTIDA 52X80 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10615050,
            "name": "CEREAL MILK CHOCOLATE PRINCESAS X16 UND",
            "subcategory_id": 1337
        },
        {
            "code": 10615051,
            "name": "CEREAL MILK LECHE CARS X16 UND",
            "subcategory_id": 1337
        },
        {
            "code": 10615053,
            "name": "GALLETA SELZ SODA CUBO 32X50 GRS",
            "subcategory_id": 1337
        },
        {
            "code": 10615055,
            "name": "GALLETA SELZ SODA CUBO LIGHT 32X50 GRS",
            "subcategory_id": 1337
        },
        {
            "code": 10617001,
            "name": "GALLETA DULCE CHOCOLATE 24X135 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617003,
            "name": "GALLETA DULCE MANTEQUILLA 24X135 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617006,
            "name": "GALLETA DULCE COCO 24X135 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617009,
            "name": "GALLETA DULCE LIMON 24X135GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617012,
            "name": "GALLETA DULCE CHOCOLATE 24X140 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617015,
            "name": "GALLETA DULCE CHOCKISS 24X135 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617018,
            "name": "GALLETA DULCE VINO 24X160 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10617021,
            "name": "GALLETA DULCE SURTIDA 24X140 GR",
            "subcategory_id": 1337
        },
        {
            "code": 10618001,
            "name": "COCTEL DE FRUTA  ARCOR  X3 KILO",
            "subcategory_id": 1338
        },
        {
            "code": 10618002,
            "name": "DURAZNO EN MITAD  ARCOR 6X3 KILO",
            "subcategory_id": 1338
        },
        {
            "code": 10619001,
            "name": "GALLETA RELL. CHOCO/VAINILLA 28X150GR",
            "subcategory_id": 1339
        },
        {
            "code": 10619003,
            "name": "GALLETA RELL. VAINILLA/VAINILLA 28X150GR",
            "subcategory_id": 1339
        },
        {
            "code": 10619005,
            "name": "GALLETA RELL. VAINILLA/FRUTILLA 28X150GR",
            "subcategory_id": 1339
        },
        {
            "code": 10619006,
            "name": "GALLETA RELLENA SURTIDAS 28X150 GRS",
            "subcategory_id": 1339
        },
        {
            "code": 10620002,
            "name": "GALLETA TRITON VAINILLA X30 UNIDS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620004,
            "name": "GALLETA TRITON NARANJA X 30 UNIDS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620006,
            "name": "GALLETA TRITON CHOCOLATE 30X126 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620008,
            "name": "GALLETA MOROCHA MINI 24X50 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620010,
            "name": "GALLETA CRIOLLITA MC KAY 24X100 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620015,
            "name": "GALLETA TRITON VAINILLA PACK 3X126GR.(10",
            "subcategory_id": 1340
        },
        {
            "code": 10620016,
            "name": "GALLETA TRITON CHOC. PACK 3X126GRS.(10)",
            "subcategory_id": 1340
        },
        {
            "code": 10620021,
            "name": "SUPER 8 OBLEA BAÑADA 24X29 GR",
            "subcategory_id": 1340
        },
        {
            "code": 10620024,
            "name": "GALLETA CHOKITA BAÑADA BARRA 20X30GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620025,
            "name": "OBLEA ALTEZA BOCADO 24X140 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620026,
            "name": "GALLETA ALTEZA CHIRIMOYA 24X140 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620028,
            "name": "GALLETA ALTEZA FRUTILLA 24X140 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620029,
            "name": "GALLETA ALTEZA HELADO 24X140 GRS",
            "subcategory_id": 1340
        },
        {
            "code": 10620038,
            "name": "GALL. AGUA FAMILIAR MACKAY 20X180 GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10620039,
            "name": "GALL. SODA  FAMILIAR MACKAY 20X180 GRS",
            "subcategory_id": 1340
        },
        {
            "code": 10620050,
            "name": "GALLETA OBLEA ALTEZA SURTIDA 24X140GRS.",
            "subcategory_id": 1340
        },
        {
            "code": 10621001,
            "name": "CHOC. SANNE NUSS IMPULSIVO 20X14 GRS",
            "subcategory_id": 1341
        },
        {
            "code": 10621005,
            "name": "CHOC. SANNE NUSS BARRA 16X90 GRS.",
            "subcategory_id": 1341
        },
        {
            "code": 10621006,
            "name": "CHOC. SANNE NUSS BARRA 3X160 GRS.(7)",
            "subcategory_id": 1341
        },
        {
            "code": 10621013,
            "name": "CHOC. TRENCITO IMPULSIVO 20X14 GRS.",
            "subcategory_id": 1341
        },
        {
            "code": 10621014,
            "name": "CHOC. TRENCITO BARRA 3X80 GRS. (7)",
            "subcategory_id": 1341
        },
        {
            "code": 10621015,
            "name": "CHOC. TRENCITO BARRA 14X150 GRS.",
            "subcategory_id": 1341
        },
        {
            "code": 10621025,
            "name": "CHOC. CAPRI  ALMENDRA 24X30 GRS.",
            "subcategory_id": 1341
        },
        {
            "code": 10621027,
            "name": "CHOC. CAPRI FRUTILLA 24X30 GRS",
            "subcategory_id": 1341
        },
        {
            "code": 10621029,
            "name": "CHOC. CAPRI MENTA 24X30 GRS.",
            "subcategory_id": 1341
        },
        {
            "code": 10621030,
            "name": "CHOC. CAPRI GUINDA 24X30 GRS",
            "subcategory_id": 1341
        },
        {
            "code": 10622005,
            "name": "GALLETA CHOCOLATE MC 15X500 GR",
            "subcategory_id": 1342
        },
        {
            "code": 10622010,
            "name": "GALLETA VAINILLA MC 15X500 GR",
            "subcategory_id": 1342
        },
        {
            "code": 10622015,
            "name": "GALLETA FRUTILLA MC 15X500 GR",
            "subcategory_id": 1342
        },
        {
            "code": 10625001,
            "name": "CARAMELO ARBOLITO X 200 UNID.",
            "subcategory_id": 1343
        },
        {
            "code": 10625003,
            "name": "CARAMELO ARBOLITO SURTIDO X 100UND",
            "subcategory_id": 1343
        },
        {
            "code": 10625041,
            "name": "MENTITAS DISPLEY X24(6)",
            "subcategory_id": 1343
        },
        {
            "code": 10625042,
            "name": "MENTITAS ICE DISPLEY X24(6)",
            "subcategory_id": 1343
        },
        {
            "code": 10625043,
            "name": "MENTITA MASTICABLE X20",
            "subcategory_id": 1343
        },
        {
            "code": 10625046,
            "name": "MENTITAS FLORET X 60",
            "subcategory_id": 1343
        },
        {
            "code": 10625054,
            "name": "FULL LIMON FORETE X 60",
            "subcategory_id": 1343
        },
        {
            "code": 10625055,
            "name": "FULL LIMON DISPLAY X 24",
            "subcategory_id": 1343
        },
        {
            "code": 10625059,
            "name": "FULL MASTICABLE X20",
            "subcategory_id": 1343
        },
        {
            "code": 10625073,
            "name": "CHUPETE PIN POP SURTIDO  X24 UNI",
            "subcategory_id": 1343
        },
        {
            "code": 10625081,
            "name": "YOGUETA SURTIDA X 20 UNI",
            "subcategory_id": 1343
        },
        {
            "code": 10627001,
            "name": "GOMITAS FRUYELE X 200 UNIDS.",
            "subcategory_id": 1344
        },
        {
            "code": 10627002,
            "name": "GOMITAS FRUGELE X 100 UNID. (12)",
            "subcategory_id": 1344
        },
        {
            "code": 10627003,
            "name": "MASTICABLES XL 40 UNIDADES 400 GRS.",
            "subcategory_id": 1344
        },
        {
            "code": 10627006,
            "name": "MASTICABLES TUBITOS X 50 UNIDADES",
            "subcategory_id": 1344
        },
        {
            "code": 10627021,
            "name": "GOMITAS CALIPTUS X20",
            "subcategory_id": 1344
        },
        {
            "code": 10627023,
            "name": "GOMITAS AMBROSITO X20",
            "subcategory_id": 1344
        },
        {
            "code": 10627026,
            "name": "GOMITAS FLIPY X 20",
            "subcategory_id": 1344
        },
        {
            "code": 10627029,
            "name": "GOMITAS AMBERRIES X20",
            "subcategory_id": 1344
        },
        {
            "code": 10627040,
            "name": "CALUGA SUNNY TOLVA X 130 UNIDADES",
            "subcategory_id": 1344
        },
        {
            "code": 10627045,
            "name": "MALVA DE CHOCOLATE TOLVA X 120 UNIDADES",
            "subcategory_id": 1344
        },
        {
            "code": 10627050,
            "name": "CHOCOLATE INKAT 24X28 GRS.",
            "subcategory_id": 1344
        },
        {
            "code": 10629001,
            "name": "LOLY CHOC X24",
            "subcategory_id": 1345
        },
        {
            "code": 10629010,
            "name": "CHOCMAN X 32 UNIDADES",
            "subcategory_id": 1345
        },
        {
            "code": 10629012,
            "name": "OBLEAS TUYO X30",
            "subcategory_id": 1345
        },
        {
            "code": 10629016,
            "name": "LEBLON X 60",
            "subcategory_id": 1345
        },
        {
            "code": 10629019,
            "name": "DOBLON X 30",
            "subcategory_id": 1345
        },
        {
            "code": 10629023,
            "name": "TRES NEGRITOS X 24 UNID",
            "subcategory_id": 1345
        },
        {
            "code": 10629031,
            "name": "GOLAZO X24",
            "subcategory_id": 1345
        },
        {
            "code": 10631001,
            "name": "CONGO LECHE X100",
            "subcategory_id": 1346
        },
        {
            "code": 10631003,
            "name": "CONGO BLANCO X100",
            "subcategory_id": 1346
        },
        {
            "code": 10631008,
            "name": "CHOCOLATE GOLDEN PEANUT  15X120 GRS.",
            "subcategory_id": 1346
        },
        {
            "code": 10631010,
            "name": "CHOCOLATE DE LECHE GOLDEN MILK 15X120GR",
            "subcategory_id": 1346
        },
        {
            "code": 10631012,
            "name": "COSTA MILK CON TROZOS DE FRAC 18 X 120 G",
            "subcategory_id": 1346
        },
        {
            "code": 10631013,
            "name": "CHOCOLATE CAREZZA X24",
            "subcategory_id": 1346
        },
        {
            "code": 10631016,
            "name": "CHOCOLATE CAREZZA 14X190 GR",
            "subcategory_id": 1346
        },
        {
            "code": 10631018,
            "name": "CAREZZA BONBONES  DISPLAY X 45 UNI",
            "subcategory_id": 1346
        },
        {
            "code": 10631021,
            "name": "VIZZIO 1 X 90 GR",
            "subcategory_id": 1346
        },
        {
            "code": 10631023,
            "name": "VIZZIO DISPLAY X45",
            "subcategory_id": 1346
        },
        {
            "code": 10631025,
            "name": "VIZZIO 32 X 134 GRS",
            "subcategory_id": 1346
        },
        {
            "code": 10631036,
            "name": "CEREZAS AL COÑAG X24 UNI",
            "subcategory_id": 1346
        },
        {
            "code": 10631038,
            "name": "CEREZAS AL COGNAC GRANEL X 2 KILOS",
            "subcategory_id": 1346
        },
        {
            "code": 10631041,
            "name": "COSTA RAMA X80 GR",
            "subcategory_id": 1346
        },
        {
            "code": 10631071,
            "name": "MECANO ALMENDRA X20",
            "subcategory_id": 1346
        },
        {
            "code": 10631073,
            "name": "MECANO FRUTILLA X20",
            "subcategory_id": 1346
        },
        {
            "code": 10633001,
            "name": "CHOCOCEREAL 20X20",
            "subcategory_id": 1347
        },
        {
            "code": 10633003,
            "name": "CEREAL BAR CHIPS 20X20",
            "subcategory_id": 1347
        },
        {
            "code": 10633006,
            "name": "CEREAL BAR ROJO 20X20",
            "subcategory_id": 1347
        },
        {
            "code": 10633011,
            "name": "BAND. HUEVO SAFARI 25X4.6GRS (26)",
            "subcategory_id": 1347
        },
        {
            "code": 10633051,
            "name": "HUEVOS COSTA BOLSA 100X5 GRS.",
            "subcategory_id": 1347
        },
        {
            "code": 10633053,
            "name": "HUEVO COSTA PICNIC BANDEJA 22X5 GRS (14)",
            "subcategory_id": 1347
        },
        {
            "code": 10637033,
            "name": "COSTA CHOCOLATE 24X140 GR",
            "subcategory_id": 1348
        },
        {
            "code": 10637069,
            "name": "GALLETA NIK BOCADO 36X71 GR",
            "subcategory_id": 1348
        },
        {
            "code": 10637081,
            "name": "GALLETA SODA CUBO X27",
            "subcategory_id": 1348
        },
        {
            "code": 10637086,
            "name": "GALLETA SODA 24X180 GR",
            "subcategory_id": 1348
        },
        {
            "code": 10637115,
            "name": "COSTA OBSESION  TRAD. 24X85",
            "subcategory_id": 1348
        },
        {
            "code": 10637117,
            "name": "GALLETA GRETTEL CHOC. BCO 24X85 GRS.",
            "subcategory_id": 1348
        },
        {
            "code": 10637119,
            "name": "GALLETA GRETTEL LECHE 24X85 GRS.",
            "subcategory_id": 1348
        },
        {
            "code": 10637121,
            "name": "GALLETA DONUTS CHOCOLATE 24X100",
            "subcategory_id": 1348
        },
        {
            "code": 10637122,
            "name": "GALLETA DONUTS CHOC. BLCO. 24X120  GRS",
            "subcategory_id": 1348
        },
        {
            "code": 10637124,
            "name": "GALLETA DONUTS COCO 24 X 100 GRS",
            "subcategory_id": 1348
        },
        {
            "code": 10637130,
            "name": "GALLETA DONUTS NARANJA 24X100  GRS.",
            "subcategory_id": 1348
        },
        {
            "code": 10638001,
            "name": "COBERTURA PASTRY CHOC.10X1 KILO",
            "subcategory_id": 1349
        },
        {
            "code": 10638005,
            "name": "COBERTURA MOLDER CHOC.10X1KILO",
            "subcategory_id": 1349
        },
        {
            "code": 10638010,
            "name": "COBERTURA BLANCA CHOC 10X 1 KILO",
            "subcategory_id": 1349
        },
        {
            "code": 10648001,
            "name": "GELATINA ROYAL CEREZA 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648003,
            "name": "GELATINA ROYAL  FRUTILLA 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648006,
            "name": "GELATINA ROYAL  FRAMBUEZA 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648009,
            "name": "GELATINA ROYAL PIÑA 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648011,
            "name": "GELATINA ROYAL LIMON VERDE 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648013,
            "name": "GELATINA ROYAL NARANJA 12X110 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648016,
            "name": "GELATINA LIGTH ROYAL FRAMBUESA 40X20 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648019,
            "name": "GELATINA LIGTH ROYAL NARANJA 40X20 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648021,
            "name": "GELATINA ROYAL SIN SABOR 48X30 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648023,
            "name": "FLAN ROYAL VAINILLA 36X180 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648026,
            "name": "FLAN ROYAL CHOCOLATE 36X180 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648029,
            "name": "BUDIN ROYAL CHOCOLATE 20X184 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648031,
            "name": "BUDIN ROYAL VAINILLA 20X170 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648033,
            "name": "MOUSSE ROYAL CHOCOLATE 20X70 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648036,
            "name": "FLAN ROYAL MANJAR 36X180 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648039,
            "name": "FLAN ROYAL FRUTILLA 36X180 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648041,
            "name": "BUDIN ROYAL CARAMELO 20X170 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648043,
            "name": "MOUSE ROYAL FRUTILLA 20X65 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648046,
            "name": "MOUSE ROYAL VAINILLA 20X65 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648049,
            "name": "MAYO POTE LIMON 12X887(210)",
            "subcategory_id": 1350
        },
        {
            "code": 10648051,
            "name": "MAYO MINI SQUEEZE 350",
            "subcategory_id": 1350
        },
        {
            "code": 10648053,
            "name": "MAYO SQUEEZE  LIGTH 8X650ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648056,
            "name": "MAYO SQUEEZE  LIGTH 12X650",
            "subcategory_id": 1350
        },
        {
            "code": 10648059,
            "name": "MAYO OLIVA SQUEEZE  12X650",
            "subcategory_id": 1350
        },
        {
            "code": 10648061,
            "name": "MAYONEZA FRASCO 12X443 ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648063,
            "name": "MAYONEZA FRASCO LIGTH 12X443 ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648066,
            "name": "MAYO FRASCO FAT FREE 12X443 ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648069,
            "name": "MAYONESA POTE 12X887 ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648071,
            "name": "MAYONESA POTE LIGTH 12X887 ML",
            "subcategory_id": 1350
        },
        {
            "code": 10648073,
            "name": "DAIRY MILK LECHE 16X120 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648076,
            "name": "DAIRY MILK WHOLE NUT 13X120",
            "subcategory_id": 1350
        },
        {
            "code": 10648079,
            "name": "SAIRY MILK CARAMEL 13 X120 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648081,
            "name": "DAIRY MILK LECHE 14X200 GR",
            "subcategory_id": 1350
        },
        {
            "code": 10648083,
            "name": "DAIRY MILK WHOLE NUT 11X200",
            "subcategory_id": 1350
        },
        {
            "code": 10648086,
            "name": "DAIRY MILK CARAMELO 14X200",
            "subcategory_id": 1350
        },
        {
            "code": 10649001,
            "name": "GALLETA CLUB SOCIAL INTEGRAL 9X26 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649003,
            "name": "GALLETA CLUB SOCIAL QUESO 9X26 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649006,
            "name": "CEREALITA SALVADO 16X3X196 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649009,
            "name": "CEREALITAS TOSTADAS ARROZ 24X160 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649011,
            "name": "OREO SIX PACK 28X36 GR X 6 UNID C/U",
            "subcategory_id": 1351
        },
        {
            "code": 10649013,
            "name": "OREO DOUBLE STUF 12X435 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649016,
            "name": "OREO REDUCED FAT 12X405 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649019,
            "name": "OREO FUDGE CREMES 12X320 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649021,
            "name": "MINT OREO FUDGE CREM 12X320 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649023,
            "name": "OREO TRIPACK 378 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649026,
            "name": "OREO DORADA 30 X 126 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649029,
            "name": "OREO FRUTOS ROJOS 30X126 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649031,
            "name": "OREO WHITE FUDGE 48X131 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649033,
            "name": "OREO DARK FUDGE 48X131 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649036,
            "name": "OREO BIRTHDAY CAKE 12X432 GRS",
            "subcategory_id": 1351
        },
        {
            "code": 10649039,
            "name": "CHIPS AHOY REGULAR X3 10X342G",
            "subcategory_id": 1351
        },
        {
            "code": 10649041,
            "name": "CHIPS AHOY  12X170G",
            "subcategory_id": 1351
        },
        {
            "code": 10649043,
            "name": "CHIPS AHOY CHEWY 12X145 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649046,
            "name": "CHIPS AHOY ORIGINAL 12X368 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649049,
            "name": "CHIPS REDUCED FAT 12X368 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649051,
            "name": "CHIPS REDUCED WHITE CHUNKY 12X133 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649053,
            "name": "CHIPS REDUCED CHUNKY 12X333 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649056,
            "name": "CHIPS AHOY  60X57GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649059,
            "name": "MINI CHIP AHOY 48X50 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649061,
            "name": "CUA CUA 6DX30X18GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649063,
            "name": "CHOC MINI CUA CUA 48X42 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649066,
            "name": "ALF. TERRABUSI 16X6X50",
            "subcategory_id": 1351
        },
        {
            "code": 10649069,
            "name": "ALFAJOR MILKA MOUSSE 24X6X42",
            "subcategory_id": 1351
        },
        {
            "code": 10649071,
            "name": "MILKA MAZAPAN 20X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649073,
            "name": "MILKA OREO 20X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649076,
            "name": "MILKA WHOLE NUT 16X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649079,
            "name": "MILKA YOGURT FRUT 20X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649081,
            "name": "MILKA ALPINE 12X300",
            "subcategory_id": 1351
        },
        {
            "code": 10649083,
            "name": "MILKA ALPINE 12X300",
            "subcategory_id": 1351
        },
        {
            "code": 10649086,
            "name": "MILKA CHOCO SWING 12X300",
            "subcategory_id": 1351
        },
        {
            "code": 10649089,
            "name": "MILKA TRIOLADE 12X300",
            "subcategory_id": 1351
        },
        {
            "code": 10649091,
            "name": "MILKA WHOLE NUTS 12X300",
            "subcategory_id": 1351
        },
        {
            "code": 10649093,
            "name": "MILKA LUFLEE WHITE 10X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649096,
            "name": "MILKA LUFLEE MILK 10X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649101,
            "name": "CHOC. MILKA CARAMELO 21X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649103,
            "name": "CHOCHOCOLATE MILKA CARAMELO 21X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649106,
            "name": "CHOC. MILKA EXTRACACAO 21X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649109,
            "name": "CHOC. MILKA ALPINE 22X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649201,
            "name": "CHOC. MILKA DAIM 22X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649203,
            "name": "CHOC. MILKA CHOC. CREAM 20X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649206,
            "name": "CHOCOLATE MILKA BLANCO 20X100 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649209,
            "name": "MILKA CHOCO & RISE 10 X 200 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649301,
            "name": "MILKA CHOCO POPCORN 10 X 200 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649303,
            "name": "MILKA LUFLEE CARAMENL 10X250",
            "subcategory_id": 1351
        },
        {
            "code": 10649306,
            "name": "TOBLER. LECHE 20X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649309,
            "name": "TOBLE BLANCO 20X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649401,
            "name": "TOBLE DARK 20X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649403,
            "name": "TOBLE F&N 20X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649406,
            "name": "TOBLE CRUNCHY ALMONDS 20X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649409,
            "name": "TOBLER LECHE 10X200",
            "subcategory_id": 1351
        },
        {
            "code": 10649501,
            "name": "TOBLER CRUNCHY AÑMOND 10X400 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649503,
            "name": "TOBLER DARK 10X400 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649506,
            "name": "TOBLER WHITE 10X400 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649509,
            "name": "TOBLER M. LECHE 20X200 GR",
            "subcategory_id": 1351
        },
        {
            "code": 10649601,
            "name": "TOBLER M. DIS 108X12.5",
            "subcategory_id": 1351
        },
        {
            "code": 10649603,
            "name": "TAB. TOBLERONE LECHE 20X50",
            "subcategory_id": 1351
        },
        {
            "code": 10649606,
            "name": "R.B.P. POUCH B 120X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649609,
            "name": "R.B.P. POUCH B 240X20",
            "subcategory_id": 1351
        },
        {
            "code": 10649701,
            "name": "R.B.P. FIBERCAN 72X100",
            "subcategory_id": 1351
        },
        {
            "code": 10649703,
            "name": "R.B.P. FIBERCAN 48X250",
            "subcategory_id": 1351
        },
        {
            "code": 10650001,
            "name": "DENTYNE MX FRUTILLA 18X8.5GR(30)",
            "subcategory_id": 1352
        },
        {
            "code": 10650003,
            "name": "DENTYNE MX MENTA VERDE 18X10.5GR(30)",
            "subcategory_id": 1352
        },
        {
            "code": 10650009,
            "name": "DENTYNE MX MENTA  18X8.5 GR(30)",
            "subcategory_id": 1352
        },
        {
            "code": 10650011,
            "name": "DENTYNE MX MENTA FUERTE X 18UNI(30)",
            "subcategory_id": 1352
        },
        {
            "code": 10650021,
            "name": "DENTYNE UNLIMITED NON STOP MINT 12X27 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650023,
            "name": "DENTYNE UNLIMITED NIGHT MINT 12X26.6 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650041,
            "name": "DENTYNE ICE AZUL 9X216 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650043,
            "name": "DENTYNE ICE NEGRO 9X216 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650046,
            "name": "DENTYNE ICE VERDE 9X216 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650047,
            "name": "EXHIBIDOR  3 DISPL",
            "subcategory_id": 1352
        },
        {
            "code": 10650048,
            "name": "EXHIBIDOR 4 DISPL",
            "subcategory_id": 1352
        },
        {
            "code": 10650050,
            "name": "DENTYNE LLEVE 5 PAGUE 4",
            "subcategory_id": 1352
        },
        {
            "code": 10650150,
            "name": "LLEVE 3 Y PAGUE 2 PV X18",
            "subcategory_id": 1352
        },
        {
            "code": 10650155,
            "name": "PACK 4 DENTYNE + HALLS CHERRY REGALO",
            "subcategory_id": 1352
        },
        {
            "code": 10650160,
            "name": "TRID VP MENTA 12D X 12UN X 30.6 GRS",
            "subcategory_id": 1352
        },
        {
            "code": 10650162,
            "name": "TRID VP FRESHERBAL 12D X 12UN X 30.6 GRS",
            "subcategory_id": 1352
        },
        {
            "code": 10650164,
            "name": "TRID VP SANDIA  12D X 12UN X 30.6 GRS",
            "subcategory_id": 1352
        },
        {
            "code": 10650169,
            "name": "TRID UNLIMITED ROJO 12D X 12U 25.03 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650170,
            "name": "TRID UNLIMITED AZUL 12D X 12U 25.03 GR",
            "subcategory_id": 1352
        },
        {
            "code": 10650171,
            "name": "TRID UNLIMITED VERDE 12D X 12U",
            "subcategory_id": 1352
        },
        {
            "code": 10650172,
            "name": "TRID FRUTILLA  21UN X 9.6 GRS (32)",
            "subcategory_id": 1352
        },
        {
            "code": 10650174,
            "name": "TRID SANDIA  21UN X 9.6 GRS (32)",
            "subcategory_id": 1352
        },
        {
            "code": 10650190,
            "name": "PACK 3 DENTYNE ICE X 9 + ENCEND DE REGAL",
            "subcategory_id": 1352
        },
        {
            "code": 10650195,
            "name": "PACK 3 TRIDENT VP X 12 + ENC DE REGALO",
            "subcategory_id": 1352
        },
        {
            "code": 10651001,
            "name": "CHOC. CADBURY DAIRY MILK 16 X 120GR",
            "subcategory_id": 1353
        },
        {
            "code": 10651003,
            "name": "CHOC. CADBURY DAIRY WHOLE NUT 13X120GR",
            "subcategory_id": 1353
        },
        {
            "code": 10651005,
            "name": "CHOC. CADBURY DAIRY CARAMEL 13X120GR",
            "subcategory_id": 1353
        },
        {
            "code": 10652001,
            "name": "HALLS YERBABUENA STICK 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652003,
            "name": "HALLS MENTHOL 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652006,
            "name": "HALLS EXTRA STRONG 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652009,
            "name": "HALLS HONEY LEMON 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652011,
            "name": "HALL TUBO MORA AZUL 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652013,
            "name": "HALL CHERRY 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652016,
            "name": "HALL COLORS 16X25,2GR(48)",
            "subcategory_id": 1354
        },
        {
            "code": 10652019,
            "name": "HALL TUBO CREAMY NARANJA 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652021,
            "name": "HALL TUBO CREAMY FRESA 12X28.8 GR(30)",
            "subcategory_id": 1354
        },
        {
            "code": 10652023,
            "name": "HALLS TROPICAL AIR 12X 28.8 GR",
            "subcategory_id": 1354
        },
        {
            "code": 10652025,
            "name": "HALL LLEVE 5 PAGUE 4",
            "subcategory_id": 1354
        },
        {
            "code": 10652030,
            "name": "PACK 3 DENTYNE + 3 HALLS+ EXHIBIDOR",
            "subcategory_id": 1354
        },
        {
            "code": 10652035,
            "name": "PACK  5 HALLS + DENTYNE M.F REGALO",
            "subcategory_id": 1354
        },
        {
            "code": 10652050,
            "name": "HALLS MINI CEREZA 18 X 15 GRS (8)",
            "subcategory_id": 1354
        },
        {
            "code": 10652052,
            "name": "HALLS MINI STRONG 18 X 15 GRS (8)",
            "subcategory_id": 1354
        },
        {
            "code": 10652054,
            "name": "HALLS MINI MENTHO 18 X 15 GRS (8)",
            "subcategory_id": 1354
        },
        {
            "code": 10654001,
            "name": "FRESHEN UP MENTA 12X26 GR",
            "subcategory_id": 1355
        },
        {
            "code": 10654003,
            "name": "FRESHEN UP FRUTAS 12X26 GR",
            "subcategory_id": 1355
        },
        {
            "code": 10654006,
            "name": "FRESHEN UP MENTA VERDE 12X26 GR",
            "subcategory_id": 1355
        },
        {
            "code": 10655001,
            "name": "EXHIBIDOR MILKA",
            "subcategory_id": 1356
        },
        {
            "code": 10655003,
            "name": "EXHIBIDOR DENTYNE - HALLS AMARILLO (X8",
            "subcategory_id": 1356
        },
        {
            "code": 10655005,
            "name": "EXHIBIDOR RUEDA (100.000)",
            "subcategory_id": 1356
        },
        {
            "code": 10655007,
            "name": "EXHIBIDOR DENTYNE (X8)",
            "subcategory_id": 1356
        },
        {
            "code": 10655009,
            "name": "EXHIBIDOR DENTYNE - HALLS (X6)",
            "subcategory_id": 1356
        },
        {
            "code": 10655011,
            "name": "EXHIBIDOR DAIRY MILK (X1)",
            "subcategory_id": 1356
        },
        {
            "code": 10655013,
            "name": "EXHIBIDOR CHIPS AHOY (GRANDE) (X5)",
            "subcategory_id": 1356
        },
        {
            "code": 10655015,
            "name": "EXHIBIDOR CHIPS AHOY (CHICO)(X1)",
            "subcategory_id": 1356
        },
        {
            "code": 10655017,
            "name": "EXHIBIDOR CHICLERA",
            "subcategory_id": 1356
        },
        {
            "code": 10655019,
            "name": "EXHIBIDOR DENTYNE BLACK (X4)",
            "subcategory_id": 1356
        },
        {
            "code": 10655021,
            "name": "EXHIBIDOR DENTYNE CERRADO",
            "subcategory_id": 1356
        },
        {
            "code": 10655023,
            "name": "CUADERNO DENTYNE",
            "subcategory_id": 1356
        },
        {
            "code": 10655025,
            "name": "PECHERAS DENTYNE  UNID",
            "subcategory_id": 1356
        },
        {
            "code": 10655027,
            "name": "MINI LAPICERA DENTYNE UNID",
            "subcategory_id": 1356
        },
        {
            "code": 10655029,
            "name": "LLAVERO DENTYNE-HALLS DESTAPADOR UNI",
            "subcategory_id": 1356
        },
        {
            "code": 10655031,
            "name": "LLAVERO GOMA DENTYNE UNI",
            "subcategory_id": 1356
        },
        {
            "code": 10656001,
            "name": "OREO ROLLO REGULAR 30X126 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656003,
            "name": "OREO ROLLO COOKIES AND CREAM 30X126 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656011,
            "name": "OREO MINI 10X50 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656031,
            "name": "CHIPS AHOY REGULAR 30X114 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656033,
            "name": "CHIPS AHOY BLACK AND WHITE 30X114 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656036,
            "name": "CHIPS AHOY COLORES 30X114 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656039,
            "name": "CHIPS AHOY SURT 30X114 GRS + 4 DMF",
            "subcategory_id": 1357
        },
        {
            "code": 10656045,
            "name": "PACK OREO+CHIPS AHOY+ 2 DENTYNE",
            "subcategory_id": 1357
        },
        {
            "code": 10656051,
            "name": "CUA CUA BARRA 30X18 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656061,
            "name": "GALLETA CLUB SOCIAL REGULAR 9X234 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656063,
            "name": "GALLETA CLUB SOCIAL MANTEQUILLA 9X234 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656065,
            "name": "GALLETA CLUB SOCIAL QUESO 9X234 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656070,
            "name": "CEREALITAS SALVADO 16 X 606GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656073,
            "name": "CEREALITAS ARROZ 24 X 160GR",
            "subcategory_id": 1357
        },
        {
            "code": 10656081,
            "name": "MANTECOL 12X40 GR",
            "subcategory_id": 1357
        },
        {
            "code": 10658001,
            "name": "MAYONESA KRAFT FRASCO 12X443 ML",
            "subcategory_id": 1358
        },
        {
            "code": 10658003,
            "name": "MAYONESA KRAFT FRASCO  LIGHT 12X443 ML",
            "subcategory_id": 1358
        },
        {
            "code": 10659001,
            "name": "ROYAL SOBRE 16 X 30GR",
            "subcategory_id": 1359
        },
        {
            "code": 10659003,
            "name": "ROYAL SOBRE 20 X 100 GR",
            "subcategory_id": 1359
        },
        {
            "code": 10659005,
            "name": "ROYAL FRASCO 250 GR",
            "subcategory_id": 1359
        },
        {
            "code": 10659007,
            "name": "ROYAL FRASCO 12 X 100 GR",
            "subcategory_id": 1359
        },
        {
            "code": 10660001,
            "name": "ALFAJOR CLASICO 18X35 GRS.",
            "subcategory_id": 1360
        },
        {
            "code": 10660005,
            "name": "CHOCOLATE SAFARI 30X27 GRS.",
            "subcategory_id": 1360
        },
        {
            "code": 10660010,
            "name": "CREMOLATE LUCUMA 20X14 GRS.",
            "subcategory_id": 1360
        },
        {
            "code": 10660012,
            "name": "CREMOLATE MORA 20X14 GRS",
            "subcategory_id": 1360
        },
        {
            "code": 10660015,
            "name": "CHICLES KLETS MORANGO 12X45 GRS.",
            "subcategory_id": 1360
        },
        {
            "code": 10660017,
            "name": "CHICLES KLETS MENTA 12X45 GRS.",
            "subcategory_id": 1360
        },
        {
            "code": 10661010,
            "name": "GALLETA SANTIAGO MINI COCO 45X40 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661012,
            "name": "GALLETAS SANTIAGO MINI CHOCOLAT 45X40 GR",
            "subcategory_id": 1361
        },
        {
            "code": 10661014,
            "name": "GALLETAS SANTIAGO MINI LIMON 45X40 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661016,
            "name": "GALLETAS SANTIAGO MINI VAINILLA 45X40 GR",
            "subcategory_id": 1361
        },
        {
            "code": 10661018,
            "name": "GALLETA SANTIAGO MINI CHAMPAÑA 45X40 GR",
            "subcategory_id": 1361
        },
        {
            "code": 10661019,
            "name": "GALLETAS SANTIAGO MINI SURTIDO 45X40 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661020,
            "name": "GALL. SANTIAGO SURTIDO 15  X 350 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661021,
            "name": "GALL. SANTIAGO CHOCOLATE 14 X 375 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661022,
            "name": "GALL. SANTIAGO CHOCO CHIPS 14 X 375 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661023,
            "name": "GALL. SANTIAGO COCO 14 X 375 GRS.",
            "subcategory_id": 1361
        },
        {
            "code": 10661024,
            "name": "GALL. SANTIAGO LIMON 14 X 375 GRS.",
            "subcategory_id": 1361
        },
        {
            "code": 10661025,
            "name": "GALL. SANTIAGO VAINILLA  14 X 375 GRS.",
            "subcategory_id": 1361
        },
        {
            "code": 10661027,
            "name": "GALL.SANTIAGO CHAMPAÑA 24X80 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661100,
            "name": "GALLETAS TUBO COCO 27 X 110 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661103,
            "name": "GALLETAS TUBO CHOCO CHIPS  27 X 110 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661105,
            "name": "GALLETAS TUBO MANTEQUILLA  27 X 110 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10661107,
            "name": "GALLETAS TUBO SURTIDA 27 X 110 GRS",
            "subcategory_id": 1361
        },
        {
            "code": 10662001,
            "name": "BARRA EMILIE ARANDANO CHIA 15X20 GRS (8)",
            "subcategory_id": 1362
        },
        {
            "code": 10662003,
            "name": "BARRA EMILIE COCO QUINOA 15X20 GRS (8)",
            "subcategory_id": 1362
        },
        {
            "code": 10662005,
            "name": "BARRA EMILIE NARANJA QUINOA15X20 GRS (8)",
            "subcategory_id": 1362
        },
        {
            "code": 10662007,
            "name": "BARRA UFIRST FRUTOS SECOS 15X30 GRS (8)",
            "subcategory_id": 1362
        },
        {
            "code": 10662009,
            "name": "BARRA UFIRST MULTISEMILLA  15X30 GRS (8)",
            "subcategory_id": 1362
        },
        {
            "code": 10662011,
            "name": "BARRA CEREAL SECHU FRAMBUEZA 15X20 GR",
            "subcategory_id": 1362
        },
        {
            "code": 10662013,
            "name": "BARRA CEREAL SECHU FRUT BOSQUES 15X20 GR",
            "subcategory_id": 1362
        },
        {
            "code": 10664001,
            "name": "CHOC CARAVELLA DISCOS BLANCOS 12X1 KG",
            "subcategory_id": 1363
        },
        {
            "code": 10664003,
            "name": "CHOC CARAVELLA DISCOS DARK 12X1 KG",
            "subcategory_id": 1363
        },
        {
            "code": 10665001,
            "name": "CREMA VEGETAL BRAVO CREM 48X200 ML",
            "subcategory_id": 1364
        },
        {
            "code": 10665003,
            "name": "CREMA VEGETAL GIOIA CREM  48X200 ML",
            "subcategory_id": 1364
        },
        {
            "code": 10665005,
            "name": "CREMA CHANTILLY DELICE 25X400 GRS",
            "subcategory_id": 1364
        },
        {
            "code": 10665007,
            "name": "MERENGUE DELICE 20X500 GRS",
            "subcategory_id": 1364
        },
        {
            "code": 10665009,
            "name": "CREMA VEGETAL BRAVO CREM 12X1 LT",
            "subcategory_id": 1364
        },
        {
            "code": 10665011,
            "name": "CREMA VEGETAL DECOR UP CACAO 12X1 LT",
            "subcategory_id": 1364
        },
        {
            "code": 10666001,
            "name": "MANTECA VEGETAL VITA BAKE 12 X 1  KG",
            "subcategory_id": 1365
        },
        {
            "code": 10670004,
            "name": "PAPAS FRITAS RUCAS ORIGINAL 24X100 GRS",
            "subcategory_id": 1366
        },
        {
            "code": 10670006,
            "name": "PAPAS FRITAS RUCAS ARTESANAL 24X100 GRS.",
            "subcategory_id": 1366
        },
        {
            "code": 10670007,
            "name": "PAPAS FRITAS RUCAS CREMA CEBOLLA 24X100G",
            "subcategory_id": 1366
        },
        {
            "code": 10670030,
            "name": "BEB. ALOE VERA ORIGINAL 24X500ML.",
            "subcategory_id": 1367
        },
        {
            "code": 10670033,
            "name": "BEB. ALOE VERA SABOR PIÑA 24X500ML.",
            "subcategory_id": 1367
        },
        {
            "code": 10670036,
            "name": "BEB. ALOE VERA SABOR FRUTILLA 24X500ML.",
            "subcategory_id": 1367
        },
        {
            "code": 10670039,
            "name": "BEB. ALOE VERA SABOR MANGO 24X500ML",
            "subcategory_id": 1367
        },
        {
            "code": 10670042,
            "name": "BEB. ALOE VERA SABOR SANDIA 24X500ML",
            "subcategory_id": 1367
        },
        {
            "code": 10670200,
            "name": "HUEVO SLIME SIN SELLO X18UND 20GR (6)",
            "subcategory_id": 1366
        },
        {
            "code": 10670205,
            "name": "HUEVO SAURIO SIN SELLOS X18UND 20GRS (6)",
            "subcategory_id": 1366
        },
        {
            "code": 10670210,
            "name": "HUEVO UNICORNIO SIN SELLOS X18UND 20GR(6",
            "subcategory_id": 1366
        },
        {
            "code": 10670215,
            "name": "HUEVO GRUA SIN SELLOS X18UND 20GRS",
            "subcategory_id": 1366
        },
        {
            "code": 10670220,
            "name": "HUEVO DINO SIN SELLOS X18UND 20GRS",
            "subcategory_id": 1366
        },
        {
            "code": 10670300,
            "name": "SOPA INSTAN. VITELLI POLLO PICANTE X48UN",
            "subcategory_id": 1366
        },
        {
            "code": 10670305,
            "name": "SOPA INSTAN. VITELLI CAMARON X48UN 65GR",
            "subcategory_id": 1366
        },
        {
            "code": 10670310,
            "name": "SOPA INSTAN. VITELLI VEGETALES X48UN",
            "subcategory_id": 1366
        },
        {
            "code": 10670315,
            "name": "SOPA INSTAN. VITELLI SABOR CARNE X48UN",
            "subcategory_id": 1366
        },
        {
            "code": 10670320,
            "name": "SOPA INSTAN. VITELLI SABOR QUESO X48UN",
            "subcategory_id": 1366
        },
        {
            "code": 10670325,
            "name": "SOPA INSTAN. VITELLI SABOR POLLO X48UN",
            "subcategory_id": 1366
        },
        {
            "code": 10670330,
            "name": "SOPA INSTAN. VITELLI SABOR POLLO 12X65G",
            "subcategory_id": 1366
        },
        {
            "code": 10670401,
            "name": "SOPA VITELLI POLLO PICANTE 12 X 65GR",
            "subcategory_id": 1366
        },
        {
            "code": 10670405,
            "name": "SOPA VITELLI CARNE 12 X 65GR",
            "subcategory_id": 1366
        },
        {
            "code": 10671001,
            "name": "PAPAS TIKA PATAGONIA 6 X135GR",
            "subcategory_id": 1368
        },
        {
            "code": 10671005,
            "name": "PAPAS TIKA FURIOSAS 6X135GR",
            "subcategory_id": 1368
        },
        {
            "code": 10671010,
            "name": "PAPAS TIKA PATAGONIA 14 X180 GR",
            "subcategory_id": 1368
        },
        {
            "code": 10671015,
            "name": "PAPAS TIKA FURIOSA 14 X180 GR",
            "subcategory_id": 1368
        },
        {
            "code": 10671020,
            "name": "PAPAS TIKA CHILOE 14 X180 GR",
            "subcategory_id": 1368
        },
        {
            "code": 10673027,
            "name": "CEREAL ARGOLLITAS DAFF24X30GR",
            "subcategory_id": 1369
        },
        {
            "code": 10673029,
            "name": "CEREAL HOJUELAS CHOCOLATE DAFF 24X30GR",
            "subcategory_id": 1369
        },
        {
            "code": 10673031,
            "name": "GALLETA MINICHIPS DAFF 30X40 GRS",
            "subcategory_id": 1369
        },
        {
            "code": 10673033,
            "name": "GALLETA MINI LIMON DAFF 30X40 GRS",
            "subcategory_id": 1369
        },
        {
            "code": 10673035,
            "name": "GALLETA MINI MANTEQUILLA DAFF 30X40 GRS",
            "subcategory_id": 1369
        },
        {
            "code": 10673037,
            "name": "BARRA DE CEREAL SABOR CHOCOLATE DAFF 20G",
            "subcategory_id": 1369
        },
        {
            "code": 10674015,
            "name": "PAPAS FRITAS CRIPS ORIGINAL 24X60GR",
            "subcategory_id": 1370
        },
        {
            "code": 10674020,
            "name": "PAPAS FRITAS CRIPS QUESO 24X60GR",
            "subcategory_id": 1370
        },
        {
            "code": 10674025,
            "name": "PAPAS FRITAS CRIPS CREMA CEBOLLA 24X60G",
            "subcategory_id": 1370
        },
        {
            "code": 10675001,
            "name": "MAXI COCTEL 24X45GRS  FRIT RAVICH",
            "subcategory_id": 1371
        },
        {
            "code": 10680002,
            "name": "PALOMITAS DULCES 14X120GRS FRIT RAVICH",
            "subcategory_id": 1372
        },
        {
            "code": 10680005,
            "name": "PALOMITAS DE COLORES 12X120GRS FRIT RAVI",
            "subcategory_id": 1372
        },
        {
            "code": 10680008,
            "name": "PALOMITAS KETCHUP/MOSTAZA 12 UND X 80 GR",
            "subcategory_id": 1372
        },
        {
            "code": 10681050,
            "name": "FIDEOS INSTANTANEOS SABOR VEGETAL 24X65G",
            "subcategory_id": 1373
        },
        {
            "code": 10681055,
            "name": "FIDEOS INSTANTANEOS SABOR  POLLO 24X65G",
            "subcategory_id": 1373
        },
        {
            "code": 10681060,
            "name": "FIDEOS INSTANTANEOS SABOR TOMATE 24X65G",
            "subcategory_id": 1373
        },
        {
            "code": 10681065,
            "name": "SURTIDOS FIDEOS INSTANTANEOS  24X65G",
            "subcategory_id": 1373
        },
        {
            "code": 10685005,
            "name": "CHOCOLATE KING 18X 27 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685010,
            "name": "CHOCOLATE MEGASHOW 18X27 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685015,
            "name": "BUONO AVELLANA 16X32 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685020,
            "name": "BUONO CHOCOLATE 16X32 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685025,
            "name": "BUONO CREMA 16X32 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685030,
            "name": "CARAMELO IMINT EUCALIPTUS 10X35 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685035,
            "name": "CARAMELO IMINT EXTRA FUERTE 10X35 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685040,
            "name": "CARAMELO IMINT MENTA 10X35 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685045,
            "name": "GOMA DE MASCAR IMINT BLUE 18X8,5 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10685050,
            "name": "GOMA DE MASCAR IMINT GREEN 18X8,5 GRS",
            "subcategory_id": 1374
        },
        {
            "code": 10690004,
            "name": "MADALENA DULCE LECHE 12X225 GR",
            "subcategory_id": 1375
        },
        {
            "code": 10690005,
            "name": "MADALENA VAIN CHIPS 12X225 GR",
            "subcategory_id": 1375
        },
        {
            "code": 10690006,
            "name": "MADALENA MARMOLADA 12X225 GR",
            "subcategory_id": 1375
        },
        {
            "code": 10690007,
            "name": "MADALENA VAINILLA 12X225 GR",
            "subcategory_id": 1375
        },
        {
            "code": 10690010,
            "name": "BUDIN VAINILLA 18X200",
            "subcategory_id": 1375
        },
        {
            "code": 10690011,
            "name": "BUDIN VAIN CHIPS 18X200 GR",
            "subcategory_id": 1375
        },
        {
            "code": 10700001,
            "name": "SALCHICHAS SUREÑAS PF 24X250",
            "subcategory_id": 1376
        },
        {
            "code": 10700002,
            "name": "VIENESA PF 24X250",
            "subcategory_id": 1376
        },
        {
            "code": 10700012,
            "name": "PATE TERNERA PF X16",
            "subcategory_id": 1376
        },
        {
            "code": 10700020,
            "name": "CERVECERO DE PAVO",
            "subcategory_id": 1376
        },
        {
            "code": 10700021,
            "name": "CERVECERO PF",
            "subcategory_id": 1376
        },
        {
            "code": 10700030,
            "name": "JAMONADA PF",
            "subcategory_id": 1376
        },
        {
            "code": 10700031,
            "name": "COPPA ILALIANA",
            "subcategory_id": 1376
        },
        {
            "code": 10700040,
            "name": "MORTADELA LISA",
            "subcategory_id": 1376
        },
        {
            "code": 10700043,
            "name": "ARROLLADO DE LOMO",
            "subcategory_id": 1376
        },
        {
            "code": 10700045,
            "name": "CHORIZO PARRILLERO TIL",
            "subcategory_id": 1376
        },
        {
            "code": 10700047,
            "name": "CHORIZO PARRILLERO PF",
            "subcategory_id": 1376
        },
        {
            "code": 10700050,
            "name": "JAMON INTITUCIONAL",
            "subcategory_id": 1376
        },
        {
            "code": 10700051,
            "name": "JAMON PAVO COCIDO",
            "subcategory_id": 1376
        },
        {
            "code": 10700055,
            "name": "PAVO PIMENTON",
            "subcategory_id": 1376
        },
        {
            "code": 10700056,
            "name": "PECHUGA PAVO AHUMADA",
            "subcategory_id": 1376
        },
        {
            "code": 10700065,
            "name": "SUPREMA POLLO JAMON",
            "subcategory_id": 1376
        },
        {
            "code": 10700066,
            "name": "LOMITOS DE CERDO STAR MEAT",
            "subcategory_id": 1376
        },
        {
            "code": 10700067,
            "name": "PECHUGA PAVO COCIDA",
            "subcategory_id": 1376
        },
        {
            "code": 10700068,
            "name": "JAMON FIAMBRE",
            "subcategory_id": 1376
        },
        {
            "code": 10700100,
            "name": "QUESO CHANCO",
            "subcategory_id": 1376
        },
        {
            "code": 10700105,
            "name": "QUESO GAUDA LAMINADO 2X1 KILO",
            "subcategory_id": 1376
        },
        {
            "code": 10700110,
            "name": "QUESO RALLADO REGGIANITO P.F",
            "subcategory_id": 1376
        },
        {
            "code": 10701253,
            "name": "MARG.REGIMEL POTE 24 X 250 GRS",
            "subcategory_id": 1377
        },
        {
            "code": 10701255,
            "name": "MARGARINA REGIMEL POTE 12X500",
            "subcategory_id": 1377
        },
        {
            "code": 10702120,
            "name": "MARG. SUREÑA LIGHT POTE 6X1 KL",
            "subcategory_id": 1378
        },
        {
            "code": 10702121,
            "name": "MARG. SUREÑA PAN 12X125 GR (6)",
            "subcategory_id": 1378
        },
        {
            "code": 10702122,
            "name": "MARG. SUREÑA POTE 6X1 KL",
            "subcategory_id": 1378
        },
        {
            "code": 10702123,
            "name": "MARG. SUREÑA POTE 12X500 GR",
            "subcategory_id": 1378
        },
        {
            "code": 10702161,
            "name": "MARG. SUREÑA DIET POTE 12X500 GR",
            "subcategory_id": 1378
        },
        {
            "code": 10702267,
            "name": "MARG. SUREÑA POTE MIX 12X500 GR",
            "subcategory_id": 1378
        },
        {
            "code": 10702280,
            "name": "MARG. SUREÑA MIX PAN 40X200 GR",
            "subcategory_id": 1378
        },
        {
            "code": 10703173,
            "name": "MARG. CALO CAJA LISTA PAN 12X125 GR (6)",
            "subcategory_id": 1379
        },
        {
            "code": 10703234,
            "name": "MARGARINA CALO POTE 12X450 GR",
            "subcategory_id": 1379
        },
        {
            "code": 10703236,
            "name": "MARGARINA CALO LIGHT POTE 12X450 GR",
            "subcategory_id": 1379
        },
        {
            "code": 10703238,
            "name": "MARGARINA CALO POTE 6X900 GR",
            "subcategory_id": 1379
        },
        {
            "code": 10703241,
            "name": "MARGARINA CALO MIX 12X350 GR",
            "subcategory_id": 1379
        },
        {
            "code": 10704110,
            "name": "MARG. PAMPERITA PAN 12X100G (6)",
            "subcategory_id": 1380
        },
        {
            "code": 10704119,
            "name": "MARG. PAMPERITA PAN 40X250G",
            "subcategory_id": 1380
        },
        {
            "code": 10704163,
            "name": "MARG. PAMPERITA PAN 10X1KL",
            "subcategory_id": 1380
        },
        {
            "code": 10704170,
            "name": "MARG. PAMPERITA 10X1KL BOLSA",
            "subcategory_id": 1380
        },
        {
            "code": 10706215,
            "name": "MANTECA CRUCINA PAN 40X200GR",
            "subcategory_id": 1381
        },
        {
            "code": 10706256,
            "name": "MANTECA CRUCINA PAN 20X400GR",
            "subcategory_id": 1381
        },
        {
            "code": 10706258,
            "name": "MANTECA CRUCINA PAN 12X100GR (6)",
            "subcategory_id": 1381
        },
        {
            "code": 10706528,
            "name": "MANTECA ASTRA PAN 40X200GR",
            "subcategory_id": 1381
        },
        {
            "code": 10706530,
            "name": "MANTECA ASTRA PAN 12X100GR (6)",
            "subcategory_id": 1381
        },
        {
            "code": 10706531,
            "name": "MANTECA PALMIN PAN 40X200 GR",
            "subcategory_id": 1381
        },
        {
            "code": 10706542,
            "name": "MANTECA PALMIN PAN 12X100GR (6)",
            "subcategory_id": 1381
        },
        {
            "code": 10707157,
            "name": "ACEITE BELMONT VEGETAL 16X900 ML",
            "subcategory_id": 1382
        },
        {
            "code": 10707158,
            "name": "ACEITE BELMONT VEGETAL 12 X900 ML",
            "subcategory_id": 1382
        },
        {
            "code": 10707202,
            "name": "ACEITE BELMONT VEGETAL 12X1 LT",
            "subcategory_id": 1382
        },
        {
            "code": 10707204,
            "name": "ACEITE BELMONT CANOLA 10X250 ML",
            "subcategory_id": 1382
        },
        {
            "code": 10707207,
            "name": "ACEITE BELMONT CANOLA 12X1 LT",
            "subcategory_id": 1382
        },
        {
            "code": 10707218,
            "name": "ACEITE BELMONT VEGETAL 4X5 LT",
            "subcategory_id": 1382
        },
        {
            "code": 10707226,
            "name": "ACEITE BELMONT FREIR 12X1 LT",
            "subcategory_id": 1382
        },
        {
            "code": 10708278,
            "name": "ACEITE REINA MARAVILLA FREIR 4 X5 LT",
            "subcategory_id": 1383
        },
        {
            "code": 10709132,
            "name": "ACEITE CHEF EXTRAVIRGEN 6X1LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709299,
            "name": "ACEITE CHEF MARAVILLA 12X1 LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709300,
            "name": "ACEITE CHEF MARAVILLA 30X500 ML",
            "subcategory_id": 1384
        },
        {
            "code": 10709302,
            "name": "ACEITE CHEF VEGETAL 16X1LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709305,
            "name": "ACEITE CHEF MAIZ 12X1LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709306,
            "name": "ACEITE CHEF OLIVA 12X1 LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709308,
            "name": "ACEITE CHEFF PEPITA DE UVA 12X1LT",
            "subcategory_id": 1384
        },
        {
            "code": 10709309,
            "name": "ACEITE CHEF PEPITA UVA 30X500ML",
            "subcategory_id": 1384
        },
        {
            "code": 10709312,
            "name": "ACEITE CHEF EXTRAVIRGEN 12X500ML",
            "subcategory_id": 1384
        },
        {
            "code": 10710313,
            "name": "ACEITE CHEF MARAVILLA 4X5 LT",
            "subcategory_id": 1385
        },
        {
            "code": 10711162,
            "name": "ACEITE CRISTAL VEGETAL 12X900ML",
            "subcategory_id": 1386
        },
        {
            "code": 10717000,
            "name": "L POLVO 26% CALO INST 20X850 GR (9385)",
            "subcategory_id": 1387
        },
        {
            "code": 10717291,
            "name": "L POLVO 26% CALO INST BOLSA 6X1.440 KG",
            "subcategory_id": 1387
        },
        {
            "code": 10717389,
            "name": "LECHE POLVO 0% CALO 20X800 GR (8389)",
            "subcategory_id": 1387
        },
        {
            "code": 10717390,
            "name": "LECHE POLVO SUPER CALO 20X850G (309386)",
            "subcategory_id": 1387
        },
        {
            "code": 10717495,
            "name": "LP LONCO EXTRA CALCIO 10X800 GR",
            "subcategory_id": 1387
        },
        {
            "code": 10717586,
            "name": "LP CALO CRECER 1+ 10X800 GRS",
            "subcategory_id": 1387
        },
        {
            "code": 10717587,
            "name": "LP CALO CRECER 4 + 10X800 GRS",
            "subcategory_id": 1387
        },
        {
            "code": 10717800,
            "name": "LECHE EN POLVO CALO 26% GRANEL 1  25KG",
            "subcategory_id": 1387
        },
        {
            "code": 10718199,
            "name": "L POLVO LONCO S/LACT 10X800 GR",
            "subcategory_id": 1388
        },
        {
            "code": 10720043,
            "name": "LONCOLECHE EXTRA PROTEINA 12X1 (9043)",
            "subcategory_id": 1389
        },
        {
            "code": 10720044,
            "name": "LECHE LONCOLECHE ALMENDRA 6X1 LT",
            "subcategory_id": 1389
        },
        {
            "code": 10720202,
            "name": "LECHE SEMI DESCREMADA LONCO 12X1 (9316)",
            "subcategory_id": 1389
        },
        {
            "code": 10720203,
            "name": "LECHE DESCREMADA LONCO 12X1 (9317)",
            "subcategory_id": 1389
        },
        {
            "code": 10720205,
            "name": "LECHE LONCO S/LAC NAT ENT 12X1 (8205)",
            "subcategory_id": 1389
        },
        {
            "code": 10720206,
            "name": "LECHE S/LACTOSA LONCO 12X1 LT (8206)",
            "subcategory_id": 1389
        },
        {
            "code": 10720208,
            "name": "LECHE LCO S/LAC FRUTILLA 12X1 (8208)",
            "subcategory_id": 1389
        },
        {
            "code": 10720209,
            "name": "LECHE LCO S/LACT CHOCO 12X1 (8209)",
            "subcategory_id": 1389
        },
        {
            "code": 10720210,
            "name": "LECHE CHOCOLATE LONCO 12X1 (8210)",
            "subcategory_id": 1389
        },
        {
            "code": 10720211,
            "name": "LECHE FRUTILLA LONCO 12X1LT (8211)",
            "subcategory_id": 1389
        },
        {
            "code": 10720212,
            "name": "LECHE PLATANO LONCO 12X1 (8212)",
            "subcategory_id": 1389
        },
        {
            "code": 10720213,
            "name": "LECHE VAINILLA LONCO 12X1 (8213)",
            "subcategory_id": 1389
        },
        {
            "code": 10720315,
            "name": "LECHE DESC FRUT LIGHT LCO 12X1 (8315)",
            "subcategory_id": 1389
        },
        {
            "code": 10720318,
            "name": "LECHE BLANCA ENTERA LONCO 12X1 (9318)",
            "subcategory_id": 1389
        },
        {
            "code": 10720343,
            "name": "LECHE DESC CHOC LIGHT LCO 12X1 (8343)",
            "subcategory_id": 1389
        },
        {
            "code": 10720350,
            "name": "LECHE S/LAC DESCREMADA LCO 12X1 (8350)",
            "subcategory_id": 1389
        },
        {
            "code": 10720392,
            "name": "LECHE LONCO CHOCOLATE 12X500 (9392)",
            "subcategory_id": 1389
        },
        {
            "code": 10720397,
            "name": "LECHE S/LACT EXTRA CALCIO 12X1 (8397)",
            "subcategory_id": 1389
        },
        {
            "code": 10720400,
            "name": "LECHE UHT MOMENTS MOCA 12X1 LT",
            "subcategory_id": 1389
        },
        {
            "code": 10720410,
            "name": "LECHE MOMENTS CAPUCHINO 12X1 LTS",
            "subcategory_id": 1389
        },
        {
            "code": 10721050,
            "name": "LECHE PLATANO LONCO 30X200CC (5)",
            "subcategory_id": 1390
        },
        {
            "code": 10721329,
            "name": "LECHE VAINILLA LONCO 30X200CC (5)",
            "subcategory_id": 1390
        },
        {
            "code": 10721617,
            "name": "LECHE CHOCOLATE LONCO 30X200CC (5)",
            "subcategory_id": 1390
        },
        {
            "code": 10721618,
            "name": "LECHE FRUTILLA LONCO 30X200CC (5)",
            "subcategory_id": 1390
        },
        {
            "code": 10722306,
            "name": "LONCO PROTEIN MILK CAPP 12X1 LT",
            "subcategory_id": 1391
        },
        {
            "code": 10722307,
            "name": "LONCO PROTEIN MILK CAPP 18X200 ML",
            "subcategory_id": 1391
        },
        {
            "code": 10722308,
            "name": "LONCO PROTEIN MILK CHOCO 12X1 LT",
            "subcategory_id": 1391
        },
        {
            "code": 10722309,
            "name": "LONCO PROTEIN MILK CHOCO 18X200 ML",
            "subcategory_id": 1391
        },
        {
            "code": 10724531,
            "name": "PROBIOTICO CALAN FRUTILLA 8UND X 6PAQ",
            "subcategory_id": 1392
        },
        {
            "code": 10724533,
            "name": "PROBIOTICO CALAN MANZANA 8UND X 6PAQ",
            "subcategory_id": 1392
        },
        {
            "code": 10724534,
            "name": "PROBIOTICO CALAN MULTI 8UND X 6PAQ",
            "subcategory_id": 1392
        },
        {
            "code": 10724541,
            "name": "PROBIOTICO CALAN MORA 8UND X 6PAQ",
            "subcategory_id": 1392
        },
        {
            "code": 10725037,
            "name": "LONCO BREAK CARAMELO 18X250 (9408)",
            "subcategory_id": 1393
        },
        {
            "code": 10725038,
            "name": "CAPUCCINO LONCOLECHE 12X1 LT (9038)",
            "subcategory_id": 1393
        },
        {
            "code": 10725039,
            "name": "CHOCO AVELLANAS LONCO 12X1 LT (9039)",
            "subcategory_id": 1393
        },
        {
            "code": 10725632,
            "name": "LONCO BREAK CAPPUCCINO 18X250 (9406)",
            "subcategory_id": 1393
        },
        {
            "code": 10725633,
            "name": "LONCO BREAK CHOCO AVELLANA 18X250 (9407)",
            "subcategory_id": 1393
        },
        {
            "code": 10726215,
            "name": "CREMA PARA BATIR LONCO 12X1",
            "subcategory_id": 1394
        },
        {
            "code": 10726309,
            "name": "CREMA LISTA LONCO 30X200ML (5)",
            "subcategory_id": 1394
        },
        {
            "code": 10726537,
            "name": "CREMA S/LACT LONCO 30X200(5)",
            "subcategory_id": 1394
        },
        {
            "code": 10727096,
            "name": "YOGU YOGU FRUTILLA 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10727097,
            "name": "YOGU YOGU  DAMASCO 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10727098,
            "name": "YOGU YOGU PIÑA 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10727099,
            "name": "YOGU YOGU VAINILLA 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10727100,
            "name": "YOGU YOGU MORA 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10727195,
            "name": "YOGU YOGU CHIRIMOYA 30X200 (5)",
            "subcategory_id": 1395
        },
        {
            "code": 10730429,
            "name": "YOGURT CALAN SURTIDO 4 X 12 X 110G",
            "subcategory_id": 1396
        },
        {
            "code": 10732915,
            "name": "PROT SHOT BERRIES 6X100 GR(8)",
            "subcategory_id": 1397
        },
        {
            "code": 10732920,
            "name": "PROT SHOT VAINILLA 6X100GR (8)",
            "subcategory_id": 1397
        },
        {
            "code": 10733101,
            "name": "SHAKE SHAKE CHOCOLATE 30X170CC (5)",
            "subcategory_id": 1398
        },
        {
            "code": 10733103,
            "name": "SHAKE SHAKE MANJAR 30X170CC (5)",
            "subcategory_id": 1398
        },
        {
            "code": 10734081,
            "name": "QUESO GAUDA CALO PIEZA X3KL",
            "subcategory_id": 1399
        },
        {
            "code": 10734200,
            "name": "QUESO MORAZELLA 2X3.5KG",
            "subcategory_id": 1399
        },
        {
            "code": 10734421,
            "name": "QUESO CALO LAMINADO 16X 233 GRS",
            "subcategory_id": 1399
        },
        {
            "code": 10734424,
            "name": "GAUDA CALO LAMINADO X 5 KILOS",
            "subcategory_id": 1399
        },
        {
            "code": 10734440,
            "name": "QUESO CREMA CALO 40X100 GR",
            "subcategory_id": 1399
        },
        {
            "code": 10734452,
            "name": "QUESO LAS PARCELAS DE VALDIVIA X3 KLS",
            "subcategory_id": 1399
        },
        {
            "code": 10735060,
            "name": "MANTEQUILLA LAS PARCELAS 20X250",
            "subcategory_id": 1400
        },
        {
            "code": 10735072,
            "name": "MANTEQUILLA CALO 40X125",
            "subcategory_id": 1400
        },
        {
            "code": 10735073,
            "name": "MANTEQUILLA CALO 20X250",
            "subcategory_id": 1400
        },
        {
            "code": 10735074,
            "name": "MANTEQUILLA CALO 12X350",
            "subcategory_id": 1400
        },
        {
            "code": 10736054,
            "name": "MANJAR DOYPACK 12X400",
            "subcategory_id": 1401
        },
        {
            "code": 10736055,
            "name": "MANJAR DOYPACK 12X800",
            "subcategory_id": 1401
        },
        {
            "code": 10737527,
            "name": "NECTAR WATTS NARANJA 12X1 LT (5527)",
            "subcategory_id": 1402
        },
        {
            "code": 10737528,
            "name": "NECTAR WATTS MANZANA 12X1 LT (5528)",
            "subcategory_id": 1402
        },
        {
            "code": 10737529,
            "name": "NECTAR WATTS DURAZNO 12X1 LT (5529)",
            "subcategory_id": 1402
        },
        {
            "code": 10737531,
            "name": "NECTAR WATTS PIÑA 12X1LT (5531)",
            "subcategory_id": 1402
        },
        {
            "code": 10741000,
            "name": "JUGO 100% FRUTA NARANJA WATTS 30X200 CC",
            "subcategory_id": 1403
        },
        {
            "code": 10741005,
            "name": "JUGO 100% FRUTA MANZANA WATTS 30X200 CC",
            "subcategory_id": 1403
        },
        {
            "code": 10750111,
            "name": "MERM.L.LAGOS DAMASCO 24X250",
            "subcategory_id": 1404
        },
        {
            "code": 10750112,
            "name": "MERM.L.LAGOS DURAZNO 24X25",
            "subcategory_id": 1404
        },
        {
            "code": 10750113,
            "name": "MERM.L.LAGOS MORA 24X250",
            "subcategory_id": 1404
        },
        {
            "code": 10750117,
            "name": "MERM.L.LAGOS FRUTILLA 24X250",
            "subcategory_id": 1404
        },
        {
            "code": 10751029,
            "name": "MERM.WATTS DURAZNO 12X250 GRS",
            "subcategory_id": 1405
        },
        {
            "code": 10751030,
            "name": "MERM.WATTS DAMASCO 12X250 GRS",
            "subcategory_id": 1405
        },
        {
            "code": 10751031,
            "name": "MERM.WATTS FRUTILLA 12X250 GRS",
            "subcategory_id": 1405
        },
        {
            "code": 10751032,
            "name": "MERM.WATTS MORA 12X250 GRS",
            "subcategory_id": 1405
        },
        {
            "code": 10751062,
            "name": "MERM.WATTS  FRUTAS DEL SUR 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751101,
            "name": "MERM.WATTS DAMASCO 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751102,
            "name": "MERM.WATTS DURAZNO 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751103,
            "name": "MERM.WATTS MORA 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751104,
            "name": "MERM.WATTS ALCAYOTA 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751105,
            "name": "MERM.WATTS CIRUELA 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751107,
            "name": "MERM.WATTS FRUTILLA 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10751108,
            "name": "MERM.WATTS FRAMBUESA 24X250",
            "subcategory_id": 1405
        },
        {
            "code": 10752121,
            "name": "MERM.WATTS DAMASCO DIET 24X250",
            "subcategory_id": 1406
        },
        {
            "code": 10752122,
            "name": "MERM.WATTS DURAZNO DIET 24X250",
            "subcategory_id": 1406
        },
        {
            "code": 10752123,
            "name": "MERM.WATTS MORA DIET 24X250",
            "subcategory_id": 1406
        },
        {
            "code": 10752127,
            "name": "MERM.WATTS FRUTILLA DIET 24X250",
            "subcategory_id": 1406
        },
        {
            "code": 10752128,
            "name": "MERM.WATTS FRAMBUESA DIET 24X250",
            "subcategory_id": 1406
        },
        {
            "code": 10756422,
            "name": "DULCE MEMBRILLO POTE 12X500 (3422)",
            "subcategory_id": 1407
        },
        {
            "code": 10756429,
            "name": "DULCE CIRUELA 12X500 (3429)",
            "subcategory_id": 1407
        },
        {
            "code": 10756457,
            "name": "DULCE MEMBRILLO 12X500 (3457)",
            "subcategory_id": 1407
        },
        {
            "code": 10756460,
            "name": "DULCE MORA 12X500 (3460)",
            "subcategory_id": 1407
        },
        {
            "code": 10756465,
            "name": "DULCE MEMBRILLO WATTS 12X250 (3465)",
            "subcategory_id": 1407
        },
        {
            "code": 10756466,
            "name": "DULCE MEMBRILLO WATTS 12X1KG (3466)",
            "subcategory_id": 1407
        },
        {
            "code": 10760320,
            "name": "SALSA TOMATE WASIL SACHET 24X180",
            "subcategory_id": 1408
        },
        {
            "code": 10767117,
            "name": "MERMELADA REGIMEL BERRIES 24X200GRS",
            "subcategory_id": 1409
        },
        {
            "code": 10767119,
            "name": "MERMELADA REGIMEL DAMASCO 24X200GRS",
            "subcategory_id": 1409
        },
        {
            "code": 10767120,
            "name": "MERMELADA REGIMEL DURAZNO 24X200GRS",
            "subcategory_id": 1409
        },
        {
            "code": 10767122,
            "name": "MERMELADA REGIMEL MORA 24X200GRS",
            "subcategory_id": 1409
        },
        {
            "code": 10771079,
            "name": "ARVEJITAS ESPECIALES 16X340",
            "subcategory_id": 1410
        },
        {
            "code": 10771085,
            "name": "CHOCLO DULCE 16X340",
            "subcategory_id": 1410
        },
        {
            "code": 10771147,
            "name": "POROTOS NEGROS WASIL 16X380",
            "subcategory_id": 1410
        },
        {
            "code": 10771149,
            "name": "GARBANZO WASIL 16X380",
            "subcategory_id": 1410
        },
        {
            "code": 10771161,
            "name": "CHOCLO DULCE 16X500GR",
            "subcategory_id": 1410
        },
        {
            "code": 10771229,
            "name": "POROTOS ROJOS 16X380 G",
            "subcategory_id": 1410
        },
        {
            "code": 10771273,
            "name": "LENTEJAS NEGRAS WASIL 16X380 G",
            "subcategory_id": 1410
        },
        {
            "code": 10771274,
            "name": "TOMATE TROCITO WASIL 16X380 G",
            "subcategory_id": 1410
        },
        {
            "code": 10772077,
            "name": "DURAZNOS CUBITOS WSL 16X380 GR",
            "subcategory_id": 1411
        },
        {
            "code": 10772160,
            "name": "DURAZNO CUBITOS WASIL 16X500 GR",
            "subcategory_id": 1411
        },
        {
            "code": 10773026,
            "name": "ARVEJITAS WSL 48X300 GR",
            "subcategory_id": 1412
        },
        {
            "code": 10774004,
            "name": "DUR MITADES WSL 24X590 GR",
            "subcategory_id": 1413
        },
        {
            "code": 10774005,
            "name": "DUR TROCITOS WSL 24X590 GR",
            "subcategory_id": 1413
        },
        {
            "code": 10774006,
            "name": "DUR MITADES WSL 20X820 GR",
            "subcategory_id": 1413
        },
        {
            "code": 10774009,
            "name": "DUR TROCITOS WSL 20X820 GR",
            "subcategory_id": 1413
        },
        {
            "code": 10774019,
            "name": "FRUTILLAS AL JUGO WSL 24X410 GR",
            "subcategory_id": 1413
        },
        {
            "code": 10775040,
            "name": "CHAMPIÑON ENTERO WSL 24X400 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10775041,
            "name": "CHAMPIÑON LAMINADO WSL 24X400 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10775042,
            "name": "CHOCLO COCTEL WSL 24X425 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10775044,
            "name": "PALMITOS RODAJAS WSL 24X400 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10775045,
            "name": "PALMITOS WSL 24X400 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10776020,
            "name": "COCTEL DE FRUTAS WSL 20X820 GRS",
            "subcategory_id": 1414
        },
        {
            "code": 10776031,
            "name": "COCTEL DE FRUTAS WSL 24X560 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10776032,
            "name": "PIÑA RODAJAS SUD WSL 24X560 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10776033,
            "name": "PINA CUBITOS WSL 24X560 GR",
            "subcategory_id": 1414
        },
        {
            "code": 10779233,
            "name": "HORNITO HORNEO STD 1X20",
            "subcategory_id": 1415
        },
        {
            "code": 10779325,
            "name": "CONDESA HOJA VEGETAL 10X2 (2325)",
            "subcategory_id": 1415
        },
        {
            "code": 10779328,
            "name": "HORNITO HORNEO 20X1 KL (2328)",
            "subcategory_id": 1415
        },
        {
            "code": 10779329,
            "name": "HORNITO HOJA 20X1 (2329)",
            "subcategory_id": 1415
        },
        {
            "code": 10779330,
            "name": "CONDESA BATERKRIM VEGETAL 20X1 (2330)",
            "subcategory_id": 1415
        },
        {
            "code": 10779331,
            "name": "CONDESA HORNEO VEGETAL 20X1 (2331)",
            "subcategory_id": 1415
        },
        {
            "code": 10779339,
            "name": "HORNITO HORNEO 1X20 (2340)",
            "subcategory_id": 1415
        },
        {
            "code": 10779341,
            "name": "HORNITO HOJA 1X20 (2341)",
            "subcategory_id": 1415
        },
        {
            "code": 10779461,
            "name": "HORNITO PANADERIA BOLSA 10X1 (2461)",
            "subcategory_id": 1415
        },
        {
            "code": 10780105,
            "name": "FRITOMASTER PLUS 2X10",
            "subcategory_id": 1416
        },
        {
            "code": 10780443,
            "name": "BATERKRIM 1X20 KGS",
            "subcategory_id": 1416
        },
        {
            "code": 10781518,
            "name": "CRUCINA PANADERA BOLSA 10X1 (2518)",
            "subcategory_id": 1417
        },
        {
            "code": 10781520,
            "name": "CRUCINA PANADERA VEGETAL 10X1 (2264)",
            "subcategory_id": 1417
        },
        {
            "code": 10781536,
            "name": "CRUCINA PAN STANDARD 20X1KL (2536)",
            "subcategory_id": 1417
        },
        {
            "code": 10781568,
            "name": "CRUCINA PANADERA CERDO 10X1 (2270)",
            "subcategory_id": 1417
        },
        {
            "code": 10781598,
            "name": "MARGARINA INDT DOÑA JUANITA 12X1 KG",
            "subcategory_id": 1417
        },
        {
            "code": 10781600,
            "name": "MANTECA INDT AMASA 12 X 1 KG (2582)",
            "subcategory_id": 1417
        },
        {
            "code": 10782210,
            "name": "GRASA PAMPERO BLOQUE 10X1",
            "subcategory_id": 1418
        },
        {
            "code": 10785032,
            "name": "MERM WATTS INDUST GUINDA 6X1 KG",
            "subcategory_id": 1419
        },
        {
            "code": 10785035,
            "name": "MERM WATTS INDUST DAMASCO 6X1 KG",
            "subcategory_id": 1419
        },
        {
            "code": 10785037,
            "name": "MERM WATTS INDUST FRAMBUEZA 6X1 KG",
            "subcategory_id": 1419
        },
        {
            "code": 10786003,
            "name": "MERM W GOLD /TAMIZ DCO GLN 5K",
            "subcategory_id": 1420
        },
        {
            "code": 10786340,
            "name": "MERM W GOLD DAMASCO 5GLN",
            "subcategory_id": 1420
        },
        {
            "code": 10786342,
            "name": "MERM W GOLD MORA 5 GLN",
            "subcategory_id": 1420
        },
        {
            "code": 10786343,
            "name": "MERM W GOLD GUINDA 5 GLN",
            "subcategory_id": 1420
        },
        {
            "code": 10786344,
            "name": "MERM W GOLD FRUTILLA 5 GLN",
            "subcategory_id": 1420
        },
        {
            "code": 10786345,
            "name": "MERM W GOLD FRAMBUESA 5 GLN",
            "subcategory_id": 1420
        },
        {
            "code": 10786346,
            "name": "MERMELADA W GOLD PIÑA 5 KLS",
            "subcategory_id": 1420
        },
        {
            "code": 10786347,
            "name": "MERMELADA W GOLD LUCUMA 5 KLS",
            "subcategory_id": 1420
        },
        {
            "code": 10790010,
            "name": "DUR MITADES WSL 3KL (1010)",
            "subcategory_id": 1421
        },
        {
            "code": 10790021,
            "name": "DUR TROCITOS WSL 3KL (1021)",
            "subcategory_id": 1421
        },
        {
            "code": 10791048,
            "name": "COCTEL WSL 3KL (1048)",
            "subcategory_id": 1422
        },
        {
            "code": 10791049,
            "name": "PIÑAS RODAJAS SUDAF WSL 3KL (1049)",
            "subcategory_id": 1422
        },
        {
            "code": 10791050,
            "name": "PIÑAS CUBITOS SUDAF WSL 3 KL (1050)",
            "subcategory_id": 1422
        },
        {
            "code": 10792380,
            "name": "CREMA VEGETAL CALO 12X1 (8719)",
            "subcategory_id": 1423
        },
        {
            "code": 10792393,
            "name": "REMOJO TRES LECHES CALO 12X1 LT (8393)",
            "subcategory_id": 1423
        },
        {
            "code": 10795407,
            "name": "MANJAR CALO PAST ARTESANAL 2X5",
            "subcategory_id": 1424
        },
        {
            "code": 10795420,
            "name": "MANJAR CALO DULCE CHILENO 2X6",
            "subcategory_id": 1424
        },
        {
            "code": 10795430,
            "name": "MANJAR CALO DULCE RELLENO 2X6",
            "subcategory_id": 1424
        },
        {
            "code": 10796232,
            "name": "PREP HELADO CHOC  TETRA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796233,
            "name": "PREP HELADO BOCADO TETRA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796289,
            "name": "PREP HELADO BASE TETRA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796366,
            "name": "PREP HELADO FRUTILLA TETRA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796372,
            "name": "PREP HELADO STANDAR MORA CREMA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796418,
            "name": "BASE HELADO ARTESANAL NEUTRO 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796501,
            "name": "PREP HELADO LUCUMA TETRA 12X1",
            "subcategory_id": 1425
        },
        {
            "code": 10796547,
            "name": "SALSA CALO  HELADERIA MANJAR 10 X 1 KG",
            "subcategory_id": 1425
        },
        {
            "code": 10796550,
            "name": "PREP HELADO NARANJA 1X10 LT",
            "subcategory_id": 1425
        }
    ]
   
      , {});

      // Crear clientes
      // await queryInterface.bulkInsert('customers', [
      //   { "name": "Cliente 1" },
      //   {  "name": "Cliente 2" },
      //   { "name": "Cliente 3" },
      //   {  "name": "Cliente 4" },
      //   { "name": "Cliente 5" },
      // ], {});

      // Crear ventas
      // await queryInterface.bulkInsert('sales', [
      // ], {});
    } catch (error) {
      console.error('Error durante las operaciones de bulkInsert:', error);
    }
  },
};
