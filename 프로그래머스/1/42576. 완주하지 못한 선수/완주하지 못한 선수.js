function solution(participant, completion) {
    const peoples = new Map();
    
    mappingPlayer(peoples, participant);
    comparePlayer(completion, peoples);
    
    for (let [key, value] of peoples) {
        if (value > 0) {
            return key;
        }
    }
}
// 참가자들 추가 함수
function mappingPlayer(peoples, participant) {
    for (i=0; i<participant.length; i++) {
        if(!peoples.has(participant[i])) {
            peoples.set(participant[i], 0);
        }
        peoples.set(participant[i], peoples.get(participant[i]) + 1);
    }
}
// 완주자 제거를 위한 함수
function comparePlayer(completion, peoples) {
    for (i=0; i<completion.length; i ++) {
        if(peoples.has(completion[i])) {
            peoples.set(completion[i], peoples.get(completion[i]) - 1);
        }
    }
    
    return peoples;
}