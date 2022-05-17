import { textColor } from "../colors";

export {
    applicationTitle,
    pokemonName,
    filterTitle,
    description,
    pokemonNumber,
    pokemonType,
};

const fontFamilyInBold = "SFProDisplay-Bold";
const fontFamilyInRegular = "SFProDisplay-Regular";
const fontFamilyInMedium = "SFProDisplay-Medium";

const applicationTitle = {
    fontFamily: fontFamilyInBold,
    fontSize: 32,
    color: textColor.black,
};

const pokemonName = {
    fontFamily: fontFamilyInBold,
    fontSize: 26,
    color: textColor.black,
};

const filterTitle = {
    fontFamily: fontFamilyInBold,
    fontSize: 16,
    color: textColor.black,
};

const description = {
    fontFamily: fontFamilyInRegular,
    fontSize: 16,
    color: textColor.black,
};

const pokemonNumber = {
    fontFamily: fontFamilyInBold,
    fontSize: 12,
    color: textColor.black,
};

const pokemonType = {
    fontFamily: fontFamilyInMedium,
    fontSize: 12,
    color: textColor.black,
};
