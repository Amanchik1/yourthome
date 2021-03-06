import React from 'react'


export const validate = values => {
    const errors = {}
    if (!values.headline) {
        errors.headline = 'Обязательное поле'
    } else if (values.headline.length > 0) {
        errors.headline = undefined
    }
    if (!values.price) {
        errors.price = 'Обязательное поле'
    }else if (values.price < 0) {
        errors.price = 'min 1'
    } else if (values.price.length > 0) {
        errors.price = undefined
    }
    if (!values.price) {
        errors.price = 'Обязательное поле'
    } else if (values.price.length > 0) {
        errors.price = undefined
    }
    if (!values.area) {
        errors.area = 'Обязательное поле'
    } else if (values.area.length > 0) {
        errors.area = undefined
    }
    if (!values.liveArea) {
        errors.liveArea = 'Обязательное поле'
    } else if (Number(values.liveArea) > Number(values.area)) {
        errors.liveArea = 'Жилая площадь не может быть больше чем площадь жилья!'
    }else if (values.liveArea.length > 0) {
        errors.liveArea = undefined
    }
    if (!values.rooms) {
        errors.rooms = 'Обязательное поле'
    } else if (values.rooms.length > 0) {
        errors.rooms = undefined
    }
    if (!values.construction_type) {
        errors.construction_type = 'Обязательное поле'
    } else if (values.construction_type.length > 0) {
        errors.construction_type = undefined
    }
    if (!values.floor) {
        errors.floor = 'Обязательное поле'
    } else if (values.floor.length > 0) {
        errors.floor = undefined
    }
    if (!values.storey) {
        errors.storey = 'Обязательное поле'
    } else if (+values.storey < +values.floor) {
        errors.storey = 'Жилая площадь не может быть больше чем площадь жилья!'
    } else if (values.storey.length > 0) {
        errors.storey = undefined
    }
    if (!values.apartmentType) {
        errors.apartmentType = 'Обязательное поле'
    } else if (values.apartmentType.length > 0) {
        errors.apartmentType = undefined
    }
    if (!values.description) {
        errors.description = 'Обязательное поле'
    } else if (values.description.length) {
        errors.description = undefined
    }
    if (!values.number) {
        errors.number = 'Обязательное поле'
    } else if (values.number.length) {
        errors.number = undefined
    }
    if (!values.name) {
        errors.name = 'Обязательное поле'
    } else if (values.name.length) {
        errors.name = undefined
    }
    if (!values.state) {
        errors.state = 'Обязательное поле'
    } else if (values.state.length) {
        errors.state = undefined
    }
    if (!values.title) {
        errors.title = 'Обязательное поле'
    } else if (values.title.length > 0) {
        errors.title = undefined
    }
    if (!values.type) {
        errors.type = 'Обязательное поле'
    } else if (values.type.length > 0) {
        errors.type = undefined
    }
    if (!values.room) {
        errors.room = 'Обязательное поле'
    } else if (values.room.length > 0) {
        errors.room = undefined
    }
    if (!values.total_area) {
        errors.total_area = 'Обязательное поле'
    } else if (values.total_area.length > 0) {
        errors.total_area = undefined
    }
    if (!values.living_area) {
        errors.living_area = 'Обязательное поле'
    } else if (values.living_area.length > 0) {
        errors.living_areastorey = undefined
    }
    if (!values.currency) {
        errors.currency = 'Обязательное поле'
    } else if (values.currency.length > 0) {
        errors.currency = undefined
    }
    return errors
}
