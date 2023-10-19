import { IComponentType } from '../../../../type';
import { Edit } from '@element-plus/icons-vue';
import { helper_getRandomStr, helper_Input, helper_input_boolean, helper_slider } from '../../helper.ts';

export default <IComponentType>{
  _ID: '',
  text: '输入框',
  tagIcon: Edit,
  tag: 'el-input',
  isShowPointer: false,
  value: '',
  attrs: {
    labelName: helper_Input('属性名', helper_getRandomStr()),
    formName: helper_Input('formName', 'input输入框'),
    sliderSize: helper_slider('尺寸', 30),
    defaultValue: helper_Input('默认值', ''),
    placeholder: helper_Input('placeholder', ''),
    require: helper_input_boolean('是否必填', false),
  },
};
