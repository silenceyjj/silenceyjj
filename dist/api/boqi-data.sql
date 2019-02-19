/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : boqi-data

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-19 09:53:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `uid` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `num` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('18', '23', '../img/zhuliang1.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '80.00', '1');
INSERT INTO `cart` VALUES ('2', '24', '../img/zhuliang2.jpg', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '217.00', '5');
INSERT INTO `cart` VALUES ('17', '23', '../img/zhuliang1.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '80.00', '6');
INSERT INTO `cart` VALUES ('2', '23', '../img/zhuliang1.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '80.00', '4');
INSERT INTO `cart` VALUES ('16', '23', '../img/zhuliang1.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '80.00', '1');

-- ----------------------------
-- Table structure for mainlist
-- ----------------------------
DROP TABLE IF EXISTS `mainlist`;
CREATE TABLE `mainlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bannerimg` varchar(255) DEFAULT NULL,
  `hotimg` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `imgurl1` varchar(255) DEFAULT NULL,
  `imgurl2` varchar(255) DEFAULT NULL,
  `imgurl3` varchar(255) DEFAULT NULL,
  `imgurl4` varchar(255) DEFAULT NULL,
  `imgurl5` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `sold` int(11) DEFAULT NULL,
  `comment` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mainlist
-- ----------------------------
INSERT INTO `mainlist` VALUES ('1', '../img/banner1.jpg', null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('2', '../img/banner2.jpg', null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('3', '../img/banner3.jpg', null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('4', '../img/banner4.jpg', null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('5', null, '../img/hot_pro1.jpg', null, null, null, null, null, null, null, '日本APDC 电解漂漂水家居宠物除菌消臭清新喷雾300ml ', '170.00', '25', null);
INSERT INTO `mainlist` VALUES ('6', null, '../img/hot_pro2.jpg', null, null, null, null, null, null, null, '小佩Petkit 宠物智能猫窝冬季保暖冬天空调窝四季通用小型犬狗窝', '899.00', '130', null);
INSERT INTO `mainlist` VALUES ('7', null, '../img/hot_pro3.jpg', null, null, null, null, null, null, null, 'Touchdog它它 新款宠物衣服时尚可爱狗狗衣服泰迪比熊小型犬秋冬衣服', '98.00', '155', null);
INSERT INTO `mainlist` VALUES ('8', null, '../img/hot_pro4.jpg', null, null, null, null, null, null, null, '伊丽 Elite 小怪兽猫窝爬架', '236.00', '78', null);
INSERT INTO `mainlist` VALUES ('9', null, '../img/hot_pro5.jpg', null, null, null, null, null, null, null, 'TIDYCATS泰迪 即效除臭结团猫砂N5 6.35kg 美国原装进口', '128.00', '660', null);
INSERT INTO `mainlist` VALUES ('10', null, '../img/hot_pro6.jpg', null, null, null, null, null, null, null, 'Touchcat它它 超可爱温暖猫窝动物园系列图案猫抓板', '78.00', '158', null);
INSERT INTO `mainlist` VALUES ('11', null, '../img/hot_pro7.jpg', null, null, null, null, null, null, null, '比瑞吉 室内成猫粮天然粮2kg', '132.00', '21893', null);
INSERT INTO `mainlist` VALUES ('12', null, '../img/hot_pro8.jpg', null, null, null, null, null, null, null, '伯纳天纯 成猫天然无谷配方猫粮1.5kg', '119.00', '16577', null);
INSERT INTO `mainlist` VALUES ('13', null, '../img/hot_pro9.jpg', null, null, null, null, null, null, null, 'Orijen渴望 全肉配方全猫粮5.4kg', '690.00', '4692', null);
INSERT INTO `mainlist` VALUES ('14', null, '../img/hot_pro10.jpg', null, null, null, null, null, null, null, 'BOTH 成犬山羊奶果冻布丁16g*50粒桶装 狗零食', '52.00', '10252', null);
INSERT INTO `mainlist` VALUES ('15', null, '../img/hot_pro11.jpg', null, null, null, null, null, null, null, 'Meat Mates 冻干小鲜牛犬营养补充拌餐130g【2019年2月】', '105.00', '877', null);
INSERT INTO `mainlist` VALUES ('16', null, '../img/hot_pro12.jpg', null, null, null, null, null, null, null, '福来恩 犬猫灭蜱虫跳蚤喷剂100ml 猫狗体外驱虫药', '108.00', '55421', null);
INSERT INTO `mainlist` VALUES ('17', null, '../img/hot_pro13.jpg', null, null, null, null, null, null, null, '拜宠清 狗狗体内驱虫药犬用打虫药 单片装', '45.00', '672451', null);
INSERT INTO `mainlist` VALUES ('18', null, '../img/hot_pro14.jpg', null, null, null, null, null, null, null, '大宠爱 体内体外驱虫滴剂盒装15mg*3支 2.5kg以下适用', '168.00', '12881', null);
INSERT INTO `mainlist` VALUES ('19', null, '../img/hot_pro15.jpg', null, null, null, null, null, null, null, '尼可信 中型犬抗寄生虫药3片/盒（4-10KG犬用）', '223.00', '18588', null);
INSERT INTO `mainlist` VALUES ('20', null, '../img/hot_pro16.jpg', null, null, null, null, null, null, null, '博来恩Broadline 中大型猫用滴剂L 3支/盒(2.5-7.5kg)', '262.00', '12604', null);
INSERT INTO `mainlist` VALUES ('21', null, '../img/hot_pro17.jpg', null, null, null, null, null, null, null, '博来恩Broadline 中大型猫用滴剂L 3支/盒(2.5-7.5kg)', '262.00', '12604', null);
INSERT INTO `mainlist` VALUES ('22', null, '../img/hot_pro18.jpg', null, null, null, null, null, null, null, 'MAG 关节生黄金版狗狗骨骼宝关节舒宠物关节灵60片', '88.00', '11844', null);
INSERT INTO `mainlist` VALUES ('23', null, null, '主粮', '../img/zhuliang1.jpg', '../img/zhuliang1.1.jpg', '../img/zhuliang1.2.jpg', '../img/zhuliang1.3.jpg', '../img/zhuliang1.4.jpg', '../img/zhuliang1.5.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '80.00', '510071', '1302');
INSERT INTO `mainlist` VALUES ('24', null, null, '主粮', '../img/zhuliang2.jpg', '../img/zhuliang2.1.jpg', '../img/zhuliang2.2.jpg', '../img/zhuliang2.3.jpg', '../img/zhuliang2.4.jpg', '../img/zhuliang2.5.jpg', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '217.00', '480098', '3929');
INSERT INTO `mainlist` VALUES ('25', null, null, '主粮', '../img/zhuliang3.jpg', '../img/zhuliang3.1.jpg', '../img/zhuliang3.2.jpg', '../img/zhuliang3.3.jpg', '../img/zhuliang3.4.jpg', '../img/zhuliang3.5.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '116.00', '336782', '1483');
INSERT INTO `mainlist` VALUES ('26', null, null, '主粮', '../img/zhuliang4.jpg', '../img/zhuliang4.1.jpg', '../img/zhuliang4.2.jpg', '../img/zhuliang4.3.jpg', '../img/zhuliang4.4.jpg', '../img/zhuliang4.5.jpg', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '48.00', '296787', '767');
INSERT INTO `mainlist` VALUES ('27', null, null, '主粮', '../img/zhuliang5.jpg', '../img/zhuliang5.1.jpg', '../img/zhuliang5.2.jpg', '../img/zhuliang5.3.jpg', '../img/zhuliang5.4.jpg', '../img/zhuliang5.5.jpg', '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', '37.30', '179646', '862');
INSERT INTO `mainlist` VALUES ('28', null, null, '主粮', '../img/zhuliang6.jpg', '../img/zhuliang6.1.jpg', '../img/zhuliang6.2.jpg', '../img/zhuliang6.3.jpg', '../img/zhuliang6.4.jpg', '../img/zhuliang6.5.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '122.00', '156195', '1380');
INSERT INTO `mainlist` VALUES ('29', null, null, '主粮', '../img/zhuliang7.jpg', '../img/zhuliang7.1.jpg', '../img/zhuliang7.2.jpg', '../img/zhuliang7.3.jpg', '../img/zhuliang7.4.jpg', '../img/zhuliang7.5.jpg', '皇家ROYAL CANIN  A3优选幼犬粮怀孕哺乳期母犬及幼犬适用 8kg', '217.00', '114652', '3507');
INSERT INTO `mainlist` VALUES ('30', null, null, '主粮', '../img/zhuliang8.jpg', '../img/zhuliang8.1.jpg', '../img/zhuliang8.2.jpg', '../img/zhuliang8.3.jpg', '../img/zhuliang8.4.jpg', '../img/zhuliang8.5.jpg', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', '215.00', '153890', '233');
INSERT INTO `mainlist` VALUES ('31', null, null, '主粮', '../img/zhuliang9.jpg', '../img/zhuliang9.1.jpg', '../img/zhuliang9.2.jpg', '../img/zhuliang9.3.jpg', '../img/zhuliang9.4.jpg', '../img/zhuliang9.5.jpg', '法国皇家ROYAL CANIN 成犬粮狗粮8kg CC', '200.00', '136128', '2571');
INSERT INTO `mainlist` VALUES ('32', null, null, '主粮', '../img/zhuliang10.jpg', '../img/zhuliang10.1.jpg', '../img/zhuliang10.2.jpg', '../img/zhuliang10.3.jpg', '../img/zhuliang10.4.jpg', '../img/zhuliang10.5.jpg', '怡亲yoken 泰迪成犬粮专用狗粮2.5kg', '99.50', '185845', '162');
INSERT INTO `mainlist` VALUES ('33', null, null, '主粮', '../img/zhuliang11.jpg', '../img/zhuliang11.1.jpg', '../img/zhuliang11.2.jpg', '../img/zhuliang11.3.jpg', '../img/zhuliang11.4.jpg', '../img/zhuliang11.5.jpg', '伯纳天纯 小型成犬粮天然无谷低敏配方狗粮1.5kg', '85.00', '59075', '627');
INSERT INTO `mainlist` VALUES ('34', null, null, '主粮', '../img/zhuliang12.jpg', '../img/zhuliang12.1.jpg', '../img/zhuliang12.2.jpg', '../img/zhuliang12.3.jpg', '../img/zhuliang12.4.jpg', '../img/zhuliang12.5.jpg', '康多乐 成犬粮牛肉肝蔬菜狗粮15kg', '289.00', '88963', '1287');
INSERT INTO `mainlist` VALUES ('35', null, null, '主粮', '../img/zhuliang13.jpg', '../img/zhuliang13.1.jpg', '../img/zhuliang13.2.jpg', '../img/zhuliang13.3.jpg', '../img/zhuliang13.4.jpg', '../img/zhuliang13.5.jpg', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', '253.00', '80109', '1255');
INSERT INTO `mainlist` VALUES ('36', null, null, '主粮', '../img/zhuliang14.jpg', '../img/zhuliang14.1.jpg', '../img/zhuliang14.2.jpg', '../img/zhuliang14.3.jpg', '../img/zhuliang14.4.jpg', '../img/zhuliang14.5.jpg', '比瑞吉 小型成犬粮天然狗粮1.5kg', '99.00', '17893', '557');
INSERT INTO `mainlist` VALUES ('37', null, null, '主粮', '../img/zhuliang15.jpg', '../img/zhuliang15.1.jpg', '../img/zhuliang15.2.jpg', '../img/zhuliang15.3.jpg', '../img/zhuliang15.4.jpg', '../img/zhuliang15.5.jpg', '宝路 老犬犬粮牛肉鸡肉蔬菜及谷物狗粮1.8kg', '49.50', '74895', '1937');
INSERT INTO `mainlist` VALUES ('38', null, null, '主粮', '../img/zhuliang16.jpg', '../img/zhuliang16.1.jpg', '../img/zhuliang16.2.jpg', '../img/zhuliang16.3.jpg', '../img/zhuliang16.4.jpg', '../img/zhuliang16.5.jpg', '皇家ROYAL CANIN 10个月以上小型成犬粮8kg PR27', '379.00', '73208', '218');
INSERT INTO `mainlist` VALUES ('39', null, null, '主粮', '../img/zhuliang17.jpg', '../img/zhuliang17.1.jpg', '../img/zhuliang17.2.jpg', '../img/zhuliang17.3.jpg', '../img/zhuliang17.4.jpg', '../img/zhuliang17.5.jpg', '贵族 羊肉大米成犬粮15kg', '385.00', '6751', '426');
INSERT INTO `mainlist` VALUES ('40', null, null, '主粮', '../img/zhuliang18.jpg', '../img/zhuliang18.1.jpg', '../img/zhuliang18.2.jpg', '../img/zhuliang18.3.jpg', '../img/zhuliang18.4.jpg', '../img/zhuliang18.5.jpg', '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26 (新老包装随机发货）', '542.00', '6448', '1209');
INSERT INTO `mainlist` VALUES ('41', null, null, '主粮', '../img/zhuliang19.jpg', '../img/zhuliang19.1.jpg', '../img/zhuliang19.2.jpg', '../img/zhuliang19.3.jpg', '../img/zhuliang19.4.jpg', '../img/zhuliang19.5.jpg', '宝路 中小型成犬粮鸡肉味蔬菜谷物狗粮1.8kg', '48.00', '6543', '2456');
INSERT INTO `mainlist` VALUES ('42', null, null, '主粮', '../img/zhuliang20.jpg', '../img/zhuliang20.1.jpg', '../img/zhuliang20.2.jpg', '../img/zhuliang20.3.jpg', '../img/zhuliang20.4.jpg', '../img/zhuliang20.5.jpg', '比瑞吉 俱乐部全犬种成犬粮天然健康狗粮10kg', '269.00', '884', '1226');
INSERT INTO `mainlist` VALUES ('43', null, null, '主粮', '../img/zhuliang1.jpg', '../img/zhuliang1.1.jpg', '../img/zhuliang1.2.jpg', '../img/zhuliang1.3.jpg', '../img/zhuliang1.4.jpg', '../img/zhuliang1.5.jpg', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '82.00', '5107', '2302');
INSERT INTO `mainlist` VALUES ('44', null, null, '主粮', '../img/zhuliang2.jpg', '../img/zhuliang2.1.jpg', '../img/zhuliang2.2.jpg', '../img/zhuliang2.3.jpg', '../img/zhuliang2.4.jpg', '../img/zhuliang2.5.jpg', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '21.00', '48009', '3029');
INSERT INTO `mainlist` VALUES ('45', null, null, '主粮', '../img/zhuliang3.jpg', '../img/zhuliang3.1.jpg', '../img/zhuliang3.2.jpg', '../img/zhuliang3.3.jpg', '../img/zhuliang3.4.jpg', '../img/zhuliang3.5.jpg', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '11.00', '3367', '1487');
INSERT INTO `mainlist` VALUES ('46', null, null, '主粮', '../img/zhuliang4.jpg', '../img/zhuliang4.1.jpg', '../img/zhuliang4.2.jpg', '../img/zhuliang4.3.jpg', '../img/zhuliang4.4.jpg', '../img/zhuliang4.5.jpg', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '4.00', '2967', '767');
INSERT INTO `mainlist` VALUES ('47', null, null, '主粮', '../img/zhuliang5.jpg', '../img/zhuliang5.1.jpg', '../img/zhuliang5.2.jpg', '../img/zhuliang5.3.jpg', '../img/zhuliang5.4.jpg', '../img/zhuliang5.5.jpg', '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', '3.00', '1452', '862');
INSERT INTO `mainlist` VALUES ('48', null, null, '主粮', '../img/zhuliang6.jpg', '../img/zhuliang6.1.jpg', '../img/zhuliang6.2.jpg', '../img/zhuliang6.3.jpg', '../img/zhuliang6.4.jpg', '../img/zhuliang6.5.jpg', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '120.00', '1564', '1380');
INSERT INTO `mainlist` VALUES ('49', null, null, '主粮', '../img/zhuliang7.jpg', '../img/zhuliang7.1.jpg', '../img/zhuliang7.2.jpg', '../img/zhuliang7.3.jpg', '../img/zhuliang7.4.jpg', '../img/zhuliang7.5.jpg', '皇家ROYAL CANIN  A3优选幼犬粮怀孕哺乳期母犬及幼犬适用 8kg', '21.00', '1544', '3507');
INSERT INTO `mainlist` VALUES ('50', null, null, '主粮', '../img/zhuliang8.jpg', '../img/zhuliang8.1.jpg', '../img/zhuliang8.2.jpg', '../img/zhuliang8.3.jpg', '../img/zhuliang8.4.jpg', '../img/zhuliang8.5.jpg', '法国皇家ROYAL CANIN 小型犬粮怀孕哺乳离乳奶糕 3kg MIS30', '21.00', '1538', '2233');
INSERT INTO `mainlist` VALUES ('51', null, null, '主粮', '../img/zhuliang9.jpg', '../img/zhuliang9.1.jpg', '../img/zhuliang9.2.jpg', '../img/zhuliang9.3.jpg', '../img/zhuliang9.4.jpg', '../img/zhuliang9.5.jpg', '法国皇家ROYAL CANIN 成犬粮狗粮8kg CC', '200.00', '1361', '2581');
INSERT INTO `mainlist` VALUES ('52', null, null, '主粮', '../img/zhuliang10.jpg', '../img/zhuliang10.1.jpg', '../img/zhuliang10.2.jpg', '../img/zhuliang10.3.jpg', '../img/zhuliang10.4.jpg', '../img/zhuliang10.5.jpg', '怡亲yoken 泰迪成犬粮专用狗粮2.5kg', '48.00', '12584', '62');
INSERT INTO `mainlist` VALUES ('53', null, null, '主粮', '../img/zhuliang11.jpg', '../img/zhuliang11.1.jpg', '../img/zhuliang11.2.jpg', '../img/zhuliang11.3.jpg', '../img/zhuliang11.4.jpg', '../img/zhuliang11.5.jpg', '伯纳天纯 小型成犬粮天然无谷低敏配方狗粮1.5kg', '99.00', '9907', '627');
INSERT INTO `mainlist` VALUES ('54', null, null, '主粮', '../img/zhuliang12.jpg', '../img/zhuliang12.1.jpg', '../img/zhuliang12.2.jpg', '../img/zhuliang12.3.jpg', '../img/zhuliang12.4.jpg', '../img/zhuliang12.5.jpg', '康多乐 成犬粮牛肉肝蔬菜狗粮15kg', '100.00', '896', '1287');
INSERT INTO `mainlist` VALUES ('55', null, null, '主粮', '../img/zhuliang13.jpg', '../img/zhuliang13.1.jpg', '../img/zhuliang13.2.jpg', '../img/zhuliang13.3.jpg', '../img/zhuliang13.4.jpg', '../img/zhuliang13.5.jpg', '法国皇家ROYAL CANIN 贵宾幼犬粮专用狗粮3kg APD33', '65.00', '18010', '1855');
INSERT INTO `mainlist` VALUES ('56', null, null, '主粮', '../img/zhuliang14.jpg', '../img/zhuliang14.1.jpg', '../img/zhuliang14.2.jpg', '../img/zhuliang14.3.jpg', '../img/zhuliang14.4.jpg', '../img/zhuliang14.5.jpg', '比瑞吉 小型成犬粮天然狗粮1.5kg', '54.00', '7789', '587');
INSERT INTO `mainlist` VALUES ('57', null, null, '主粮', '../img/zhuliang15.jpg', '../img/zhuliang15.1.jpg', '../img/zhuliang15.2.jpg', '../img/zhuliang15.3.jpg', '../img/zhuliang15.4.jpg', '../img/zhuliang15.5.jpg', '宝路 老犬犬粮牛肉鸡肉蔬菜及谷物狗粮1.8kg', '18.60', '7489', '157');
INSERT INTO `mainlist` VALUES ('58', null, null, '主粮', '../img/zhuliang16.jpg', '../img/zhuliang16.1.jpg', '../img/zhuliang16.2.jpg', '../img/zhuliang16.3.jpg', '../img/zhuliang16.4.jpg', '../img/zhuliang16.5.jpg', '皇家ROYAL CANIN 10个月以上小型成犬粮8kg PR27', '480.00', '7320', '3178');
INSERT INTO `mainlist` VALUES ('59', null, null, '主粮', '../img/zhuliang17.jpg', '../img/zhuliang17.1.jpg', '../img/zhuliang17.2.jpg', '../img/zhuliang17.3.jpg', '../img/zhuliang17.4.jpg', '../img/zhuliang17.5.jpg', '贵族 羊肉大米成犬粮15kg', '290.00', '6751', '726');
INSERT INTO `mainlist` VALUES ('60', null, null, '主粮', '../img/zhuliang18.jpg', '../img/zhuliang18.1.jpg', '../img/zhuliang18.2.jpg', '../img/zhuliang18.3.jpg', '../img/zhuliang18.4.jpg', '../img/zhuliang18.5.jpg', '法国皇家ROYAL CANIN 大型犬成犬粮15kg GR26 (新老包装随机发货）', '330.00', '6444', '1809');
INSERT INTO `mainlist` VALUES ('61', null, null, '主粮', '../img/zhuliang19.jpg', '../img/zhuliang19.1.jpg', '../img/zhuliang19.2.jpg', '../img/zhuliang19.3.jpg', '../img/zhuliang19.4.jpg', '../img/zhuliang19.5.jpg', '宝路 中小型成犬粮鸡肉味蔬菜谷物狗粮1.8kg', '148.00', '6054', '656');
INSERT INTO `mainlist` VALUES ('62', null, null, '主粮', '../img/zhuliang20.jpg', '../img/zhuliang20.1.jpg', '../img/zhuliang20.2.jpg', '../img/zhuliang20.3.jpg', '../img/zhuliang20.4.jpg', '../img/zhuliang20.5.jpg', '比瑞吉 俱乐部全犬种成犬粮天然健康狗粮10kg', '266.00', '5884', '1426');
INSERT INTO `mainlist` VALUES ('63', null, null, '狗粮', '../img/gouliang1.jpg', null, null, null, null, null, 'Orijen渴望 无谷幼犬配方狗粮 11.4kg', '1050.00', '1146', null);
INSERT INTO `mainlist` VALUES ('64', null, null, '狗粮', '../img/gouliang2.jpg', null, null, null, null, null, '醇粹 泰迪贵宾成犬粮天然狗粮3kg 泰迪狗粮', '109.00', '36208', null);
INSERT INTO `mainlist` VALUES ('65', null, null, '狗粮', '../img/gouliang3.jpg', null, null, null, null, null, 'Meat Mates 冻干小鲜牛犬营养补充拌餐130g【2019年2月】', '105.00', '877', null);
INSERT INTO `mainlist` VALUES ('66', null, null, '狗粮', '../img/gouliang4.jpg', null, null, null, null, null, '皇家贵宾成犬粮3kg PD30', '217.00', '480098', null);
INSERT INTO `mainlist` VALUES ('67', null, null, '狗粮', '../img/gouliang5.jpg', null, null, null, null, null, '冠能挑食及美毛配方粮2.5kg', '169.00', '6251', null);
INSERT INTO `mainlist` VALUES ('68', null, null, '狗粮', '../img/gouliang6.jpg', null, null, null, null, null, '宝路肉类奶蔬幼犬粮1.3kg', '37.30', '179646', null);
INSERT INTO `mainlist` VALUES ('69', null, null, '狗粮', '../img/gouliang7.jpg', null, null, null, null, null, '比瑞吉小型犬成犬粮1.5kg', '99.00', '77893', null);
INSERT INTO `mainlist` VALUES ('70', null, null, '狗粮', '../img/gouliang8.jpg', null, null, null, null, null, '麦富迪牛肉双拼粮小型犬成犬粮2kg', '72.00', '37453', null);
INSERT INTO `mainlist` VALUES ('71', null, null, '湿粮', '../img/shiliang1.jpg', null, null, null, null, null, 'zeal真挚 天然犬猫专用鲜牛乳 (380毫升) 猫狗零食 新西兰原装进口', '33.00', '1582', null);
INSERT INTO `mainlist` VALUES ('72', null, null, '湿粮', '../img/shiliang2.jpg', null, null, null, null, null, '伊纳宝 旺好成犬用牛肉鸡小胸肉湿粮100g*12包 狗湿粮', '35.80', '1471', null);
INSERT INTO `mainlist` VALUES ('73', null, null, '湿粮', '../img/shiliang3.jpg', null, null, null, null, null, '伊纳宝 犬用低脂肪鸡肉与牛肉湿粮80g*12包 狗湿粮', '46.80', '582', null);
INSERT INTO `mainlist` VALUES ('74', null, null, '湿粮', '../img/shiliang4.jpg', null, null, null, null, null, '雪诗雅 鸡肉木瓜狗罐头150g*10 狗湿粮', '150.00', '583', null);
INSERT INTO `mainlist` VALUES ('75', null, null, '湿粮', '../img/shiliang5.jpg', null, null, null, null, null, '渔极 金枪鱼及三文鱼块狗罐头80g*12罐 DY82 狗湿粮', '114.00', '460', null);
INSERT INTO `mainlist` VALUES ('76', null, null, '湿粮', '../img/shiliang6.jpg', null, null, null, null, null, 'K9Natural 天然无谷牛肉狗罐头170g*6罐 狗湿粮', '180.00', '102', null);
INSERT INTO `mainlist` VALUES ('77', null, null, '湿粮', '../img/shiliang7.jpg', null, null, null, null, null, '顽皮Wanpy happy100牛肉慕斯狗罐头95g*12罐 狗湿粮', '39.90', '105109', null);
INSERT INTO `mainlist` VALUES ('78', null, null, '湿粮', '../img/shiliang8.jpg', null, null, null, null, null, '麦富迪 狗用清炖牛肉 肉粒包95g*12包 狗湿粮', '29.90', '5817', null);
INSERT INTO `mainlist` VALUES ('79', null, null, '零食', '../img/lingshi1.jpg', null, null, null, null, null, '曼劳 鸡肉鳕鱼亮毛寿司400g 美毛亮毛 狗零食', '32.00', '16058', null);
INSERT INTO `mainlist` VALUES ('80', null, null, '零食', '../img/lingshi2.jpg', null, null, null, null, null, '未卡 鸡肉味汪汪饭团君60g 狗零食', '11.90', '408', null);
INSERT INTO `mainlist` VALUES ('81', null, null, '零食', '../img/lingshi3.jpg', null, null, null, null, null, 'BOTH 幼犬山羊奶果冻布丁16g*50粒桶装 狗零食', '52.00', '18218', null);
INSERT INTO `mainlist` VALUES ('82', null, null, '零食', '../img/lingshi4.jpg', null, null, null, null, null, '麦富迪 高品质鸡胸肉400g 训练 奖励', '56.80', '5860', null);
INSERT INTO `mainlist` VALUES ('83', null, null, '零食', '../img/lingshi5.jpg', null, null, null, null, null, '曼劳立体派牛肉口味200g', '29.90', '232165', null);
INSERT INTO `mainlist` VALUES ('84', null, null, '零食', '../img/lingshi6.jpg', null, null, null, null, null, '日本它它杂锦罐装狗狗防口臭饼干1kg', '38.00', '186200', null);
INSERT INTO `mainlist` VALUES ('85', null, null, '零食', '../img/lingshi7.jpg', null, null, null, null, null, '麦富迪 高品质鸡胸肉400g 训练 奖励 狗零食', '29.00', '158387', null);
INSERT INTO `mainlist` VALUES ('86', null, null, '零食', '../img/lingshi8.jpg', null, null, null, null, null, '宝路 中小型犬成犬洁齿棒75g', '11.50', '212694', null);
INSERT INTO `mainlist` VALUES ('87', null, null, '保健品', '../img/baojian1.jpg', null, null, null, null, null, '佑达发育宝 钙胃能450g 犬猫用补钙配方 增强体质', '120.00', '5635', null);
INSERT INTO `mainlist` VALUES ('88', null, null, '保健品', '../img/baojian2.jpg', null, null, null, null, null, '小宠EHD 犬猫综合营养素120g 全龄期适用', '75.00', '10730', null);
INSERT INTO `mainlist` VALUES ('89', null, null, '保健品', '../img/baojian3.jpg', null, null, null, null, null, '维斯康 亮洁护眼配方营养粉剂85g 犬猫通用', '68.00', '1647', null);
INSERT INTO `mainlist` VALUES ('90', null, null, '保健品', '../img/baojian4.jpg', null, null, null, null, null, '句句兽 松松饭系列生态海藻粉200g 犬猫通用', '46.00', '267', null);
INSERT INTO `mainlist` VALUES ('91', null, null, '保健品', '../img/baojian5.jpg', null, null, null, null, null, 'BOTH 山羊奶粉450g 适用幼猫幼犬怀孕犬猫', '98.00', '46481', null);
INSERT INTO `mainlist` VALUES ('92', null, null, '保健品', '../img/baojian6.jpg', null, null, null, null, null, 'MAG 犬用超浓缩冰岛三文鱼油300ml', '168.00', '2124', null);
INSERT INTO `mainlist` VALUES ('93', null, null, '保健品', '../img/baojian7.jpg', null, null, null, null, null, '法国维克Virbac 克补软膏维生素营养膏120.5g', '95.00', '93376', null);
INSERT INTO `mainlist` VALUES ('94', null, null, '保健品', '../img/baojian8.jpg', null, null, null, null, null, '谷登 微量元素片200粒', '39.00', '32057', null);
INSERT INTO `mainlist` VALUES ('95', null, null, '医疗', '../img/yiliao1.jpg', null, null, null, null, null, '大宠爱 体内体外驱虫滴剂盒装15mg*3支 2.5kg以下适用', '168.00', '12900', null);
INSERT INTO `mainlist` VALUES ('96', null, null, '医疗', '../img/yiliao2.jpg', null, null, null, null, null, '拜宠清 狗狗体内驱虫药犬用打虫药 单片装', '45.00', '672499', null);
INSERT INTO `mainlist` VALUES ('97', null, null, '医疗', '../img/yiliao3.jpg', null, null, null, null, null, '麦高臣宠物神仙水-100ML 宠物伤口及皮肤护理', '150.00', '2355', null);
INSERT INTO `mainlist` VALUES ('98', null, null, '医疗', '../img/yiliao4.jpg', null, null, null, null, null, '爱沃克 10-25kg犬用驱虫滴剂L 3支/盒', '330.00', '308', null);
INSERT INTO `mainlist` VALUES ('99', null, null, '医疗', '../img/yiliao5.jpg', null, null, null, null, null, '尼可信小型犬抗寄生虫药3片/盒（2-4KG犬用）', '203.00', '10183', null);
INSERT INTO `mainlist` VALUES ('100', null, null, '医疗', '../img/yiliao6.jpg', null, null, null, null, null, '拜有利 风味片单粒装50mg M 单片装', '20.00', '9308', null);
INSERT INTO `mainlist` VALUES ('101', null, null, '医疗', '../img/yiliao7.jpg', null, null, null, null, null, '法国维克复合酶牙膏套装 猫狗牙刷牙膏 去牙结石口臭70g', '107.00', '9229', null);
INSERT INTO `mainlist` VALUES ('102', null, null, '医疗', '../img/yiliao8.jpg', null, null, null, null, null, '福来恩犬心保 牛肉块12kg-22kg', '35.00', '31026', null);
INSERT INTO `mainlist` VALUES ('103', null, null, '沐浴露', '../img/muyu1.jpg', null, null, null, null, null, 'APDC 低敏免洗泡沫 200ml', '160.00', '21', null);
INSERT INTO `mainlist` VALUES ('104', null, null, '沐浴露', '../img/muyu2.jpg', null, null, null, null, null, '特瑞仕 杀菌止痒去污免洗干洗粉 犬猫通用 100g', '30.00', '3265', null);
INSERT INTO `mainlist` VALUES ('105', null, null, '沐浴露', '../img/muyu3.jpg', null, null, null, null, null, '旺芙 蓬松有型宠物香波沐浴露 500ml', '128.00', '1275', null);
INSERT INTO `mainlist` VALUES ('106', null, null, '沐浴露', '../img/muyu4.jpg', null, null, null, null, null, 'Lorde 低敏宠物沐浴露 500ml', '69.00', '2320', null);
INSERT INTO `mainlist` VALUES ('107', null, null, '沐浴露', '../img/muyu5.jpg', null, null, null, null, null, '怡亲多可特 除虫香波500ML', '19.90', '63632', null);
INSERT INTO `mainlist` VALUES ('108', null, null, '沐浴露', '../img/muyu6.jpg', null, null, null, null, null, '逸诺SOS 红棕毛专用香波沐浴露530ml', '45.60', '9813', null);
INSERT INTO `mainlist` VALUES ('109', null, null, '沐浴露', '../img/muyu7.jpg', null, null, null, null, null, 'LION 每日洗二合一香波柔和花香型泵头 爱犬用550ML', '76.00', '15713', null);
INSERT INTO `mainlist` VALUES ('110', null, null, '沐浴露', '../img/muyu8.jpg', null, null, null, null, null, '8in1 珍珠白毛专用洗毛精宠物香波473ml 保持亮丽光泽', '95.00', '541', null);
INSERT INTO `mainlist` VALUES ('111', null, null, '日用品', '../img/riyong1.jpg', null, null, null, null, null, 'APDC 漂漂水全能喷雾 森林香 300ml', '170.00', '25', null);
INSERT INTO `mainlist` VALUES ('112', null, null, '日用品', '../img/riyong2.jpg', null, null, null, null, null, '日本爱蓓诗 折叠式宠物盘狗厕所', '130.00', '134', null);
INSERT INTO `mainlist` VALUES ('113', null, null, '日用品', '../img/riyong3.jpg', null, null, null, null, null, 'pidan 宠物电动饮水机', '189.00', '2321', null);
INSERT INTO `mainlist` VALUES ('114', null, null, '日用品', '../img/riyong4.jpg', null, null, null, null, null, '小佩 智能抗菌宠物猫狗碗F1小号 多色可选', '99.00', '2331', null);
INSERT INTO `mainlist` VALUES ('115', null, null, '日用品', '../img/riyong5.jpg', null, null, null, null, null, '德国福莱希荧光黄自动牵引绳', '99.00', '6958', null);
INSERT INTO `mainlist` VALUES ('116', null, null, '日用品', '../img/riyong6.jpg', null, null, null, null, null, 'JULIUS K9 IDC系列胸背防冲背带国旗款 欧洲原装进口', '299.00', '563', null);
INSERT INTO `mainlist` VALUES ('117', null, null, '日用品', '../img/riyong7.jpg', null, null, null, null, null, 'Kyjen酷极 大型犬用水滴食盆 狗碗狗玩具 慢食碗', '69.00', '7058', null);
INSERT INTO `mainlist` VALUES ('118', null, null, '日用品', '../img/riyong8.jpg', null, null, null, null, null, 'AFP宠物活氧饮水机', '98.00', '47312', null);
INSERT INTO `mainlist` VALUES ('119', null, null, '美容', '../img/meirong1.jpg', null, null, null, null, null, '富美内特FURminator 豪华祛毛梳', '225.00', '719', null);
INSERT INTO `mainlist` VALUES ('120', null, null, '美容', '../img/meirong2.jpg', null, null, null, null, null, 'Pidan 去毛梳硅胶按摩梳', '45.00', '882', null);
INSERT INTO `mainlist` VALUES ('121', null, null, '美容', '../img/meirong3.jpg', null, null, null, null, null, '爱丽思IRIS 宠物静音烘干器 PDR270', '358.00', '265', null);
INSERT INTO `mainlist` VALUES ('122', null, null, '美容', '../img/meirong4.jpg', null, null, null, null, null, 'petmate 3合1宠物洗澡按摩除毛手套 美国进口', '75.00', '487', null);
INSERT INTO `mainlist` VALUES ('123', null, null, '美容', '../img/meirong5.jpg', null, null, null, null, null, '宝润 宠物推剪P7', '109.00', '941', null);
INSERT INTO `mainlist` VALUES ('124', null, null, '美容', '../img/meirong6.jpg', null, null, null, null, null, '船记(DeLight) 犬用指甲剪 DL46', '45.00', '494', null);
INSERT INTO `mainlist` VALUES ('125', null, null, '美容', '../img/meirong7.jpg', null, null, null, null, null, '爱丽思IRIS 宠物浴盆洗澡盆BO600E', '78.00', '1784', null);
INSERT INTO `mainlist` VALUES ('126', null, null, '美容', '../img/meirong8.jpg', null, null, null, null, null, '喜乐蒂 可折叠美容台STL-830', '350.00', '70', null);
INSERT INTO `mainlist` VALUES ('127', null, null, '玩具', '../img/wanju1.jpg', null, null, null, null, null, '酷极Kyjen 火山寻宝益智玩具 狗玩具', '49.00', '3629', null);
INSERT INTO `mainlist` VALUES ('128', null, null, '玩具', '../img/wanju2.jpg', null, null, null, null, null, '酷极Kyjen 爱乐风狗狗飞盘 宠物飞盘玩具', '49.00', '5766', null);
INSERT INTO `mainlist` VALUES ('129', null, null, '玩具', '../img/wanju3.jpg', null, null, null, null, null, '美国petmate 狗斯拉橡胶绳结双重洁牙玩具 狗玩具', '35.00', '1579', null);
INSERT INTO `mainlist` VALUES ('130', null, null, '玩具', '../img/wanju4.jpg', null, null, null, null, null, '美国petstages 绿咖咖果冻骨 宠物磨牙洁齿玩具', '60.00', '747', null);
INSERT INTO `mainlist` VALUES ('131', null, null, '玩具', '../img/wanju5.jpg', null, null, null, null, null, '酷极kyjen 七连环 狗玩具', '119.00', '191', null);
INSERT INTO `mainlist` VALUES ('132', null, null, '玩具', '../img/wanju6.jpg', null, null, null, null, null, 'petsafe Busy Buddy* Tug-a-Jug 漏食瓶', '81.00', '44', null);
INSERT INTO `mainlist` VALUES ('133', null, null, '玩具', '../img/wanju7.jpg', null, null, null, null, null, '酷极Kyjen 玩具（邪恶小分队）', '48.00', '165', null);
INSERT INTO `mainlist` VALUES ('134', null, null, '玩具', '../img/wanju8.jpg', null, null, null, null, null, 'Petmate CHUCKIT!?四角飞鼠飞盘', '65.00', '94', null);
INSERT INTO `mainlist` VALUES ('135', null, null, '衣服窝', '../img/yifu1.jpg', null, null, null, null, null, 'Touchdog它它 新款宠物衣服狐狸装可爱狗衣服泰迪雪纳瑞冬季厚衣服', '102.00', '133', null);
INSERT INTO `mainlist` VALUES ('136', null, null, '衣服窝', '../img/yifu2.jpg', null, null, null, null, null, '小佩 智能冷暖宠物窝猫窝狗窝', '899.00', '130', null);
INSERT INTO `mainlist` VALUES ('137', null, null, '衣服窝', '../img/yifu3.jpg', null, null, null, null, null, '怡亲 宠物家居窝', '99.00', '238', null);
INSERT INTO `mainlist` VALUES ('138', null, null, '衣服窝', '../img/yifu4.jpg', null, null, null, null, null, '爱宝嘉 邂逅宠物窝 可拆洗', '158.00', '76', null);
INSERT INTO `mainlist` VALUES ('139', null, null, '衣服窝', '../img/yifu5.jpg', null, null, null, null, null, '小佩 四季深睡床垫', '199.00', '293', null);
INSERT INTO `mainlist` VALUES ('140', null, null, '衣服窝', '../img/yifu6.jpg', null, null, null, null, null, '捣蛋鬼 抽屉式托盘宠物笼子带厕所 小号猫/狗笼', '249.90', '956', null);
INSERT INTO `mainlist` VALUES ('141', null, null, '衣服窝', '../img/yifu7.jpg', null, null, null, null, null, '伊丽 长颈鹿方形垫子', '95.00', '191', null);
INSERT INTO `mainlist` VALUES ('142', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('143', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('144', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('145', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('146', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('147', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('148', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('149', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('150', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('151', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('152', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('153', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('154', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('155', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('156', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('157', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('158', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('159', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('160', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('161', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('162', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('163', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('164', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('165', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('166', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('167', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('168', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('169', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('170', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('171', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('172', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('173', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('174', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('175', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('176', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('177', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('178', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('179', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('180', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('181', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('182', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('183', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('184', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('185', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('186', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('187', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('188', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('189', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('190', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('191', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('192', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('193', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('194', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('195', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('196', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('197', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('198', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('199', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `mainlist` VALUES ('200', null, null, null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for usermsg
-- ----------------------------
DROP TABLE IF EXISTS `usermsg`;
CREATE TABLE `usermsg` (
  `usermobile` varchar(255) DEFAULT NULL,
  `userpsw` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usermsg
-- ----------------------------
INSERT INTO `usermsg` VALUES ('18144433370', '123456', 'silence', '1');
INSERT INTO `usermsg` VALUES ('17328294525', '123456', 'silen', '2');
INSERT INTO `usermsg` VALUES ('17328294526', 'ssssss', 'ssssss', '3');
INSERT INTO `usermsg` VALUES ('17328294524', 'ssssss', 'sssssss', '4');
INSERT INTO `usermsg` VALUES ('17328294523', 'ssssss', 'sss', '5');
INSERT INTO `usermsg` VALUES ('17328294522', 'sssssss', 'ssss', '6');
INSERT INTO `usermsg` VALUES ('17328294521', 'ssssss', 'ss', '7');
INSERT INTO `usermsg` VALUES ('17328294529', '123456789', 'sssssssss', '8');
INSERT INTO `usermsg` VALUES ('17328294520', '123456', '123456', '9');
INSERT INTO `usermsg` VALUES ('18144433360', '123456', 'sssss', '10');
INSERT INTO `usermsg` VALUES ('18144433350', '123456', 'silenceyjj', '11');
INSERT INTO `usermsg` VALUES ('13420108124', '123456', '哈哈', '12');
INSERT INTO `usermsg` VALUES ('13420108124', '123456', '哈哈', '13');
INSERT INTO `usermsg` VALUES ('15119022856', '123456', 'mama', '14');
INSERT INTO `usermsg` VALUES ('15119022856', '123456', 'mama', '15');
INSERT INTO `usermsg` VALUES ('13420101314', '123456', '1314', '16');
INSERT INTO `usermsg` VALUES ('18888888888', '888888', '888888', '17');
INSERT INTO `usermsg` VALUES ('19999999999', '123456', '999999', '18');
SET FOREIGN_KEY_CHECKS=1;
