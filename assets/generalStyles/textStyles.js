import { textColor } from "../colors";

export {
    applicationTitle,
    pokemonName,
    filterTitle,
    description,
    pokemonNumber,
    pokemonType,
};

/* 
-- How to import in working file for readability --
import * as textStyles from "[Path to this file]"

-- How to use in working file --
<Text style={ textStyles.pokemonName }>Here is a text</Text>

-- How to change color or add styles with obj spread syntax --
<Text style={{ ...textStyles.pokemonName, color: "new color" }}>Here is a text</Text>
*/

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
