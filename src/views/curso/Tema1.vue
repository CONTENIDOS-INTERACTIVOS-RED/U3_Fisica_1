<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Principios del momento lineal y conservación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En esta sección, se sumergirá en los fundamentos del momento lineal y su conservación. Comenzará por comprender la definición del momento lineal como el producto de la masa y la velocidad de un cuerpo, y cómo esta cantidad vectorial describe el estado de movimiento de un objeto. A continuación, explorará el principio de conservación del momento lineal, que establece que, en ausencia de fuerzas externas, el momento lineal total de un sistema, permanece constante. Luego, aprenderá sobre la relación entre el impulso y el cambio de momento y cómo, las fuerzas aplicadas durante un intervalo de tiempo, pueden alterar el estado de movimiento de un cuerpo. Además, estudiará las colisiones elásticas e inelásticas, y cómo la #[b conservación del momento lineal], permite analizar el comportamiento de los cuerpos durante estos eventos. Por último, descubrirá las aplicaciones de estos principios en procesos industriales, como el transporte de materiales, los procesos de impacto y molienda, y el diseño de sistemas de seguridad.
            
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición de cantidad de movimiento (momento lineal)

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")            
      .col-lg-8
        p(data-aos="fade-down")  El momento lineal, también conocido como cantidad de movimiento, es una magnitud física que describe el movimiento de un cuerpo en función de su masa y velocidad. Se define como el producto de la masa del cuerpo por su velocidad en un instante determinado. Matemáticamente, se expresa como:      
        .bg-color-3.p-4.mb-4(data-aos="fade-left")

          h5.text-center(data-aos="fade-down") p⃗ = mv⃗
          p(data-aos="fade-down") donde #[b p⃗]  es el vector de momento lineal, 
          p(data-aos="fade-down") #[b m] es la masa del cuerpo y,
          p.mb-0(data-aos="fade-down") #[b v⃗]  es el vector de velocidad (Lifante et al., 2015).                       

        p(data-aos="fade-down") El momento lineal es una magnitud vectorial, lo que significa que posee, tanto magnitud como dirección. Su unidad en el Sistema Internacional (SI), es el kilogramo por metro por segundo (kg•m/s). Es importante destacar que el momento lineal se conserva en sistemas aislados, es decir, en ausencia de fuerzas externas (Irodov, 2010). 

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/10.png")
            .col-lg
              p.mb-0 En el contexto de la ingeniería industrial, el concepto de momento lineal es fundamental para comprender y analizar el movimiento de objetos en procesos de fabricación, transporte y manipulación de materiales. 

        p(data-aos="fade-down") Por ejemplo, en el diseño de sistemas de transporte de materiales, como cintas transportadoras, es necesario considerar la cantidad de movimiento de los objetos transportados, para determinar la potencia requerida y las fuerzas de fricción involucradas.

        h5(data-aos="fade-down") Ejercicios  
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", data-aos="zoom-in")  

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png")            
            .col-lg-7
              h5 1. Una pelota de tenis de 0,057 kg se mueve a una velocidad de 25 m/s. Calcular su momento lineal.

              h5 Solución 
              p #[b Datos:] m = 0,057 kg, v = 25 m/s
              p #[b Fórmula:] p⃗ = mv⃗ 
              p #[b Reemplazando:] p⃗ = 0,057 kg • 25 m/s 
              p #[b Resultado:] p⃗ = 1,425 kg⋅m/s              

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png")            
            .col-lg-7
              p 2. Un automóvil de 1200 kg se desplaza a una velocidad de 20 m/s hacia el este. Determinar su momento lineal. 

              h5 Solución 
              p #[b Datos:] m = 1200 kg, v⃗, = 20 m/s (este). 
              p #[b Fórmula:] p⃗ = mv⃗ 
              p #[b Reemplazando:] p⃗ = 1200 kg • 20 m/s (este). 
              p #[b Resultado:] p⃗ = 24000 kg•m/s (este).              

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/14.png")            
            .col-lg-7
              p 3. Un proyectil de 0,01 kg es disparado con una velocidad de 800 m/s en un ángulo de 30° con respecto a la horizontal. Calcular su momento lineal.

              h5 Solución 
              p #[b Datos:] m = 0,01 kg, v = 800 m/s, θ = 30°
              p #[b Fórmula:] p⃗ = mv⃗ 
              p #[b Componentes de v⃗ :]
              p vx = v • cos θ = 800 m/s • cos 30° = 692,82 m/s 
              p vy = v • sin θ = 800 m/s • sin 30° = 400 m/s 
              p #[b Componentes de p⃗ :] 
              p px = m vx = 0,01 kg • 692,82 m/s = 6,93 kg⋅m/s 
              p py = m vy = 0,01 kg • 400 m/s = 4 kg⋅m/s 
              p #[b Resultado:] p⃗ = (6,93 i ̂ + 4 j ̂) kg⋅m/s

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Principio de conservación del momento lineal

    p(data-aos="fade-down") El principio de conservación del momento lineal es una herramienta fundamental en el estudio del movimiento de sistemas en interacción, especialmente en contextos donde las fuerzas externas son despreciables o nulas.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Principio de conservación del momento lineal 
            p.mb-4(data-aos="fade-right") En el PDF Principio de conservación del momento lineal, se abordan sus fundamentos teóricos, se explica su relación con las leyes de Newton y se presentan ejemplos prácticos orientados a la ingeniería, como el análisis de colisiones entre cuerpos y la evaluación de impactos, facilitando la comprensión de su aplicación en el diseño de sistemas mecánicos y de seguridad.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principio de conservación del momento lineal 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/15.png', alt='') 

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Impulso y cambio de momento 
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          p(data-aos="fade-down") El impulso se define como el producto de una fuerza aplicada sobre un cuerpo y el tiempo durante el cual actúa dicha fuerza. Matemáticamente, se expresa como
          h5.text-center(data-aos="fade-down") J ⃗= F ⃗∆t

          p(data-aos="fade-down") donde J ⃗ es el vector de impulso,
          p(data-aos="fade-down") F ⃗ es el vector de fuerza y, ∆t es el intervalo de tiempo durante el cual actúa la fuerza (Lifante et al., 2015).

          p(data-aos="fade-down") El impulso está directamente relacionado con el cambio de momento lineal de un cuerpo. Según la segunda Ley de Newton, la fuerza neta aplicada sobre un cuerpo es igual a la tasa de cambio de su momento lineal, es decir,

          figure
            img.img-a.img-t(src="@/assets/curso/temas/17.svg", data-aos="zoom-in")  

          p(data-aos="fade-down") Al integrar esta ecuación con respecto al tiempo, se obtiene que el impulso es igual al cambio de momento lineal:

          h5.text-center(data-aos="fade-down") J ⃗= ∆p ⃗=m∆v ⃗

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En la ingeniería industrial, el concepto de impulso y cambio de momento es fundamental para el diseño y análisis de sistemas de control de movimiento, como robots industriales y máquinas de ensamblaje. Por ejemplo, al programar la trayectoria de un brazo robótico, es necesario considerar las fuerzas y los tiempos de aplicación para lograr los cambios de velocidad deseados y evitar daños en los componentes mecánicos.

        h5(data-aos="fade-down") Ejercicios resueltos 

      .col-lg-4 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/18.png")            
            .col-lg-7
              p Una fuerza de 500 N actúa sobre un objeto de 10 kg durante 0,5 segundos. Calcular el cambio de velocidad del objeto si inicialmente se encontraba en reposo.

              h5 Solución

              p #[b Datos:] F = 500 N, m = 10 kg, ∆t = 0,5 s, vi = 0 m/s
              p #[b Fórmula:] J ⃗= ∆p ⃗=m∆v ⃗
              p #[b Reemplazando:] 500 • 0,5 = 10 • (vf – 0)
              p 250 = 10vf
              p Vf = 250/10 = 25 m/s
              p #[b Resultado:] el cambio de velocidad del objeto es de 25 m/s.                      

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/19.png")            
            .col-lg-7
              p Un martillo de 2 kg que se mueve a una velocidad de 5 m/s golpea un clavo y se detiene en 0,01 segundos. Determinar la fuerza promedio ejercida por el martillo sobre el clavo.

              h5 Solución 

              p #[b Datos:] m = 2 kg, vi = 5 m/s, vf = 0 m/s, ∆t = 0,01 s 
              p #[b Fórmula:] J ⃗= ∆p ⃗=m∆v ⃗
              p #[b Reemplazando:] F = 0,01 = 2 (0 – 5)
              p F • 0,01 = –10
              p F = –10/0,01 = –1000N
              p #[b Resultado:] la fuerza promedio ejercida por el martillo sobre el clavo es de 1000 N en dirección opuesta al movimiento inicial.                 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/20.png")            
            .col-lg-7
              p Un automóvil de 1200 kg que se desplaza a 20 m/s frena y se detiene en 5 segundos. Calcular el impulso y la fuerza promedio de frenado.

              h5 Solución
              figure
                img.img-a.img-t(src="@/assets/curso/temas/21.svg")                                                          
              p #[b Resultado:] el impulso de frenado es de 24000 kg⋅m/s en dirección opuesta al movimiento, y la fuerza promedio de frenado es de 4800 N en la misma dirección.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Colisiones elásticas e inelásticas

    p(data-aos="fade-down") El estudio de las colisiones es esencial para comprender cómo interactúan los cuerpos en movimiento y cómo se conservan o transforman las magnitudes físicas, durante esos encuentros.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Colisiones elásticas e inelásticas 
            p.mb-4(data-aos="fade-right") En el PDF Colisiones elásticas e inelásticas, se explica la diferencia entre ambos tipos de colisiones, destacando sus principios físicos fundamentales y su aplicación práctica en contextos como la seguridad industrial y el diseño de sistemas de absorción de impactos, a través de ejercicios resueltos que permiten afianzar los conceptos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Colisiones elásticas e inelásticas 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/23.png', alt='')  

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Aplicaciones en procesos industriales

    p(data-aos="fade-down") Los principios del momento lineal y su conservación, tienen numerosas aplicaciones en los procesos industriales, especialmente en el diseño y optimización de sistemas mecánicos. Algunos ejemplos incluyen:

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-primario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/24.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="24.7%" y="33.4%" numero="+")
                  h5 Transporte de materiales 
                  p El análisis del momento lineal es fundamental para el diseño de sistemas del transporte de materiales, como cintas transportadoras, tornillos sin fin y elevadores de cangilones. Al considerar la cantidad de movimiento de los materiales transportados, se pueden determinar las fuerzas y potencias requeridas para mantener un flujo constante y eficiente (Pérez Oviedo, 2023). 
                .bg-color-white.box-shadow.p-3(x="31.1%" y="11%" numero="+")
                  h5 Procesos de impacto y molienda 
                  p En industrias como la minería y la construcción, los procesos de impacto y molienda, son esenciales para la reducción de tamaño de los materiales. El estudio de las colisiones y la transferencia del momento lineal permite optimizar el diseño de equipos como trituradoras, molinos y machacadoras, maximizando la eficiencia energética y la calidad del producto final (Lifante et al., 2015). 
                .bg-color-white.box-shadow.p-3(x="64.1%" y="11%" numero="+")
                  h5 Sistemas de control de movimiento 
                  p En la automatización industrial, los sistemas de control de movimiento, como robots y máquinas de ensamblaje, requieren un preciso control de las fuerzas y velocidades de los componentes móviles. La aplicación de los conceptos de impulso y cambio del momento lineal permite programar trayectorias suaves y precisas, evitando sobrecargas y garantizando la calidad de los productos (Irodov, 2010). 
                .bg-color-white.box-shadow.p-3(x="70.4%" y="33.5%" numero="+")
                  h5 Diseño de sistemas de seguridad 
                  p La comprensión de las colisiones elásticas e inelásticas es esencial para el diseño de sistemas de seguridad en la industria, como barreras de contención, estructuras de absorción de impactos y dispositivos de protección personal. Al optimizar la disipación de energía durante las colisiones, se pueden minimizar los riesgos y garantizar la integridad de las personas y los equipos (Bujovtsev, 2010). 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5(data-aos="fade-down") Ejercicio resuelto
          p(data-aos="fade-down") Una cinta transportadora de 20 m de longitud desplaza 500 kg de material granular por minuto con una velocidad constante de 1 m/s. Si el material cae desde una altura de 1,5 m al final de la cinta, calcular la potencia requerida por el motor de accionamiento, despreciando las pérdidas por fricción.
          h5(data-aos="fade-down") Solución 
          p.ps-4.mb-0(data-aos="fade-down") #[b Datos:] Longitud de la cinta L = 20 m 
          p.ps-4.mb-0(data-aos="fade-down") Masa transportada por minuto m = 500 kg/min 
          p.ps-4.mb-0(data-aos="fade-down") Velocidad de la cinta v = 1 m/s 
          p.ps-4.mb-0(data-aos="fade-down") Altura desde la cual cae el material h = 1,5 m 
          p.ps-4.mb-0(data-aos="fade-down") Aceleración gravitacional: g = 9.81 m/s2  

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Convertir el flujo másico en kg/s 
            figure
              img.img-t(src="@/assets/curso/temas/27.svg")              
            p m ̇=8.33 kg/s            
          .div(titulo="Paso 2")
            p Calcular la potencia requerida para mantener el movimiento horizontal de la cinta.  
            p P#[sub h]= m ̇va = 8.33 • 1 • 0 = 0 W             
          .div(titulo="Paso 3")
            p Calcular la potencia requerida para elevar el material granular.
            p P_v=m ̇gh
            p #[b Sustituyendo valores:]  Pv = (8.33 kg/s)(9.81 m/s2)(1.5 m)
            p #[b Realizando el cálculo:]  Pv = 8.33 • 9.81 • 1.5
            p Pv = 122.55 W              
          .div(titulo="Paso 4")
            p Sumar las potencias horizontal y vertical para obtener la potencia total requerida. Como la potencia horizontal es cero, la potencia total es simplemente la potencia vertical. 
            p P#[sub total] = Pv = 122.55 W ≈ 123 W
            p #[b Resultado:] la potencia requerida por el motor de accionamiento de la cinta transportadora es de aproximadamente 123 W, despreciando las pérdidas por fricción.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", alt="") 
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1" target="_blank" rel="noopener noreferrer") Bujovtsev, B. B. (2010). Problemas seleccionados de la física elemental. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1" target="_blank" rel="noopener noreferrer") Götze, R. (2010). Elementos de física matemática. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1" target="_blank" rel="noopener noreferrer") Irodov, I. E. (2010). Problemas de física general. Tomo I. Instituto Politécnico Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1" target="_blank" rel="noopener noreferrer") Lifante, G. Bravo, D. & Jaque, D. (2015). Problemas resueltos de fundamentos de física (I). Editorial Universidad Autónoma de Madrid.                                       

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://es.khanacademy.org/science/physics/linear-momentum" target="_blank" rel="noopener noreferrer") Khan Academy. (s.f.). Conservación del momento lineal. Khan Academy.
            p Esta página ofrece explicaciones claras, videos y ejercicios interactivos sobre el momento lineal y su conservación, ideal para revisión básica.  
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://pengayaan.com/blog/law-of-conservation-of-momentum.html" target="_blank" rel="noopener noreferrer") Pengayaan.com. (2025). Understanding the Law of Conservation of Momentum: A Comprehensive Exploration. 
            p Explica de manera clara y con ejemplos visuales cómo se conserva el momento lineal en colisiones y otros sistemas cerrados. Incluye simulaciones sencillas.    
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://teachers.institute/pedagogy-of-science/conservation-of-momentum-principle/" target="_blank" rel="noopener noreferrer") Teachers Institute. (2024). The Principle of Conservation of Momentum Explained. 
            p Este blog educativo proporciona una introducción accesible al principio de conservación del momento, dirigido a estudiantes de nivel básico-intermedio. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/GyP_UwfM8hc" target="_blank" rel="noopener noreferrer") Espinoza, M. (2021). Dinámica Traslacional y Rotacional - Cálculo de tensión y aceleración - Momento de Inercia - Polea.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/a96XsQd0m8s" target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2018). Conservación del momentum lineal (Conceptos y Ejercicio).   

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer") PhET Interactive Simulations. (2023). Collision Lab [simulación interactiva]. University of Colorado Boulder. 
            p #[b Descripción.] Laboratorio virtual que permite explorar la conservación del momento lineal en colisiones elásticas e inelásticas.  
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.compadre.org/osp" target="_blank" rel="noopener noreferrer") Open Source Physics. (2023). Momentum Conservation Applet [software]. Open Source Physics Project. 
            p #[b Descripción.] Simulador en línea que facilita el análisis de sistemas de partículas y la conservación del momento.                                    

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
