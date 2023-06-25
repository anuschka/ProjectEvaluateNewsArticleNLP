// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the input text", () => {
    test('returns true for empty input', () => {
        const inputText = '';
        const result = checkForName(inputText);
        expect(result).toBe(true);
      });
      test('returns false for non-empty input', () => {
        const inputText = 'Hello, world!';
        const result = checkForName(inputText);
        expect(result).toBe(false);
      });  
      
    });