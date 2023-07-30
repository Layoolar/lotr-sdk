import { Base } from "./base";
import { Movies } from "./movies";
import { Quotes } from "./quotes";
import { applyMixins } from "./utils";

/**
 * LordOfTheRingsSDK is the main SDK class that combines the functionalities of Movies and Quotes.
 * It extends the Base class and applies mixins to include the methods from Movies and Quotes.
 */
class LordOfTheRingsSDK extends Base {}

// Extend the interface of LordOfTheRingsSDK to include Movies and Quotes interfaces
interface LordOfTheRingsSDK extends Movies, Quotes {}

// Apply mixins to include the methods from Movies and Quotes in LordOfTheRingsSDK
applyMixins(LordOfTheRingsSDK, [Quotes, Movies]);

export default LordOfTheRingsSDK;
