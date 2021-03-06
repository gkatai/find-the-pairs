import * as types from './board-action-types';

function requestTiles() {
  return {
    type: types.REQUEST_TILES
  };
}

function receiveTiles(tiles, tileRandomizationAlgorithm) {
  return {
    type: types.RECEIVE_TILES,
    tiles,
    tileRandomizationAlgorithm
  };
}

function receiveTilesError() {
  return {
    type: types.RECEIVE_TILES_ERROR
  };
}

export function fetchTiles(requestCallback, tileRandomizationAlgorithm) {
  return function(dispatch) {
    dispatch(requestTiles());

    return requestCallback().then(
      tiles => dispatch(receiveTiles(tiles, tileRandomizationAlgorithm)),
      () => dispatch(receiveTilesError())
    );
  };
}

function setSelectedIndex(index) {
  return {
    type: types.SET_SELECTED_INDEX,
    index
  };
}

function flipAndEvaluateTile() {
  return {
    type: types.FLIP_AND_EVALUATE_TILE
  };
}

export function flipTile(index) {
  return function(dispatch) {
    dispatch(setSelectedIndex(index));
    dispatch(flipAndEvaluateTile());
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}
