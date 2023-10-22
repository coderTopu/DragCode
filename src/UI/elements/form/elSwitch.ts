import { IComponentType } from '../../../../type';
import { Open } from '@element-plus/icons-vue';
import { helper_getRandomStr, helper_Input, helper_input_boolean, helper_Radio } from '../../helper.ts';

export default <IComponentType>{
  _ID: '',
  text: 'switch',
  tagIcon: Open,
  tag: 'el-switch',
  isShowPointer: false,
  value: '',
  attrs: {
    fieldName: helper_Input('属性名', helper_getRandomStr()),
    label: helper_Input('label', 'switch按钮'),
    size: helper_Radio('尺寸', [
      {
        key: 'small',
        value: 'small',
      },
      {
        key: 'medium',
        value: 'medium',
      },
      {
        key: 'large',
        value: 'large',
      },
    ]),
    require: helper_input_boolean('是否必填', false),
  },
};
