import * as _ from "lodash";
import { VariablenameConvertorTypeEnum } from "./VariableNameConvertorTypeEnum";

/**
 * Varaible Name Convertor Unitity
 */
var VariableNameConvertorUtil = {

    convert(input: string, convertType: string): string{
        var output: string = "";
        if (convertType == VariablenameConvertorTypeEnum.LOWER_CAMEL){
            output = this.covertToLowerCamel(input);
        }else if (convertType == VariablenameConvertorTypeEnum.UPPER_CAMEL){
            output = this.covertToUpperCamel(input);
        }else if (convertType == VariablenameConvertorTypeEnum.UNDERSCORE){
            output = this.convertToUnderscore(input);
        }
        return output;
    },
    
    covertToUpperCamel(input: string): string{
        var output = "";
        var lines = input.split("\n");
        for (var i=0; i<lines.length; i++){
            var line = lines[i];
            var words = line.split(" ");
            for (var j=0; j<words.length; j++){
                var word = words[j];
                output += _.upperFirst(_.camelCase(word)) + " ";
            }
            output =  output.trim();
            output += "\n";
        }
        return output;
    },

    covertToLowerCamel(input: string): string{
        var output = "";
        var lines = input.split("\n");
        for (var i=0; i<lines.length; i++){
            var line = lines[i];
            var words = line.split(" ");
            for (var j=0; j<words.length; j++){
                var word = words[j];
                output += _.camelCase(word) + " ";

            }
            output = output.trim();
            output += "\n";
        }
        return output;
    },

    convertToUnderscore(input: string): string{
        let output: string = "";
        var lines = input.split("\n");
        for (var i=0; i<lines.length; i++){
            var line = lines[i];
            var words = line.split(" ");
            for (var j=0; j<words.length; j++){
                var word = words[j];
                output += _.snakeCase(word) + " ";
            }
            output = output.trim();
            output += "\n";
        }
        return _.toUpper(output);
    }

     
};

export {VariableNameConvertorUtil};