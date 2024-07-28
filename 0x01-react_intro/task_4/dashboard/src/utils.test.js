
import {getFullYear,getFooterCopy, getLatestNotification} from './utils'
describe("It shall display full year.", ()=>{
   
    it('should return correct year', ()=>{
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    })
})
describe('It shall return Holberton School if isIndex true Holberton School main dashboard if false', () => {
  it('should return the correct string based on true/false value', ()=>{
    expect(getFooterCopy(true)).toBe('Holberton School')
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
  })
})

describe('It shall give the corrent return of getLatestNotification function', () => {
  it('Should return <strong>Urgent requirement</strong> - complete by EOD', ()=>{
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
  })
})
