/*
 * @file: file
 * @author: zhaojianpeng<zhaojianpeng@baidu.com>
 */

// 定义记分牌的类
class ScorePanel {
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置最高级别
    maxLevel: number;
    // 设置多少分时升级
    upScore: number;
    
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = <HTMLElement>document.querySelectorAll('.score')[0]!;
        this.levelEle = <HTMLElement>document.querySelectorAll('.level')[0]!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';

        // 分数升级
        if(this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 提升等级
    levelUp() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
// // 测试代码

// const score = new ScorePanel(100, 2);

// for(let i=0;i<80;i++) {
//     score.addScore();
// }