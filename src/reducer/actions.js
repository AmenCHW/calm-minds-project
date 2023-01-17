import { chanage_paragraph, chanage_typeBtn } from './actionTypes';

export const handleParagraphChange = (payload) => ({
  type: chanage_paragraph,
  payload,
});

export const handleBtnChange = (payload) => ({
  type: chanage_typeBtn,
  payload,
});
