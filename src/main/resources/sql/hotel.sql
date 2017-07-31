/*
Navicat MySQL Data Transfer

Source Server         : gg
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : hotel

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2017-07-31 21:47:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `A_ID` int(11) NOT NULL AUTO_INCREMENT,
  `A_NAME` varchar(255) NOT NULL,
  PRIMARY KEY (`A_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('2', 'hulian');

-- ----------------------------
-- Table structure for t_customer
-- ----------------------------
DROP TABLE IF EXISTS `t_customer`;
CREATE TABLE `t_customer` (
  `C_ID` int(11) NOT NULL AUTO_INCREMENT,
  `C_NAME` varchar(255) NOT NULL,
  `C_TEL` varchar(255) NOT NULL,
  `C_CREDENTIALSID` varchar(255) NOT NULL,
  `C_ROOMNO` varchar(255) NOT NULL,
  `C_ARRIVE` varchar(255) NOT NULL,
  `C_LEAVE` varchar(255) NOT NULL,
  `C_DEPOSIT` float NOT NULL,
  `C_PAY` float NOT NULL,
  `C_PS` varchar(255) NOT NULL,
  PRIMARY KEY (`C_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_customer
-- ----------------------------
INSERT INTO `t_customer` VALUES ('2', '户', '12345678922', '123456789123456789', 'r-102', '2017-07-04', '2017-07-20', '11', '111', '1111');

-- ----------------------------
-- Table structure for t_reservation
-- ----------------------------
DROP TABLE IF EXISTS `t_reservation`;
CREATE TABLE `t_reservation` (
  `R_ID` int(11) NOT NULL AUTO_INCREMENT,
  `R_TYPE` varchar(255) NOT NULL COMMENT '预约方式',
  `R_ARRIVE` date NOT NULL COMMENT '预约时间',
  `R_LEAVE` date NOT NULL COMMENT '离开日期',
  `R_STATUS` varchar(255) NOT NULL DEFAULT '' COMMENT '预定状态',
  `R_NAME` varchar(255) NOT NULL COMMENT '姓名',
  `R_SEX` varchar(255) NOT NULL COMMENT '性别',
  `R_CREDENTIALSTYPE` varchar(255) NOT NULL COMMENT '证件类型',
  `R_CREDENTIALSNO` varchar(255) NOT NULL COMMENT '证件号码',
  `R_TEL` varchar(255) NOT NULL COMMENT '联系电话',
  `R_EMAIL` varchar(255) NOT NULL COMMENT '电子邮箱',
  `R_COUNT` int(11) NOT NULL COMMENT '数量',
  `R_COST` float(10,2) NOT NULL COMMENT '总费用',
  `R_PAYTYPE` varchar(255) NOT NULL COMMENT '付款方式',
  `R_EARNEST` float NOT NULL COMMENT '预定金',
  `R_PS` varchar(255) NOT NULL COMMENT '备注',
  PRIMARY KEY (`R_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_reservation
-- ----------------------------
INSERT INTO `t_reservation` VALUES ('2', '2', '2017-07-26', '2017-07-25', '2', '2', '2', '2', '2', '22', '2', '2', '2.00', '2', '2', '2');
INSERT INTO `t_reservation` VALUES ('3', '3', '2017-07-25', '2017-07-25', '3', '3', '3', '3', '3', '3', '3', '3', '3.00', '3', '3', '3');

-- ----------------------------
-- Table structure for t_room
-- ----------------------------
DROP TABLE IF EXISTS `t_room`;
CREATE TABLE `t_room` (
  `R_ID` int(11) NOT NULL AUTO_INCREMENT,
  `R_NO` varchar(255) NOT NULL,
  `R_STATUS` int(11) NOT NULL DEFAULT '0',
  `R_PAY` float NOT NULL,
  `R_TYPE` varchar(255) NOT NULL,
  PRIMARY KEY (`R_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_room
-- ----------------------------
INSERT INTO `t_room` VALUES ('1', 'A101', '1', '100', '标准间');
INSERT INTO `t_room` VALUES ('2', 'A102', '1', '100', '标准间');
INSERT INTO `t_room` VALUES ('3', 'A103', '1', '100', '标准间');
INSERT INTO `t_room` VALUES ('4', 'A104', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('5', 'A105', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('6', 'A106', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('7', 'A107', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('8', 'A108', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('9', 'A109', '0', '100', '标准间');
INSERT INTO `t_room` VALUES ('10', 'B101', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('11', 'B102', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('12', 'B103', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('13', 'B104', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('14', 'B105', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('15', 'B106', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('16', 'B107', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('17', 'B108', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('19', 'B109', '0', '150', '大床间');
INSERT INTO `t_room` VALUES ('20', 'C101', '0', '300', '套房');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `U_ID` int(11) NOT NULL AUTO_INCREMENT,
  `U_NAME` varchar(255) NOT NULL,
  `U_PASSWORD` varchar(255) NOT NULL,
  PRIMARY KEY (`U_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'hulian', '123');
