<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Momento de inercia y su impacto en el diseño mecánico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En esta sección, se adentrará en el concepto de momento de inercia y su importancia en el diseño mecánico. Comenzará por entender la definición del momento de inercia como una medida de la resistencia de un cuerpo, a cambiar su estado de rotación, y cómo esta cantidad escalar depende de la distribución de masa del objeto. Luego, aprenderá a calcular el momento de inercia para cuerpos rígidos con geometrías simples, como cilindros, esferas y varillas, utilizando fórmulas específicas. A continuación, explorará la relación entre la masa, la geometría y el momento de inercia, y cómo la distribución de masa afecta a la dinámica rotacional de un cuerpo. Además, descubrirá la importancia del momento de inercia en el diseño industrial, y cómo su optimización puede mejorar la eficiencia, la estabilidad y la vida útil de los componentes mecánicos. Por último, aprenderá sobre el análisis de estabilidad y balanceo en sistemas rotacionales, y cómo el momento de inercia influye en la respuesta de un sistema a perturbaciones externas.
            
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Definición de momento de inercia

    p(data-aos="fade-down") El momento de inercia es un concepto fundamental en la dinámica rotacional, ya que permite cuantificar la resistencia de un cuerpo a modificar su estado de giro.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/29.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Definición de momento de inercia
            p.mb-4(data-aos="fade-right") En el PDF Definición de momento de inercia, se expone su significado físico, su expresión matemática y su aplicación práctica mediante ejercicios resueltos que contemplan cuerpos con diferentes distribuciones de masa, facilitando así la comprensión de su relevancia en el análisis de sistemas mecánicos y en el diseño de componentes rotacionales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición de momento de inercia

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Cálculo del momento de inercia en cuerpos rígidos
    .row.mb-5     
      .col.order-md-2.order-lg-1     
        p(data-aos="fade-down") El cálculo del momento de inercia en cuerpos rígidos, se basa en la distribución de la masa y la geometría del objeto. Para cuerpos con formas regulares y distribución de masa uniforme, existen fórmulas específicas que facilitan el cálculo. 

        p(data-aos="fade-down") Algunos ejemplos comunes incluyen (Lifante et al., 2015):

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", data-aos="zoom-in")  

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/31.png")            
            .col-lg-7
              h5 Cilindro sólido (eje central):
              figure
                img.img-t(src="@/assets/curso/temas/36.svg")

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/32.png")            
            .col-lg-7
              h5 Cilindro hueco (eje central), con radio externo R y radio interno r: 
              figure
                img.img-t(src="@/assets/curso/temas/37.svg")
              p donde #[b R] es el radio externo y r es el radio interno.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/33.png")            
            .col-lg-7
              h5 Esfera sólida (eje diametral): 
              figure
                img.img-t(src="@/assets/curso/temas/38.svg")     

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/34.png")            
            .col-lg-7
              h5 Varilla delgada (eje perpendicular en el extremo, longitud L): 
              figure
                img.img-t(src="@/assets/curso/temas/39.svg")   
              p donde #[b L] es la longitud de la varilla.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/35.png")            
            .col-lg-7
              h5 Varilla delgada (eje perpendicular en el centro, longitud L): 
              figure
                img.img-t(src="@/assets/curso/temas/40.svg")
              p donde #[b L] es la longitud de la varilla.

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/41.svg")
            .col-lg
              p.mb-0 Para cuerpos con formas irregulares o distribución de masa no uniforme, el cálculo del momento de inercia puede requerir la integración sobre la distribución de masa. En estos casos, se puede discretizar el cuerpo en elementos más pequeños, calcular el momento de inercia de cada elemento y luego sumar los momentos de inercia individuales (Irodov, 2010).  

        p(data-aos="fade-down") En la práctica, los software de diseño asistido por computadora (CAD) y los programas de análisis de elementos finitos (FEA) pueden calcular automáticamente los momentos de inercia de cuerpos complejos a partir de sus modelos geométricos y propiedades de material. Estos datos son fundamentales para el análisis dinámico y la optimización de sistemas mecánicos (Pérez Oviedo, 2023). 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in")

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/43.png', alt='')            
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ejercicios resueltos
            p.mb-4(data-aos="fade-right") En el PDF Ejercicios resueltos, se presentan ejemplos aplicados que permiten comprender cómo emplear integrales y fórmulas específicas para determinar el momento de inercia de cilindros, varillas y discos con diferentes densidades, facilitando así el análisis dinámico de sistemas rotacionales en contextos reales de la ingeniería y la física.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios resueltos

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Relación entre masa, geometría y momento de inercia

    p(data-aos="fade-down") La comprensión de la relación entre masa, geometría y momento de inercia es esencial para el diseño y análisis de sistemas rotacionales.
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Relación entre masa, geometría y momento de inercia
            p.mb-4(data-aos="fade-right") En el PDF Relación entre masa, geometría y momento de inercia, se abordan los principios fundamentales que explican cómo la distribución de la masa respecto al eje de rotación influye en la resistencia al cambio del movimiento angular, complementados con ejemplos prácticos que permiten optimizar estructuras como volantes de inercia en aplicaciones industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación entre masa, geometría y momento de inercia
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/44.png', alt='') 

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Importancia del momento de inercia en el diseño industrial

    p(data-aos="fade-down") El momento de inercia es un parámetro crítico en el diseño industrial, dado que determina la dinámica rotacional de los componentes y sistemas mecánicos. Su importancia radica en las siguientes áreas (Lifante et al., 2015):


    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Estabilidad y control")
            p En sistemas que requieren estabilidad rotacional, como giroscopios y volantes de inercia, un alto momento de inercia ayuda a mantener la orientación y resistir perturbaciones externas. Por otro lado, en sistemas que requieren cambios rápidos en la velocidad angular, como robots y actuadores, un bajo momento de inercia permite una respuesta más rápida y un control más preciso.
          .div(titulo="Eficiencia energética")
            p En sistemas con movimiento rotacional, la energía cinética está directamente relacionada con el momento de inercia:
            figure
              img.img-a.img-t(src="@/assets/curso/temas/48.svg", alt="")   
            p Para una velocidad angular dada, un menor momento de inercia implica una menor energía cinética y, por lo tanto, menores requisitos de potencia para acelerar o desacelerar el sistema. Esto es especialmente importante en aplicaciones donde la eficiencia energética es crítica, como en vehículos eléctricos y máquinas herramienta (Pérez Oviedo, 2023).            
          .div(titulo="Vibraciones y resonancia")
            p El momento de inercia influye en las frecuencias naturales de vibración de los sistemas mecánicos. Una distribución adecuada de la masa y un diseño que minimice el momento de inercia pueden ayudar a evitar la resonancia y reducir las vibraciones no deseadas. Esto es crucial en aplicaciones donde la precisión y la calidad superficial son importantes, como en el mecanizado de alta velocidad y la impresión 3D (Irodov, 2010). 
          .div(titulo="Selección de materiales")
            p La selección de materiales en el diseño industrial, normalmente implica un compromiso entre resistencia, rigidez y densidad. Para aplicaciones donde se requiere un alto momento de inercia, como en volantes de inercia y discos de freno, se pueden utilizar materiales con alta densidad, como el acero o el tungsteno. Por otro lado, para aplicaciones donde se busca minimizar el momento de inercia, como en robots y vehículos aéreos no tripulados (UAV), se pueden emplear materiales compuestos de baja densidad, como la fibra de carbono o el aluminio (Bujovtsev, 2010).

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicio resuelto 2
            p.mb-4(data-aos="fade-right") En el PDF Ejercicio resuelto 2, se presenta un caso práctico en el que se analiza cómo determinar el radio óptimo de un disco para minimizar el par requerido por un motor eléctrico, partiendo de condiciones específicas de masa, tiempo y velocidad angular. Este ejemplo permite comprender cómo la adecuada elección de parámetros físicos, influye directamente en la eficiencia energética de dispositivos industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicio resuelto 2
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/46.png', alt='')  

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Análisis de estabilidad y balanceo en sistemas rotacionales

    p(data-aos="fade-down") El análisis de estabilidad y balanceo en sistemas rotacionales, es clave para optimizar el rendimiento y prolongar la vida útil de maquinaria en contextos industriales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/47.png', alt='')            
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis de estabilidad y balanceo en sistemas rotacionales
            p.mb-4(data-aos="fade-right") En el PDF Análisis de estabilidad y balanceo en sistemas rotacionales, se expone cómo la distribución de la masa, el momento de inercia y el diseño geométrico, influyen en el comportamiento dinámico de componentes giratorios, además de presentarse un ejercicio práctico que ilustra el cálculo de fuerzas centrífugas y estrategias de corrección, mediante balanceo. Este enfoque facilita la comprensión y aplicación de técnicas que permiten minimizar vibraciones, mejorar la eficiencia y garantizar la seguridad operativa de los equipos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de estabilidad y balanceo en sistemas rotacionales

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
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1" target="_blank" rel="noopener noreferrer") Pérez Oviedo, W. (2023). De Newton a Nash: la influencia de la física y la matemática en la economía. FLACSO.                                                      

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html " target="_blank" rel="noopener noreferrer") HyperPhysics. (s.f.). Moment of Inertia. Georgia State University. 
            p Una página didáctica que explora el momento de inercia con diagramas y fórmulas, incluyendo su aplicación en sistemas mecánicos.
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://dogrulargrup.com.tr/en/blogs/moment-of-inertia-and-its-importance-in-engineering-designs" target="_blank" rel="noopener noreferrer") Doğrular Group. (2022). Moment of Inertia and its Importance in Engineering Designs. 
            p Describe cómo el momento de inercia influye en el diseño de piezas mecánicas, especialmente en aplicaciones estructurales e industriales. 
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://thestructuralblog.com/moment-of-inertia/" target="_blank" rel="noopener noreferrer") The Structural Blog. (s.f.). Area Moment of Inertia. 
            p Explica con diagramas el cálculo del momento de inercia en secciones transversales de estructuras, ideal para ingeniería mecánica y civil. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/enbPHjVC-4k" target="_blank" rel="noopener noreferrer") FÍSICA CON FAUSTINO. (2017). Física I, Momento de inercia.

            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.algodoo.com" target="_blank" rel="noopener noreferrer") Algodoo. (2023). Algodoo Physics Simulation [Software]. Algoryx Simulation AB.  
            p #[b Descripción.] Herramienta educativa basada en física que permite simular el momento de inercia en distintos cuerpos y su efecto en el movimiento rotacional.
            p.d-flex.mt-4.mb-0
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.simscale.com" target="_blank" rel="noopener noreferrer") SimScale. (2023). Mechanical Engineering Simulations [Software de simulación]. SimScale GmbH. 
            p #[b Descripción.] Plataforma en la nube para simulaciones de diseño mecánico que permite analizar cómo el momento de inercia influye en estructuras y máquinas.               

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
