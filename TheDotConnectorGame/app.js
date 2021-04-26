// Game paramter 
const HEIGHT = 750;
const GRID_SIZE = 10;
const FPS = 60;
const DELAY_END = 2;


// Derive Dimensions

const WIDTH = HEIGHT * 0.9;
const CELL =  WIDTH / (GRID_SIZE + 2);// cell size + margin left and right
const STROKE = cell /12;
const DOT = STROKE;
const MARGIN = HEIGHT - (GRID_SIZE + 1) * CELL;

// colors
const COLOR_BOARD = '#0f3057';
const COLOR_BORDER = 'yellow';
const COLOR_DOT = "#white";
const COLOR_AI ='orange';
const COLOR_AI_LIGHT = 'rgba(255,166,0,0.3)'
const COLOR_PLAYER  ='lawngreen';
const COLOR_AI_LIGHT = 'rgba(126,252,0,0.3)'
const COLOR_TIE = 'white'