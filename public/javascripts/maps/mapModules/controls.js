import { Control } from 'ol/control';

export const selectYourMap = new Control({
  element: document.getElementById('layer-select'),
  target: document.getElementById('select-map')
});

export const selectYourDrawType = new Control({
  element: document.getElementById('draw-type'),
  target: document.getElementById('draw-geometry')
});

export const addNewControl = (elementID, targetID) => {
  return new Control({
    element: document.getElementById(elementID),
    target: document.getElementById(targetID)
  });
};
