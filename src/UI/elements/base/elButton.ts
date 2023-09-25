import { IComponentType } from '../../../../type';
import { Files } from '@element-plus/icons-vue';
import { helper_getRandomStr, helper_Input, helper_Radio } from '../../helper.ts';

export default <IComponentType>{
  _ID: helper_getRandomStr(),
  tag: 'el-button',
  text: '按钮',
  tagIcon: Files,
  input_text: helper_Input('按钮文本', '点击'),
  input_key: helper_Input('属性名', `button_${helper_getRandomStr()}`),
  attrs: {
    size: helper_Radio('尺寸', [
      {
        label: 'small',
        value: 'small',
      },
      {
        label: 'medium',
        value: 'medium',
      },
      {
        label: 'large',
        value: 'large',
      },
    ]),
  },
};
