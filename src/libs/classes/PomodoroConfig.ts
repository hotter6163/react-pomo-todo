import { PomodoroStatusType, PomodoroTimeType} from 'libs/types/pomodoroTimerTypes'

export class PomodoroConfig {
  readonly pomodoroTime: PomodoroTimeType = {
    motion: 25 * 60,
    rest: 5 * 60,
    longRest: 15 * 60, 
  }
  private readonly cycleNum: number = 4
  private count: number
  
  constructor() {
    this.count = 0
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
    return cycle[this.count % cycle.length]
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
  
  addCount(): void {
    this.count += 1
  }
  
  reset(): void {
    this.count = 0
  }
}

