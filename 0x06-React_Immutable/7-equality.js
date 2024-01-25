import { is } from 'immutable';

export default function areMapEqual(map1, map2) {
    return is(map1, map2);
}