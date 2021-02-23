/*
 * @file: file
 * @author: zhaojianpeng
 */
import Food from './Food';
import Snake from './Snake'
import ScorePanel from './ScorePanel'

// 游戏控制器
class GameControl {

    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 蛇的移动方向
    direction: string = 'Right'

    // 游戏是否结束
    isLive = true

    fast = 1

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(100,2)

        this.init()
    }

    // 游戏初始化，调用后游戏开始
    init() {
        // 绑定键盘按下的事件
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        // 长按加速
        document.addEventListener('keypress', this.keyPressHandler.bind(this))
        // 长按加速
        document.addEventListener('keyup', this.keyUpHandler.bind(this))
        // 调用蛇移动方法
        this.run()
    }
    
    keyDownHandler(event: KeyboardEvent) {
        // console.log(event)
        this.direction = event.key
    }
    keyPressHandler(event: KeyboardEvent) {
        console.log(event, '长按')
        this.fast = 5
    }
    keyUpHandler(event: KeyboardEvent) {
        console.log(event, '长按结束')
        this.fast = 1
    }

    // 蛇移动
    run() {
        /*
         *  根据direction使蛇移动
         * 上 top 减少
         * 下 top 增加
         * 左 left 减少
         * 右 left 增加
        */
        let X = this.snake.X
        let Y = this.snake.Y

        // 根据按键方向来计算X值和Y值（未更新）
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
            case "W":
            case "w":
                // 向上移动 top 减少
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
            case "S":
            case "s":
                // 向下移动 top 增加
                Y += 10
                break
            case "ArrowLeft":
            case "Left":
            case "A":
            case "a":
                // 向左移动 left 减少
                X -= 10
                break
            case "ArrowRight":
            case "Right":
            case "D":
            case "d":
                // 向右移动 left 增加
                X += 10
                break
        }

        this.checkEat(X, Y)
        try{
            this.snake.X = X
            this.snake.Y = Y
        } catch(e) {
            // 蛇撞墙后抛出异常，游戏结束
            console.log(e)
            alert(e.message)
            this.isLive = false
        }
        console.log(300 - (this.scorePanel.level - 1) * 30  - 200, '更新频率')
        let frequency = 300 - (this.scorePanel.level - 1) * 30  - 200
        frequency < 0 ? 0 : frequency
        // 开启定时器
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30 - 100 )
    }

    checkEat(x: number, y: number) {
        // 两个坐标一样才吃到
        if(this.food.X === x && this.food.Y === y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()

        }
    }
}

export default GameControl;