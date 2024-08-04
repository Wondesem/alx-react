import {shallow} from 'enzyme'

import Footer from './Footer'
import { getFooterCopy, getFullYear } from '../Utils/utils'

describe("Footer test", ()=>{
    const footer = shallow(<Footer/>)
    it("Footer component shall run without crashing", ()=> {
        expect(footer.exists()).toEqual(true)
    })
    it("shall contain at least the text 'Copyright'", ()=>{
        expect(footer.text()).toEqual(
			`Copyright ${getFullYear()} - ${getFooterCopy(true)}`
		);
    })
})