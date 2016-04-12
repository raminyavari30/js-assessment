exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for( var i = 0; i < arr.length; i++ ) {
      if( arr[i] === item ){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for( var i = 0; i < arr.length; i++) {
      total+= arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var newArr = [];
    for( var i = 0; i < arr.length; i++ ) {
      if( arr[i]!==item ) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length;i++){
      if(arr[i]=== item){
        arr.splice(i,1);
        i-=1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr[0]);
    return arr;
  },

  concat : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
