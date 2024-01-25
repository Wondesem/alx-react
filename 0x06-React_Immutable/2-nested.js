import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
    const objMapped = fromJS(object);

    return objMapped.getIn(array, undefined);
}