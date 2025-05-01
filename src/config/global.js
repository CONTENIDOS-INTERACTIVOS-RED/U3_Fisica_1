export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Momento lineal y rotacional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios del momento lineal y conservación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de cantidad de movimiento (momento lineal)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principio de conservación del momento lineal',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Impulso y cambio de momento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Colisiones elásticas e inelásticas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Aplicaciones en procesos industriales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Momento de inercia y su impacto en el diseño mecánico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de momento de inercia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cálculo del momento de inercia en cuerpos rígidos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relación entre masa, geometría y momento de inercia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Importancia del momento de inercia en el diseño industrial',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Análisis de estabilidad y balanceo en sistemas rotacionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicaciones en sistemas mecánicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis de poleas y engranajes en movimiento rotacional',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Control de vibraciones en sistemas mecánicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estudio de mecanismos de transmisión de potencia',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Aplicación de la conservación del momento angular',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Optimización de maquinaria industrial considerando la dinámica rotacional',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aceleración angular',
      significado:
        'Es la tasa de cambio de la velocidad angular, con respecto al tiempo.',
    },
    {
      termino: 'Amortiguamiento',
      significado:
        'Es la capacidad de un sistema para disipar energía y reducir la amplitud de las oscilaciones.',
    },
    {
      termino: 'Balanceo',
      significado:
        'Es el proceso de distribuir uniformemente la masa alrededor del eje de rotación, para minimizar las vibraciones y las cargas dinámicas.',
    },
    {
      termino: 'Centro de masa',
      significado:
        'Es el punto geométrico que dinámicamente se comporta como si en él estuviera aplicada la resultante de las fuerzas externas al sistema.',
    },
    {
      termino: 'Colisiones elásticas',
      significado:
        'Son aquellas en las que se conserva tanto el momento lineal como la energía cinética del sistema.',
    },
    {
      termino: 'Colisiones inelásticas',
      significado:
        'Son aquellas en las que se conserva el momento lineal, pero no la energía cinética del sistema.',
    },
    {
      termino: 'Conservación de la energía',
      significado:
        'Es un principio que establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra.',
    },
    {
      termino: 'Conservación del momento angular',
      significado:
        'Es un principio que establece que, en ausencia de momentos externos, el momento angular total de un sistema, permanece constante.',
    },
    {
      termino: 'Conservación del momento lineal',
      significado:
        'Es un principio que establece que, en ausencia de fuerzas externas, el momento lineal total de un sistema, permanece constante.',
    },
    {
      termino: 'Desequilibrio',
      significado:
        'Es la condición en la que la distribución de masa de un cuerpo rotativo no es uniforme, lo que genera fuerzas y momentos que varían con la posición angular.',
    },
    {
      termino: 'Dinámica rotacional',
      significado:
        'Es el estudio del movimiento de rotación de los cuerpos, considerando las fuerzas, momentos y energías involucradas.',
    },
    {
      termino: 'Energía cinética',
      significado:
        'Es la energía asociada al movimiento de un cuerpo, y depende de su masa y velocidad.',
    },
    {
      termino: 'Energía cinética rotacional',
      significado:
        'Es la energía asociada al movimiento de rotación de un cuerpo, y depende de su momento de inercia y velocidad angular.',
    },
    {
      termino: 'Energía potencial',
      significado:
        'Es la energía almacenada en un sistema debido a su posición o configuración.',
    },
    {
      termino: 'Frecuencia natural',
      significado:
        'Es la frecuencia a la que un sistema oscila libremente, después de una perturbación inicial.',
    },
    {
      termino: 'Fuerzas de inercia',
      significado:
        'Son fuerzas aparentes que surgen en sistemas de referencia no inerciales, como los que están en rotación.',
    },
    {
      termino: 'Impulso',
      significado:
        'Es el producto de una fuerza aplicada sobre un cuerpo y el tiempo durante el cual actúa dicha fuerza.',
    },
    {
      termino: 'Momento angular',
      significado:
        'Es una magnitud física que describe la cantidad de movimiento rotacional de un cuerpo, y es el producto del momento de inercia y la velocidad angular.',
    },
    {
      termino: 'Momento de inercia',
      significado:
        'Es una medida de la resistencia de un cuerpo a cambiar su estado de rotación, y depende de la distribución de masa del objeto, con respecto al eje de rotación.',
    },
    {
      termino: 'Momento lineal',
      significado:
        'Es una magnitud física que describe la cantidad de movimiento de un cuerpo, y es el producto de su masa y velocidad.',
    },
    {
      termino: 'Oscilaciones',
      significado:
        'Son movimientos repetitivos alrededor de una posición de equilibrio, que pueden ser causados por fuerzas restauradoras o perturbaciones externas.',
    },
    {
      termino: 'Par (o torque)',
      significado:
        'Es el producto de una fuerza y la distancia perpendicular desde su línea de acción, hasta el eje de rotación.',
    },
    {
      termino: 'Potencia',
      significado:
        'Es la tasa a la cual se realiza trabajo o se transfiere energía.',
    },
    {
      termino: 'Resonancia',
      significado:
        'Es un fenómeno que ocurre cuando la frecuencia de una fuerza externa coincide con la frecuencia natural de un sistema, lo que resulta en una amplificación de las oscilaciones.',
    },
    {
      termino: 'Rigidez',
      significado:
        'Es una medida de la resistencia de un cuerpo a la deformación elástica bajo la acción de una fuerza.',
    },
    {
      termino: 'Velocidad angular',
      significado:
        'Es la tasa de cambio del desplazamiento angular, con respecto al tiempo.',
    },
    {
      termino: 'Vibración',
      significado:
        'Es un movimiento oscilatorio de un cuerpo alrededor de una posición de equilibrio, que puede ser causado por fuerzas externas o desequilibrios internos.',
    },
    {
      termino: 'Trabajo',
      significado:
        'Es el producto de una fuerza y el desplazamiento del punto de aplicación en la dirección de la fuerza.',
    },
  ],
}
