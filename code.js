function enc(str, key) {
  var length = key.length;
  var keyList = key.split("");
  var s = "", bit, bit1, bit2, bit3, bit4;
  for (var i = 0; i < str.length; i++) {
    bit = str.charCodeAt(i); //获得字符的Unicode 编码(数字)
    bit1 = bit % length;
    bit = (bit - bit1) / length;
    bit2 = bit % length;
    bit = (bit - bit2) / length;
    bit3 = bit % length;
    bit = (bit - bit3) / length;
    bit4 = bit % length;
    //bit1,bit2,bit3,bit4 key秘钥的位置
    //keyList[bit4]+keyList[bit3]+keyList[bit2]+keyList[bit1] 将str中的每一个字符对应秘钥的四个字符
    s += keyList[bit4] + keyList[bit3] + keyList[bit2] + keyList[bit1];
  }
  return s;
}

function dec(str, key) {
  var length = key.length;
  var bit, bit1, bit2, bit3, bit4, j = 0, s;
  var s = new Array(Math.floor(str.length / 4));
  var result = [];
  bit = s.length;
  for (var i = 0; i < bit; i++) {
    bit1 = key.indexOf(str.charAt(j));
    j++;
    bit2 = key.indexOf(str.charAt(j));
    j++;
    bit3 = key.indexOf(str.charAt(j));
    j++;
    bit4 = key.indexOf(str.charAt(j));
    j++;
    //bit1,bit2,bit3,bit4 每四个秘钥字符的位置 对应的是str的一个字符         
    s[i] = bit1 * length * length * length + bit2 * length * length + bit3 * length + bit4;
    //bit1*length*length*length+bit2*length*length+bit3*length+bit4还原str每个字符的Unicode 编码
    result.push(String.fromCharCode(s[i])); //将Unicode 编码还原数据
  }
  //还原字符
  return result.join("");
}


function MakeKey(str) {
  var str1 = ''
  encoder = new TextEncoder('utf8');
  encoder = encoder.encode(str);
  for (i in encoder) {
    str1 += encoder[i]
  }
  key = DelSameChar(str + str1);
  return key
}

function DelSameChar(str) {
  var s = str;
  var s1 = s.split("").sort().join("");
  var cc = s1.match(/(.)\1+/g);
  for (var i = 0; i < cc.length; i++) {
    c = cc[i].substring(0, 1);
    s1 = s1.replace(cc[i], c);
  }
  return (s1)

}


String.prototype.hashCode = function () {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};
