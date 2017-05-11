//maior numero de zeros entre 1 de um numero binário
function solution(N) {
    var binary = N.toString(2);
    return binary.substring(0, binary.lastIndexOf('1')).split('1').sort().pop().length;
}
