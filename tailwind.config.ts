import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {    //Python: for i in range(101): print("'"+str(i)+"%': { transform: 'translateY("+ str(i)+ "%)' },")
        move_and_dissapear_up: {
          '0%': { transform: 'translateY(0%)' },
          '1%': { transform: 'translateY(-1%)' },
          '2%': { transform: 'translateY(-2%)' },
          '3%': { transform: 'translateY(-3%)' },
          '4%': { transform: 'translateY(-4%)' },
          '5%': { transform: 'translateY(-5%)' },
          '6%': { transform: 'translateY(-6%)' },
          '7%': { transform: 'translateY(-7%)' },
          '8%': { transform: 'translateY(-8%)' },
          '9%': { transform: 'translateY(-9%)' },
          '10%': { transform: 'translateY(-10%)' },
          '11%': { transform: 'translateY(-11%)' },
          '12%': { transform: 'translateY(-12%)' },
          '13%': { transform: 'translateY(-13%)' },
          '14%': { transform: 'translateY(-14%)' },
          '15%': { transform: 'translateY(-15%)' },
          '16%': { transform: 'translateY(-16%)' },
          '17%': { transform: 'translateY(-17%)' },
          '18%': { transform: 'translateY(-18%)' },
          '19%': { transform: 'translateY(-19%)' },
          '20%': { transform: 'translateY(-20%)' },
          '21%': { transform: 'translateY(-21%)' },
          '22%': { transform: 'translateY(-22%)' },
          '23%': { transform: 'translateY(-23%)' },
          '24%': { transform: 'translateY(-24%)' },
          '25%': { transform: 'translateY(-25%)' },
          '26%': { transform: 'translateY(-26%)' },
          '27%': { transform: 'translateY(-27%)' },
          '28%': { transform: 'translateY(-28%)' },
          '29%': { transform: 'translateY(-29%)' },
          '30%': { transform: 'translateY(-30%)' },
          '31%': { transform: 'translateY(-31%)' },
          '32%': { transform: 'translateY(-32%)' },
          '33%': { transform: 'translateY(-33%)' },
          '34%': { transform: 'translateY(-34%)' },
          '35%': { transform: 'translateY(-35%)' },
          '36%': { transform: 'translateY(-36%)' },
          '37%': { transform: 'translateY(-37%)' },
          '38%': { transform: 'translateY(-38%)' },
          '39%': { transform: 'translateY(-39%)' },
          '40%': { transform: 'translateY(-40%)' },
          '41%': { transform: 'translateY(-41%)' },
          '42%': { transform: 'translateY(-42%)' },
          '43%': { transform: 'translateY(-43%)' },
          '44%': { transform: 'translateY(-44%)' },
          '45%': { transform: 'translateY(-45%)' },
          '46%': { transform: 'translateY(-46%)' },
          '47%': { transform: 'translateY(-47%)' },
          '48%': { transform: 'translateY(-48%)' },
          '49%': { transform: 'translateY(-49%)' },
          '50%': { transform: 'translateY(-50%)' },
          '51%': { transform: 'translateY(-51%)' },
          '52%': { transform: 'translateY(-52%)' },
          '53%': { transform: 'translateY(-53%)' },
          '54%': { transform: 'translateY(-54%)' },
          '55%': { transform: 'translateY(-55%)' },
          '56%': { transform: 'translateY(-56%)' },
          '57%': { transform: 'translateY(-57%)' },
          '58%': { transform: 'translateY(-58%)' },
          '59%': { transform: 'translateY(-59%)' },
          '60%': { transform: 'translateY(-60%)' },
          '61%': { transform: 'translateY(-61%)' },
          '62%': { transform: 'translateY(-62%)' },
          '63%': { transform: 'translateY(-63%)' },
          '64%': { transform: 'translateY(-64%)' },
          '65%': { transform: 'translateY(-65%)' },
          '66%': { transform: 'translateY(-66%)' },
          '67%': { transform: 'translateY(-67%)' },
          '68%': { transform: 'translateY(-68%)' },
          '69%': { transform: 'translateY(-69%)' },
          '70%': { transform: 'translateY(-70%)' },
          '71%': { transform: 'translateY(-71%)' },
          '72%': { transform: 'translateY(-72%)' },
          '73%': { transform: 'translateY(-73%)' },
          '74%': { transform: 'translateY(-74%)' },
          '75%': { transform: 'translateY(-75%)' },
          '76%': { transform: 'translateY(-76%)' },
          '77%': { transform: 'translateY(-77%)' },
          '78%': { transform: 'translateY(-78%)' },
          '79%': { transform: 'translateY(-79%)' },
          '80%': { transform: 'translateY(-80%)' },
          '81%': { transform: 'translateY(-81%)' },
          '82%': { transform: 'translateY(-82%)' },
          '83%': { transform: 'translateY(-83%)' },
          '84%': { transform: 'translateY(-84%)' },
          '85%': { transform: 'translateY(-85%)' },
          '86%': { transform: 'translateY(-86%)' },
          '87%': { transform: 'translateY(-87%)' },
          '88%': { transform: 'translateY(-88%)' },
          '89%': { transform: 'translateY(-89%)' },
          '90%': { transform: 'translateY(-90%)' },
          '91%': { transform: 'translateY(-91%)' },
          '92%': { transform: 'translateY(-92%)' },
          '93%': { transform: 'translateY(-93%)' },
          '94%': { transform: 'translateY(-94%)' },
          '95%': { transform: 'translateY(-95%)' },
          '96%': { transform: 'translateY(-96%)' },
          '97%': { transform: 'translateY(-97%)' },
          '98%': { transform: 'translateY(-98%)' },
          '99%': { transform: 'translateY(-99%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        move_and_dissapear_down: {
          '0%': { transform: 'translateY(0%)' },
          '1%': { transform: 'translateY(1%)' },
          '2%': { transform: 'translateY(2%)' },
          '3%': { transform: 'translateY(3%)' },
          '4%': { transform: 'translateY(4%)' },
          '5%': { transform: 'translateY(5%)' },
          '6%': { transform: 'translateY(6%)' },
          '7%': { transform: 'translateY(7%)' },
          '8%': { transform: 'translateY(8%)' },
          '9%': { transform: 'translateY(9%)' },
          '10%': { transform: 'translateY(10%)' },
          '11%': { transform: 'translateY(11%)' },
          '12%': { transform: 'translateY(12%)' },
          '13%': { transform: 'translateY(13%)' },
          '14%': { transform: 'translateY(14%)' },
          '15%': { transform: 'translateY(15%)' },
          '16%': { transform: 'translateY(16%)' },
          '17%': { transform: 'translateY(17%)' },
          '18%': { transform: 'translateY(18%)' },
          '19%': { transform: 'translateY(19%)' },
          '20%': { transform: 'translateY(20%)' },
          '21%': { transform: 'translateY(21%)' },
          '22%': { transform: 'translateY(22%)' },
          '23%': { transform: 'translateY(23%)' },
          '24%': { transform: 'translateY(24%)' },
          '25%': { transform: 'translateY(25%)' },
          '26%': { transform: 'translateY(26%)' },
          '27%': { transform: 'translateY(27%)' },
          '28%': { transform: 'translateY(28%)' },
          '29%': { transform: 'translateY(29%)' },
          '30%': { transform: 'translateY(30%)' },
          '31%': { transform: 'translateY(31%)' },
          '32%': { transform: 'translateY(32%)' },
          '33%': { transform: 'translateY(33%)' },
          '34%': { transform: 'translateY(34%)' },
          '35%': { transform: 'translateY(35%)' },
          '36%': { transform: 'translateY(36%)' },
          '37%': { transform: 'translateY(37%)' },
          '38%': { transform: 'translateY(38%)' },
          '39%': { transform: 'translateY(39%)' },
          '40%': { transform: 'translateY(40%)' },
          '41%': { transform: 'translateY(41%)' },
          '42%': { transform: 'translateY(42%)' },
          '43%': { transform: 'translateY(43%)' },
          '44%': { transform: 'translateY(44%)' },
          '45%': { transform: 'translateY(45%)' },
          '46%': { transform: 'translateY(46%)' },
          '47%': { transform: 'translateY(47%)' },
          '48%': { transform: 'translateY(48%)' },
          '49%': { transform: 'translateY(49%)' },
          '50%': { transform: 'translateY(50%)' },
          '51%': { transform: 'translateY(51%)' },
          '52%': { transform: 'translateY(52%)' },
          '53%': { transform: 'translateY(53%)' },
          '54%': { transform: 'translateY(54%)' },
          '55%': { transform: 'translateY(55%)' },
          '56%': { transform: 'translateY(56%)' },
          '57%': { transform: 'translateY(57%)' },
          '58%': { transform: 'translateY(58%)' },
          '59%': { transform: 'translateY(59%)' },
          '60%': { transform: 'translateY(60%)' },
          '61%': { transform: 'translateY(61%)' },
          '62%': { transform: 'translateY(62%)' },
          '63%': { transform: 'translateY(63%)' },
          '64%': { transform: 'translateY(64%)' },
          '65%': { transform: 'translateY(65%)' },
          '66%': { transform: 'translateY(66%)' },
          '67%': { transform: 'translateY(67%)' },
          '68%': { transform: 'translateY(68%)' },
          '69%': { transform: 'translateY(69%)' },
          '70%': { transform: 'translateY(70%)' },
          '71%': { transform: 'translateY(71%)' },
          '72%': { transform: 'translateY(72%)' },
          '73%': { transform: 'translateY(73%)' },
          '74%': { transform: 'translateY(74%)' },
          '75%': { transform: 'translateY(75%)' },
          '76%': { transform: 'translateY(76%)' },
          '77%': { transform: 'translateY(77%)' },
          '78%': { transform: 'translateY(78%)' },
          '79%': { transform: 'translateY(79%)' },
          '80%': { transform: 'translateY(80%)' },
          '81%': { transform: 'translateY(81%)' },
          '82%': { transform: 'translateY(82%)' },
          '83%': { transform: 'translateY(83%)' },
          '84%': { transform: 'translateY(84%)' },
          '85%': { transform: 'translateY(85%)' },
          '86%': { transform: 'translateY(86%)' },
          '87%': { transform: 'translateY(87%)' },
          '88%': { transform: 'translateY(88%)' },
          '89%': { transform: 'translateY(89%)' },
          '90%': { transform: 'translateY(90%)' },
          '91%': { transform: 'translateY(91%)' },
          '92%': { transform: 'translateY(92%)' },
          '93%': { transform: 'translateY(93%)' },
          '94%': { transform: 'translateY(94%)' },
          '95%': { transform: 'translateY(95%)' },
          '96%': { transform: 'translateY(96%)' },
          '97%': { transform: 'translateY(97%)' },
          '98%': { transform: 'translateY(98%)' },
          '99%': { transform: 'translateY(99%)', height: '50vh' },
          '99.99%': { transform: 'translateY(99.99%)', height: '50vh' },
          '100%': { transform: 'translateY(100%)', height: '0'},
        }
      },
      animation: {
        move_and_dissapear_up: 'move_and_dissapear_up 2s ease-in-out forwards',
        move_and_dissapear_down: 'move_and_dissapear_down 2s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};
export default config;
