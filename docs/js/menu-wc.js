"use strict";

customElements.define(
  "compodoc-menu",
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute("mode") === "normal";
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">todo-list-resful-api documentation</a>
                </li>

                <li class="divider"></li>
                ${isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : ""}
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#modules-links"'
                                : 'data-bs-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                            : 'data-bs-target="#xs-controllers-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                            : 'id="xs-controllers-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                        : 'data-bs-target="#xs-injectables-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                        : 'id="xs-injectables-links-module-AppModule-623105e7640fef63f7c4242bc888d069bbb1c23390ea5213e966cdcf8e157bdfe0361e2e1f5eccf8b54039dd4ea213947e59c64feb6f009c55d8373f5024995b"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-AuthModule-27c1be2bf4a90771fa32a614bb0d199a9808f21ecdc3fd87470cd64ca2d9d14b70e859db47c117c997d7afec83850eafd2679a129534088263646655778c2f8d"'
                                        : 'data-bs-target="#xs-injectables-links-module-AuthModule-27c1be2bf4a90771fa32a614bb0d199a9808f21ecdc3fd87470cd64ca2d9d14b70e859db47c117c997d7afec83850eafd2679a129534088263646655778c2f8d"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AuthModule-27c1be2bf4a90771fa32a614bb0d199a9808f21ecdc3fd87470cd64ca2d9d14b70e859db47c117c997d7afec83850eafd2679a129534088263646655778c2f8d"'
                                        : 'id="xs-injectables-links-module-AuthModule-27c1be2bf4a90771fa32a614bb0d199a9808f21ecdc3fd87470cd64ca2d9d14b70e859db47c117c997d7afec83850eafd2679a129534088263646655778c2f8d"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/BcryptProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BcryptProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                            : 'data-bs-target="#xs-controllers-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                            : 'id="xs-controllers-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                        : 'data-bs-target="#xs-injectables-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                        : 'id="xs-injectables-links-module-UsersModule-a8b92c68cf1cda24d16558441a94639d9981c755efbc3bef5bc4982c75b7a24001d3672c30fabed5d19c041fdcb4b50d67c4f2ea0fe1305e2c8c101fb45b252b"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#controllers-links"'
                                : 'data-bs-target="#xs-controllers-links"'
                            }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"'}>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#entities-links"'
                                : 'data-bs-target="#xs-entities-links"'
                            }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"'}>
                                <li class="link">
                                    <a href="entities/Todo.html" data-type="entity-link" >Todo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#classes-links"'
                            : 'data-bs-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                            <li class="link">
                                <a href="classes/BaseTodoDto.html" data-type="entity-link" >BaseTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseUserDto.html" data-type="entity-link" >BaseUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#injectables-links"'
                                : 'data-bs-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"'}>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordService.html" data-type="entity-link" >PasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#interfaces-links"'
                            : 'data-bs-target="#xs-interfaces-links"'
                        }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"'}>
                            <li class="link">
                                <a href="interfaces/HashAlgoInterface.html" data-type="entity-link" >HashAlgoInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"'}>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  }
);
