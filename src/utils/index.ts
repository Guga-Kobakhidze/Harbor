import { SELECTED_LANGUAGE } from "../config";
import { getLocalStorageItem, setLocalStorageItem } from "./storage";

export const setSelectedLanguage = (selectedLang: string) => {
  setLocalStorageItem(SELECTED_LANGUAGE, { selectedLang });
};

export const getSelectedLanguage = () =>
  getLocalStorageItem<{ selectedLang: string }>(SELECTED_LANGUAGE);
