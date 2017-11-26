/**
 * Prepared Statement Combiner Helper 
 */
var PreparedStatementCombinerUtil = {

    /**
     * Get Bind Value List
     * 
     * @param bindValues
     */
    getBindValueList: function(bindValues){
        var bindList = [];
        var bindValueArr = bindValues.split(",");
        for(var i=0;i <bindValueArr.length; i++){
            var bindValue = bindValueArr[i];
            var bind = {
                str: null,
                type: null
            }
            if (bindValue.split("(").length > 1){
                var bindValueStr = bindValue.split("(")[0];
                var bindValueType = bindValue.split("(")[1].replace(")", "");
                bind = {
                    str: bindValueStr.trim(),
                    type: bindValueType
                };
                bindList.push(bind);
            }else {
                bindList.push(bind);
            }
        }
        return bindList;
    },

    /**
     * 
     * @param str
     * @param replacement
     * @param index
     * @param length
     */
    replaceAt: function(str, replacement, index, length){
        var prefix = str.substring(0, index);
        var subfix = str.substring(index+length);
        return prefix + replacement + subfix;
    },

    /**
     * @param str
     * @param target
     * @param replacement
     */
    replace: function(str, target, replacement){
        var index = str.indexOf(target);
        return this.replaceAt(str, replacement, index, target.length);
    },

    /**
     * Get Bind Sql 
     * 
     * @param preparedStatement
     * @param bindValues
     */
    getCombinedSql: function(preparedStatement: string, bindValues){
        var bindValueList = this.getBindValueList(bindValues);
        var bindSql = preparedStatement;
        for (var i =0; i<bindValueList.length; i++){
            var bindValue = bindValueList[i];
            if (bindValue.type == 'String'){
                bindSql = this.replace(bindSql, "?", "'" + bindValue.str + "'");
            } else if (bindValue.type == 'Timestamp'){
                bindSql = this.replace(bindSql, "?", "TO_DATE('" + bindValue.str + "', 'YYYY-MM-DD HH24:MI:SS.SSSSS')");                
            }else {
                bindSql = this.replace(bindSql, "?", bindValue.str);    
            }
        }
        if (bindSql.includes("?")){
            bindSql = bindSql.replace(/\?/g, "null");
        }
        return bindSql;
    }

};

export { PreparedStatementCombinerUtil };