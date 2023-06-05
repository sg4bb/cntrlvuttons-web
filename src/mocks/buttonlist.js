export const buttonlist = [
  {
    name: "HorizontalRotate",
    class: "btnHorizontalRotate",
    snippet: `
    .btnHorizontalRotate {
        background: transparent;
        perspective: 30rem;
      }
      
      .btnHorizontalRotate::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(52,211,153,1) 0%, rgba(3,105,161,1) 100%);
        z-index: -1;
        transition: background 3s;
      }
      
      .btnHorizontalRotate:hover::before {
        animation: rotate 1s;
        transition: all .5s;
      }
      
      @keyframes rotate {
        0% {
          transform: rotateY(180deg);
        }
      
        100% {
          transform: rotateY(360deg);
        }
      }
    `,
  },
  {
    name: "Jelly",
    class: "btnJelly",
    snippet: `
    btnJelly {
      transition: 0.5s;
      background: linear-gradient(90deg, rgba(52,211,153,1) 0%, rgba(3,105,161,1) 100%);
      box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
    }
    
    btnJelly:hover {
      animation: a 0.5s 1 linear;
    }
    
    @keyframes a {
      0% {
        transform: scale(0.7, 1.3);
      }
    
      25% {
        transform: scale(1.3, 0.7);
      }
    
      50% {
        transform: scale(0.7, 1.3);
      }
    
      75% {
        transform: scale(1.3, 0.7);
      }
    
      100% {
        transform: scale(1, 1);
      }
    }
    `,
  },
  ,
  {
    name: "Crush",
    class: "btnCrush",
    snippet: `
        .btnCrush {
          border: none;
          width: 140px;
          height: 50px;
          color: #fff;
          z-index: 1;
          display: grid;
          background: #000;
          position: relative;
        }

        .btnCrush::after {
          position: absolute;
          content: "";
          width: 100%;
          z-index: -1;
          height: 10%;
          bottom: 0;
          clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          background: linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(59,130,246,1) 100%);
          transition: 0.2s ease;
         }
         
         .btnCrush::before {
          position: absolute;
          content: "";
         /*   bottom: 80%; */
          transform: rotate(180deg);
          width: 100%;
          height: 10%;
          transition: 0.2s ease;
         /*   bottom:; */
          z-index: -1;
          clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          background: linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(59,130,246,1) 100%);
         }
         
         .btnCrush:hover::after {
          clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          height: 80%;
         }
         
         .btnCrush:hover::before {
          clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          height: 80%;
         }
      `,
  },
  ,
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
  {
    name: "VerticalRotate",
    class: "btnHorizontalRotate",
    snippet: `
        .btnVerticalRotate {
          ayuda es DEMASIADO SEXOOoOoOo2
        }
      `,
  },
];
