import { PomodoroStatusType, PomodoroTimeType} from 'libs/types/pomodoroTimerTypes'

export class PomodoroConfig {
  private readonly pomodoroTime: PomodoroTimeType = {
    motion: 10,
    rest: 3,
    longRest: 5
  }
  private readonly cycleNum: number = 4
  private executeNum: number
  
  constructor() {
    this.executeNum = 0
  }
  
  cycle(): PomodoroStatusType[] {
    let result: PomodoroStatusType[] = []
    for (let i = 1; i <= this.cycleNum; i++) {
      if (i !== this.cycleNum) {
        result = [...result, ...['motion', 'rest'] as PomodoroStatusType[]]
      } else {
        result = [...result, ...['motion', 'longRest'] as PomodoroStatusType[]]
      }
    }
    return result
  }
  
  nowStatus(): PomodoroStatusType {
    const cycle = this.cycle()
    return cycle[this.executeNum % cycle.length]
  }
  
  setTime(): number {
    let result
    switch (this.nowStatus()) {
      case 'motion':
        result = this.pomodoroTime.motion
        break
      case 'rest':
        result = this.pomodoroTime.rest
        break
      case 'longRest':
        result = this.pomodoroTime.longRest
        break
      default:
        throw new Error(`${this.nowStatus()}は不適切な値です`)
    }
    return result
  }
  
  addExecuteNum(): void {
    this.executeNum += 1
  }
  
  reset(): void {
    this.executeNum = 0
  }
}

